import fetch from "node-fetch";

// Function to get a fresh access token using refresh_token
async function getAccessToken() {
  const params = new URLSearchParams();
  params.append("client_id", process.env.ZOHO_CLIENT_ID);
  params.append("client_secret", process.env.ZOHO_CLIENT_SECRET);
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", process.env.ZOHO_REFRESH_TOKEN);

  const res = await fetch("https://accounts.zoho.eu/oauth/v2/token", {
    method: "POST",
    body: params,
  });

  const data = await res.json();
  return data.access_token; // valid for 1 hour
}

export async function POST(req) {
  try {
    const body = await req.json();
    const accessToken = await getAccessToken();

    const contactPayload = {
      data: [
        {
          First_Name: "",
          Last_Name: body.name || "",
          Email: body.email || "",
          Phone: body.phone || "",
          Description: body.message || "",
          Account_Name: body.company || "",
        },
      ],
    };

    const response = await fetch(`${process.env.ZOHO_API_BASE}/Contacts`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactPayload),
    });

    const data = await response.json();
    console.log(data);
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
