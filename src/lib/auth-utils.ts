import { auth } from "@/lib/auth";

/**
 * Retorna a sessão atual do servidor.
 * Use em Server Components e API Routes.
 */
export async function getSession() {
  return await auth();
}

/**
 * Retorna o usuário da sessão atual.
 * Retorna null se não houver sessão.
 */
export async function getCurrentUser() {
  const session = await auth();
  return session?.user ?? null;
}
