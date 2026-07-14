import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_portfolio';
const TEMPLATE_ID = 'template_contact';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload as unknown as Record<string, unknown>, { publicKey: PUBLIC_KEY });
}
