// app/sso-callback/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth, useSession, useUser, useClerk } from "@clerk/nextjs";

export default function SsoCallbackPage() {
  const router = useRouter();
  const { setActive } = useClerk();
  const { sessionId } = useAuth();

  useEffect(() => {
    const finishSSO = async () => {
      try {
        if (sessionId) {
          await setActive({ session: sessionId });
          router.push("/admin");
        }
      } catch (error) {
        console.error("Erro ao finalizar o login SSO:", error);
        router.push("/sign-in?error=sso");
      }
    };

    finishSSO();
  }, [sessionId, setActive, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-600 dark:text-gray-300">Redirecionando...</p>
    </div>
  );
}
