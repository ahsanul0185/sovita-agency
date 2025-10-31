// // pages/api/contact.js
// import { Resend } from 'resend';
import { Resend } from "resend";

const resend = new Resend("re_DRQSqLJv_CPBXZNjybvMyFW8UxsMrqGia");

export async function POST(req) {

  const body = await req.json();

  const { Email } = body;

  if (!Email) {
    return new Response(JSON.stringify({ success: false, error: 'Required fields are missing.' }), {
      status: 400,
    });
  }

  try {
    const response = await resend.emails.send({
      from: "Sovita Agency <onboarding@resend.dev>",
      to: "contact@shikam.fr",
      subject: `📬 Subscription  Form Submission`,
      html: `
        <div style="font-family: sans-serif;">
          <p><strong>Email:</strong> ${Email}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, data: response }), {
      status: 200,
    });
  } catch (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}