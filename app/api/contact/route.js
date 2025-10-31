// app/api/contact/route.js
import { Resend } from 'resend';

const resend = new Resend("re_DRQSqLJv_CPBXZNjybvMyFW8UxsMrqGia"); // Keep the key in .env

export async function POST(req) {
  const body = await req.json();

  const { Name, Email, Phone, Company, interestedIn, Message } = body;

  if (!Name || !Email || !Message) {
    return new Response(JSON.stringify({ success: false, error: 'Required fields are missing.' }), {
      status: 400,
    });
  }

  try {
    const response = await resend.emails.send({
      from: 'Sovita Agency <onboarding@resend.dev>',
      to: 'contact@shikam.fr',
      subject: `📬 Contact from ${Name}`,
      html: `
        <div style="font-family: sans-serif;">
          <p><strong>Name:</strong> ${Name}</p>
          <p><strong>Email:</strong> ${Email}</p>
          <p><strong>Phone:</strong> ${Phone || 'N/A'}</p>
          <p><strong>Company:</strong> ${Company || 'N/A'}</p>
          <p><strong>Interested In:</strong> ${interestedIn || 'N/A'}</p>
          <p><strong>Message:</strong><br>${Message}</p>
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
