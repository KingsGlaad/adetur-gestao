/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSignIn, useAuth } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { EmailIcon, PasswordIcon } from "@/assets/icons";
import InputGroup from "../../FormElements/InputGroup";
import { Checkbox } from "../../FormElements/checkbox";

export default function Signin() {
  const { signIn, isLoaded, setActive } = useSignIn();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  if (isSignedIn) {
    redirect("/admin");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: name === "remember" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    setLoading(true);
    setError(null);

    try {
      const result = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/admin");
      } else {
        setError("Algo inesperado aconteceu. Tente novamente.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.errors?.[0]?.message || "Erro ao tentar fazer login.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!isLoaded) return;
    setGoogleLoading(true);
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback", // precisa estar configurado no Clerk
        redirectUrlComplete: "/admin",
      });
    } catch (err) {
      console.error("Erro ao fazer login com Google", err);
      setError("Erro ao redirecionar para login com Google.");
      setGoogleLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5 space-y-4">
        <InputGroup
          type="email"
          label="Email"
          placeholder="Digite seu e-mail"
          name="email"
          handleChange={handleChange}
          value={data.email}
          icon={<EmailIcon />}
        />

        <InputGroup
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          name="password"
          handleChange={handleChange}
          value={data.password}
          icon={<PasswordIcon />}
        />
      </div>

      <div className="mb-6 flex items-center justify-between gap-2 py-2 font-medium">
        <Checkbox
          label="Lembrar-me"
          name="remember"
          withIcon="check"
          minimal
          radius="md"
          onChange={handleChange}
        />

        <Link
          href="/auth/forgot-password"
          className="hover:text-primary dark:text-white dark:hover:text-primary"
        >
          Esqueceu a senha?
        </Link>
      </div>

      {error && (
        <div className="mb-4 text-sm text-red-500 font-medium">{error}</div>
      )}

      <div className="mb-4.5">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
          disabled={loading}
        >
          Entrar
          {loading && (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent dark:border-primary dark:border-t-transparent" />
          )}
        </button>
      </div>

      <div className="relative mb-4">
        <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-px bg-stroke dark:bg-dark-3"></span>
        <span className="relative z-10 mx-auto block w-fit bg-white px-4 text-sm text-gray-500 dark:bg-gray-dark dark:text-dark-6">
          ou continue com
        </span>
      </div>

      <div className="mb-5">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
          className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray-2 p-[15px] font-medium hover:bg-opacity-50 dark:border-dark-3 dark:bg-dark-2 dark:hover:bg-opacity-50"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4285F4"
              d="M24 9.5c3.5 0 6.3 1.4 8.3 3.5l6.2-6.2C34.3 3.2 29.5 1 24 1 14.8 1 7.2 6.8 3.9 14.4l7.3 5.7C13.1 14.3 18.1 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.4h12.6c-.3 2.1-1.5 5.3-4.2 7.4l6.5 5C43.6 36.7 46.1 31.2 46.1 24.5z"
            />
            <path
              fill="#FBBC05"
              d="M11.2 28.6c-1-3-1-6.3 0-9.3l-7.3-5.7C.8 18.2 0 21 0 24s.8 5.8 2.2 8.4l7.3-5.8z"
            />
            <path
              fill="#EA4335"
              d="M24 47c6.5 0 11.9-2.1 15.9-5.8l-6.5-5c-2.1 1.4-5 2.2-9.4 2.2-5.9 0-10.9-4.8-12.6-11.2l-7.3 5.8C7.2 41.2 14.8 47 24 47z"
            />
          </svg>
          {googleLoading ? "Redirecionando..." : "Entrar com Google"}
        </button>
      </div>
    </form>
  );
}
