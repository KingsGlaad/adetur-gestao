/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { EmailIcon, PasswordIcon } from "@/assets/icons";
import InputGroup from "../../FormElements/InputGroup";
import { Checkbox } from "../../FormElements/checkbox";

export default function Signin() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: name === "remember" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email ou senha inválidos. Tente novamente.");
      } else if (result?.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError("Algo inesperado aconteceu. Tente novamente.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Erro ao tentar fazer login. Tente novamente.");
    } finally {
      setLoading(false);
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
    </form>
  );
}
