"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contract_Form() {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    setStatus("Submitting...");
    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        message: data.description,
      };

      const res = await fetch("/api/submit-bigin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Form submitted successfully!");
        reset(); // clear form

        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        setStatus("Error: " + (result.error || "Unknown error"));
      }
    } catch (err) {
      // setStatus("Error: " + err.message);
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 flex-wrap">
      <input
        type="text"
        className="w-full bg-white rounded-xl px-4 py-[14px] text-black text-sm"
        placeholder="Nom"
        {...register("name", { required: true })}
      />
      <input
        type="text"
        placeholder="Email"
        className="w-full lg:w-[48%] bg-white rounded-xl px-4 py-[14px] text-black text-sm"
        {...register("email", { required: true })}
      />
      <input
        type="text"
        placeholder="Téléphone"
        className="w-full lg:w-[48%] bg-white rounded-xl px-4 py-[14px] text-black text-sm"
        {...register("phone")}
      />
      <input
        type="text"
        placeholder="Société"
        className="w-full bg-white rounded-xl px-4 py-[14px] text-black text-sm"
        {...register("company")}
      />
      {/* <select
        className='w-full bg-white rounded-xl px-4 py-[14px] text-black text-sm'
        {...register("interest")}
      >
        <option value=''>je suis intéressé(e) par*</option>
        <option value='création de site'>création de site</option>
        <option value='Référencement local'>Référencement local</option>
        <option value='Google Ads'>Google Ads</option>
        <option value='Social ads'>Social ads</option>
        <option value='Google Business profile'>
          Google Business profile
        </option>
        <option value='TikTok'>TikTok</option>
        <option value='Autre'>Autre</option>
      </select> */}
      <textarea
        className="w-full bg-white rounded-xl px-4 py-[14px] text-black text-sm"
        placeholder="Message"
        {...register("description")}
      />
      <div className="flex justify-between items-center flex-col lg:flex-row gap-5">
        <button
          type="submit"
          className="border border-white rounded-[55px] px-8 py-4 text-sm font-bold leading-[120%] cursor-pointer"
        >
          Envoyer
        </button>
      </div>

      {status && (
        <p className="text-sm text-white mt-2">
          {status === "Submitting..." ? "" : status}
        </p>
      )}
    </form>
  );
}
