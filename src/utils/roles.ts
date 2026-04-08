export async function isAuthenticated(): Promise<boolean> {
  const { auth } = await import("@/lib/auth");
  const session = await auth();
  return session !== null;
}
