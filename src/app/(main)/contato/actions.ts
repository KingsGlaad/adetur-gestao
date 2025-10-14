"use server";

import formData from "form-data";
import Mailgun from "mailgun.js";
import { contactSchema } from "./schema";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
});

type ContactFormState = {
  success: boolean;
  message: string;
};

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Ocorreu um erro de validação. Por favor, verifique os campos.",
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: process.env.MAIL_FROM!,
      to: [process.env.MAIL_TO!],
      subject: `[Contato ADETUR] - ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      html: `<p><strong>Nome:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr><p>${message.replace(/\n/g, "<br>")}</p>`,
    });
    return { success: true, message: "E-mail enviado com sucesso!" };
  } catch (error) {
    console.error("Mailgun error:", error);
    return {
      success: false,
      message: "Falha ao enviar o e-mail. Tente novamente mais tarde.",
    };
  }
}