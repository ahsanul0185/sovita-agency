import { useState } from "react";

export default function Purchase_form({ selectedPlan, setSelectedPlan }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const halfPrice = selectedPlan?.price ? (selectedPlan.price / 2).toFixed(2) : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payloadData = {
        name : `${formData.firstName} ${formData.lastName}`,
        email : formData.email,
        phone : formData.phone,
        totalAmount : halfPrice,
        plan : selectedPlan?.name
    }

    try {
 
    setIsLoading(true)
    const res = await fetch("/api/purchase-site", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payloadData),
    });
    setIsLoading(false)

    const data = await res.json();
    console.log(data)

    if (data.success ) {
        const paymentUrl = data?.invoice?.invoiceUrl
      window.location.href = paymentUrl; // Redirect to Zoho payment page
    } else {
      alert("Erreur lors de la création du lien de paiement");
      console.error(data);
    }

    } catch (error) {
        setIsLoading(false)
        console.log(error)
    }

  };



  return (
    <div className="flex flex-col items-center justify-center text-white py-10">
      {/* Plan Summary */}
      <div className="w-full max-w-3xl  p-6 rounded-md border border-white/10 mb-6 shadow-lg backdrop-blur-md">
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">
          {selectedPlan?.name || "Selected Plan"}
        </h3>
        <p className="text-gray-400 mb-4">{selectedPlan?.subtitle}</p>

        <ul className="space-y-2 text-gray-300 mb-4 list-disc list-inside">
          {selectedPlan?.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="flex justify-between items-center border-t border-white/10 pt-4">
          <p className="text-gray-400">Total Price</p>
          <p className="text-xl font-medium text-white">{selectedPlan?.price}€ HT</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-400">Amount to Pay Now (50%)</p>
          <p className="text-xl font-semibold text-blue-400">{halfPrice}€</p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl  p-8 rounded-md border border-white/10 shadow-lg backdrop-blur-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-main-blue">
          Confirm Your Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1 text-gray-300">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full bg-transparent border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="w-full bg-transparent border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm mb-1 text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full bg-transparent border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm mb-1 text-gray-300">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1234567890"
            className="w-full bg-transparent border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="mt-6 flex text-sm items-center gap-2">
            <button onClick={() => setSelectedPlan(null)} className="w-1/2 cursor-pointer rounded py-3 border hover:bg-white/5 border-white/20 ">Cancel</button>
            <button
          type="submit"
          className=" w-1/2 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-medium py-3 rounded transition-all  cursor-pointerhover:shadow-blue-500/30"
        >
          Proceed to Payment ({halfPrice}€)
        </button>
        </div>
      </form>
    </div>
  );
}
