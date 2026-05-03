'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendEmailAction(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const validatedData = contactSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      success: false,
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real scenario, you would use 'resend' here:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({...})

  console.log('Server Action received contact form:', validatedData.data);

  return {
    success: true,
  };
}
