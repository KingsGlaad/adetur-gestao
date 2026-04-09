/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import Mailgun from "mailgun.js";
import formDataLib from "form-data";
import { contactSchema } from "./schema";

type ContactFormState = {
  success: boolean;
  message: string;
};

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // 1. Validar variáveis de ambiente no servidor
  const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAIL_FROM, MAIL_TO, NEXT_PUBLIC_SITE_URL } = process.env;

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !MAIL_FROM || !MAIL_TO || !NEXT_PUBLIC_SITE_URL) {
    console.error("Uma ou mais variáveis de ambiente (Mailgun, Site URL) não estão configuradas.");
    return {
      success: false,
      message: "Erro de configuração no servidor. Contate o administrador.",
    };
  }

  // 2. Inicializar o cliente Mailgun dentro da action
  const mailgun = new Mailgun(formDataLib);
  const mg = mailgun.client({
    username: "api",
    key: MAILGUN_API_KEY,
  });

  // 3. Validar os dados do formulário
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
    await mg.messages.create(MAILGUN_DOMAIN, {
      from: MAIL_FROM,
      to: [MAIL_TO],
      subject: `[Contato ADETUR] - ${subject}`,
      "h:Reply-To": email, // Adiciona o e-mail do remetente no cabeçalho de resposta
      text: `Nova mensagem de contato de ${name} (${email}). Assunto: ${subject}. Mensagem: ${message}`,
      html: `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f7f6; color: #333; }
          .container { width: 100%; max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0; }
          .header { background-color: #1e3a8a; color: #ffffff; padding: 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 30px; }
          .content h2 { color: #1e3a8a; font-size: 20px; border-bottom: 2px solid #eeeeee; padding-bottom: 10px; margin-top: 0; }
          .details-table { width: 100%; margin-bottom: 20px; border-collapse: collapse; }
          .details-table td { padding: 8px 0; }
          .details-table td:first-child { font-weight: bold; width: 100px; }
          .message-box { background-color: #f8f9fa; border-left: 4px solid #1e3a8a; padding: 15px; margin-top: 20px; white-space: pre-wrap; font-size: 15px; line-height: 1.6; }
          .footer { background-color: #eeeeee; color: #777777; padding: 20px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nova Mensagem de Contato</h1>
          </div>
          <div class="content">
            <h2>Detalhes do Remetente</h2>
            <table class="details-table">
              <tr><td>Nome:</td><td>${name}</td></tr>
              <tr><td>E-mail:</td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td>Assunto:</td><td>${subject}</td></tr>
            </table>
            <h2>Mensagem</h2>
            <div class="message-box">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <div class="footer">
            <img src="${NEXT_PUBLIC_SITE_URL}/logo.png" alt="ADETUR Logo" style="width: 50px; height: auto; margin: 0 auto 15px auto; display: block;">
            <p>Esta mensagem foi enviada através do formulário de contato do site ADETUR Alta Mogiana.</p>
            <p>&copy; ${new Date().getFullYear()} ADETUR. Todos os direitos reservados.</p>
          </div>
        </div>
      </body>
      </html>`,
    });
    return { success: true, message: "E-mail enviado com sucesso!" };
  } catch (error: any) {
    // 4. Log de erro aprimorado
    console.error("Falha ao enviar e-mail pelo Mailgun:", error);

    // Adiciona uma verificação específica para erro de autenticação ou proibição
    if (error.status === 401 || error.status === 403) {
      console.error(`Erro de permissão (${error.status}) no Mailgun. Verifique a MAILGUN_API_KEY e o domínio.`);
      
      // Em desenvolvimento, simula o sucesso para não bloquear o fluxo de teste do formulário
      if (process.env.NODE_ENV === "development") {
        console.warn("Aviso: Simulando envio de e-mail com sucesso no modo de desenvolvimento (Mailgun indisponível).");
        return {
          success: true,
          message: "E-mail enviado com sucesso (simulado em ambiente de desenvolvimento)!",
        };
      }

      return {
        success: false,
        message: "Erro de configuração no servidor de e-mail. O administrador foi notificado.",
      };
    }

    if (error instanceof Error) {
      console.error("Detalhes do erro:", error.message);
    }

    return {
      success: false,
      message: "Não foi possível enviar sua mensagem. Por favor, tente novamente mais tarde.",
    };
  }
}