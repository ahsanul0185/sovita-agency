
// import { NextResponse } from "next/server";
// import fetch from "node-fetch";

// // Function to get a fresh access token using refresh_token
// async function getAccessToken() {
//   const params = new URLSearchParams();
//   params.append("client_id", process.env.ZOHO_CLIENT_ID);
//   params.append("client_secret", process.env.ZOHO_CLIENT_SECRET);
//   params.append("grant_type", "refresh_token");
//   params.append("refresh_token", process.env.ZOHO_BILLING_REFRESH_TOKEN);

//   const res = await fetch("https://accounts.zoho.eu/oauth/v2/token", {
//     method: "POST",
//     body: params,
//   });

//   const data = await res.json();
//   return data.access_token;
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, totalAmount, plan, duration, addons } = body;

//     console.log("Total Amount:", totalAmount);

//     const { ZOHO_ORG_ID } = process.env;

//     // Step 1: Get Access Token
//     const access_token = await getAccessToken();

//     if (!access_token) {
//       return NextResponse.json(
//         { error: "Failed to get access token" },
//         { status: 400 }
//       );
//     }

//     // Step 2: Check if Customer Exists by Email
//     let customerId = null;

//     const searchCustomerRes = await fetch(
//       `https://www.zohoapis.eu/billing/v1/customers?email=${encodeURIComponent(
//         email
//       )}&organization_id=${ZOHO_ORG_ID}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Zoho-oauthtoken ${access_token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const searchCustomerData = await searchCustomerRes.json();

//     console.log("Search Customer Data:", searchCustomerData);

//     // Check if customer exists in the response
//     if (
//       searchCustomerData.code === 0 &&
//       searchCustomerData.customers &&
//       searchCustomerData.customers.length > 0
//     ) {
//       // Customer exists, use the existing customer_id
//       customerId = searchCustomerData.customers[0].customer_id;
//       console.log("Existing Customer ID:", customerId);
//     } else {
//       // Customer doesn't exist, create a new one
//       console.log("Customer not found, creating new customer...");

//       const createCustomerRes = await fetch(
//         `https://www.zohoapis.eu/billing/v1/customers?organization_id=${ZOHO_ORG_ID}`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Zoho-oauthtoken ${access_token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             display_name: name,
//             email,
//             phone,
//           }),
//         }
//       );

//       const createCustomerData = await createCustomerRes.json();

//       console.log("Create Customer Data:", createCustomerData);

//       customerId = createCustomerData.customer?.customer_id;

//       if (!customerId) {
//         return NextResponse.json(
//           { error: "Failed to create customer", details: createCustomerData },
//           { status: 400 }
//         );
//       }

//       console.log("New Customer ID:", customerId);
//     }

//     // Step 3: Create Payment Link using v3 API
//     const formData = new URLSearchParams();

//     // Create the JSONString payload
//     const jsonPayload = {
//       customer_id: customerId,
//       payment_amount: totalAmount.toString(),
//       description: `${plan} Plan - ${duration}`,
//       // Optional: Set expiry date (format: YYYY-MM-DD)
//       // expiry_time: "2025-12-31"
//     };

//     formData.append("JSONString", JSON.stringify(jsonPayload));
//     formData.append("organization_id", ZOHO_ORG_ID);

//     const paymentLinkRes = await fetch(
//       `https://www.zohoapis.eu/billing/v3/paymentlinks`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Zoho-oauthtoken ${access_token}`,
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formData,
//       }
//     );

//     const paymentLinkData = await paymentLinkRes.json();

//     // =====================================================================
    
//     // =====================================================================




//     console.log("Payment Link Data:", paymentLinkData);

//     if (paymentLinkData.code === 0 && paymentLinkData.payment_link) {
//       return NextResponse.json({
//         success: true,
//         paymentUrl: paymentLinkData.payment_link.url,
//         paymentLinkId: paymentLinkData.payment_link.payment_link_id,
//         paymentLinkNumber: paymentLinkData.payment_link.payment_link_number,
//         customerId: customerId,
//         expiryDate: paymentLinkData.payment_link.expiry_time,
//         isNewCustomer: searchCustomerData.customers?.length === 0,
//       });
//     } else {
//       return NextResponse.json(
//         {
//           error: "Failed to create payment link",
//           details: paymentLinkData,
//         },
//         { status: 400 }
//       );
//     }
//   } catch (error) {
//     console.error("Error in payment creation:", error);
//     return NextResponse.json(
//       {
//         error: "Internal server error",
//         message: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }












import { NextResponse } from "next/server";
import fetch from "node-fetch";

// Function to get a fresh access token using refresh_token
async function getAccessToken() {
  const params = new URLSearchParams();
  params.append("client_id", process.env.ZOHO_CLIENT_ID);
  params.append("client_secret", process.env.ZOHO_CLIENT_SECRET);
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", process.env.ZOHO_BILLING_REFRESH_TOKEN);

  const res = await fetch("https://accounts.zoho.eu/oauth/v2/token", {
    method: "POST",
    body: params,
  });

  const data = await res.json();
  return data.access_token;
}

// Function to get item by name
async function getItemByName(access_token, itemName, orgId) {
  try {
    const searchRes = await fetch(
      `https://www.zohoapis.eu/billing/v1/items?organization_id=${orgId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Zoho-oauthtoken ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const itemsData = await searchRes.json();
    
    console.log("Items API Response:", JSON.stringify(itemsData, null, 2));

    // Check for items in response
    if (itemsData.code === 0 && itemsData.items && itemsData.items.length > 0) {
      console.log("Available items:", itemsData.items.map(i => ({ name: i.name, id: i.item_id })));
      
      // Find item by name (case-insensitive)
      const item = itemsData.items.find(
        (i) => i.name.toLowerCase().trim() === itemName.toLowerCase().trim()
      );
      
      if (item) {
        console.log("Found Item:", JSON.stringify(item, null, 2));
        return item;
      } else {
        console.error(`Item "${itemName}" not found. Available items:`, itemsData.items.map(i => i.name));
      }
    } else {
      console.error("No items found in Zoho or API error:", itemsData);
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching item:", error);
    return null;
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, totalAmount, plan, company_name, addons } = body;

    console.log("Request Body:", body);

    const { ZOHO_ORG_ID } = process.env;

    // Step 1: Get Access Token
    const access_token = await getAccessToken();

    if (!access_token) {
      return NextResponse.json(
        { error: "Failed to get access token" },
        { status: 400 }
      );
    }

    // Step 2: Get Item by Plan Name
    const item = await getItemByName(access_token, plan, ZOHO_ORG_ID);
    
    if (!item) {
      return NextResponse.json(
        { error: `Item not found with name: ${plan}` },
        { status: 404 }
      );
    }

    console.log("Using Item:", {
      item_id: item.item_id,
      name: item.name,
      rate: item.rate,
      tax_id: item.tax_id,
      account_id: item.account_id,
    });

    // Step 3: Check if Customer Exists by Email
    let customerId = null;
    let contactPersonId = null;

    const searchCustomerRes = await fetch(
      `https://www.zohoapis.eu/billing/v1/customers?email=${encodeURIComponent(
        email
      )}&organization_id=${ZOHO_ORG_ID}`,
      {
        method: "GET",
        headers: {
          Authorization: `Zoho-oauthtoken ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const searchCustomerData = await searchCustomerRes.json();

    console.log("Search Customer Data:", searchCustomerData);

    // Check if customer exists in the response
    if (
      searchCustomerData.code === 0 &&
      searchCustomerData.customers &&
      searchCustomerData.customers.length > 0
    ) {
      // Customer exists, use the existing customer_id
      customerId = searchCustomerData.customers[0].customer_id;
      
      // Get customer details to fetch contact persons
      const customerDetailRes = await fetch(
        `https://www.zohoapis.eu/billing/v1/customers/${customerId}?organization_id=${ZOHO_ORG_ID}`,
        {
          method: "GET",
          headers: {
            Authorization: `Zoho-oauthtoken ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      
      const customerDetail = await customerDetailRes.json();
      console.log("Customer Detail Response:", JSON.stringify(customerDetail, null, 2));
      
      if (customerDetail.code === 0 && customerDetail.customer) {
        // Try to get contact person from primary_contactperson_id or contact_persons array
        if (customerDetail.customer.primary_contactperson_id) {
          contactPersonId = customerDetail.customer.primary_contactperson_id;
          console.log("Found Primary Contact Person ID:", contactPersonId);
        } else if (customerDetail.customer.contact_persons && 
            customerDetail.customer.contact_persons.length > 0) {
          contactPersonId = customerDetail.customer.contact_persons[0].contact_person_id;
          console.log("Found Contact Person ID from array:", contactPersonId);
        } else {
          console.log("No contact persons found in customer details");
        }
      }
      
      console.log("Existing Customer ID:", customerId);
      console.log("Final Contact Person ID:", contactPersonId);
    } else {
      // Customer doesn't exist, create a new one
      console.log("Customer not found, creating new customer...");

      const createCustomerRes = await fetch(
        `https://www.zohoapis.eu/billing/v1/customers?organization_id=${ZOHO_ORG_ID}`,
        {
          method: "POST",
          headers: {
            Authorization: `Zoho-oauthtoken ${access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            display_name: name,
            email,
            phone,
            company_name
          }),
        }
      );

      const createCustomerData = await createCustomerRes.json();

      console.log("Create Customer Data:", createCustomerData);

      customerId = createCustomerData.customer?.customer_id;
      // Get contact person from newly created customer
      if (createCustomerData.customer?.contact_persons && 
          createCustomerData.customer.contact_persons.length > 0) {
        contactPersonId = createCustomerData.customer.contact_persons[0].contact_person_id;
      }

      if (!customerId) {
        return NextResponse.json(
          { error: "Failed to create customer", details: createCustomerData },
          { status: 400 }
        );
      }

      console.log("New Customer ID:", customerId);
      console.log("Contact Person ID:", contactPersonId);
    }

    // Step 4: Create Invoice with retrieved item data
    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

    const dueDate = new Date(today);
    dueDate.setDate(dueDate.getDate() + 3);
    const dueDateFormatted = dueDate.toISOString().split('T')[0]

    // Prepare line items using the retrieved item data
    const lineItems = [
      {
        item_order: 1,
        item_id: item.item_id,
        rate: parseFloat(totalAmount || item.rate),
        name: item.name,
        description: item.description || "",
        quantity: 1.00,
        discount: 0,
        tax_id: item.tax_id || "",
        account_id: item.account_id || "",
        unit: item.unit || "",
      }
    ];

    console.log("Prepared line items:", JSON.stringify(lineItems, null, 2));

    // Add addons if provided
    if (addons && Array.isArray(addons) && addons.length > 0) {
      for (let i = 0; i < addons.length; i++) {
        const addon = addons[i];
        const addonItem = await getItemByName(access_token, addon.name, ZOHO_ORG_ID);
        
        if (addonItem) {
          lineItems.push({
            item_order: i + 2,
            item_id: addonItem.item_id,
            rate: parseFloat(addon.price || addonItem.rate),
            name: addonItem.name,
            description: addon.description || addonItem.description || '',
            quantity: parseFloat(addon.quantity || 1),
            discount: 0,
            tax_id: addonItem.tax_id || "",
            account_id: addonItem.account_id || "",
            unit: addonItem.unit || "",
          });
        }
      }
    }

    // Prepare invoice items in the exact format from API documentation
    const invoiceItems = lineItems.map(item => ({
      product_id: item.item_id,
      name: item.name,
      description: item.description,
      item_order: item.item_order,
      price: item.rate,
      quantity: item.quantity,
      unit: item.unit,
      discount: item.discount,
      tax_id: item.tax_id,
    }));

    const invoicePayload = {
      customer_id: customerId,
      date: today,
      due_date: dueDateFormatted,
      payment_terms: 0,
      payment_terms_label: "Payable à réception",
      notes: "Merci de votre confiance.",
      terms: "",
      is_inclusive_tax: false,
      invoice_items: invoiceItems,
      allow_partial_payments: false,
      is_discount_before_tax: true,
      discount: 0,
      discount_type: "entity_level",
      adjustment: 0,
      adjustment_description: "Ajustement",
      payment_options: {
        payment_gateways: [
          {
            gateway_name: "test_gateway"
          }
        ]
      }
    };

    console.log("Invoice Payload:", JSON.stringify(invoicePayload, null, 2));

    // Create invoice WITHOUT send=true (create as draft first)
    const createInvoiceRes = await fetch(
      `https://www.zohoapis.eu/billing/v1/invoices?organization_id=${ZOHO_ORG_ID}`,
      {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoicePayload),
      }
    );

    const invoiceData = await createInvoiceRes.json();

    console.log("Invoice Creation Response:", JSON.stringify(invoiceData, null, 2));

    if (invoiceData.code === 0 && invoiceData.invoice) {
      const invoiceId = invoiceData.invoice.invoice_id;
      
      // Step 5: Email the invoice using the Email Invoice API
      console.log("Emailing invoice ID:", invoiceId);
      
      const emailPayload = {
        to_mail_ids: [email]
      };

      const emailInvoiceRes = await fetch(
        `https://www.zohoapis.eu/billing/v1/invoices/${invoiceId}/email?organization_id=${ZOHO_ORG_ID}`,
        {
          method: "POST",
          headers: {
            Authorization: `Zoho-oauthtoken ${access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailPayload),
        }
      );

      const emailData = await emailInvoiceRes.json();
      console.log("Email Invoice Response:", JSON.stringify(emailData, null, 2));

      return NextResponse.json({
        success: true,
        invoice: {
          invoiceId: invoiceData.invoice.invoice_id,
          invoiceNumber: invoiceData.invoice.invoice_number,
          invoiceUrl: invoiceData.invoice.invoice_url?.trim(),
          total: invoiceData.invoice.total,
          totalFormatted: invoiceData.invoice.total_formatted,
          balance: invoiceData.invoice.balance,
          balanceFormatted: invoiceData.invoice.balance_formatted,
          status: invoiceData.invoice.status,
          statusFormatted: invoiceData.invoice.status_formatted,
          date: invoiceData.invoice.date,
          dueDate: invoiceData.invoice.due_date,
          isEmailed: emailData.code === 0, // Check if email was sent successfully
          currencyCode: invoiceData.invoice.currency_code,
          currencySymbol: invoiceData.invoice.currency_symbol,
        },
        customer: {
          customerId: customerId,
          customerName: invoiceData.invoice.customer_name,
          email: invoiceData.invoice.email,
          isNewCustomer: searchCustomerData.customers?.length === 0,
        },
        message: invoiceData.message,
        emailStatus: emailData.message || "Email sent successfully",
      });
    } else {
      return NextResponse.json(
        {
          error: "Failed to create invoice",
          details: invoiceData,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error in invoice creation:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}