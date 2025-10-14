import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "O nome é obrigatório"),
  email: z.string().email("Por favor, insira um e-mail válido"),
  subject: z.string().min(5, "O assunto é obrigatório"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});