"use client";

import { useEffect, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { z } from "zod";
import { contactSchema } from "./schema";
import { sendContactEmail } from "./actions";


type ContactFormInput = z.infer<typeof contactSchema>;

// --- Componente do Botão (para gerenciar o estado de loading) ---
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Enviando..." : "Enviar Mensagem"}
    </Button>
  );
}

export default function ContatoPage() {
  const [state, formAction] = useActionState(sendContactEmail, {
    success: false,
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    // Se não houver mensagem, não faz nada.
    if (!state.message) {
      return;
    }

    // Exibe o toast com base no sucesso ou falha.
    if (state.success) {
      toast.success(state.message);
      reset(); // Limpa o formulário apenas em caso de sucesso.
    } else {
      toast.error(state.message);
    }
  }, [state.success, state.message, reset]); // Depende dos valores primitivos do estado

  return (
    <>
      {/* Contêiner para a imagem de fundo com overlay adaptativo */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg/bg-municipios1.png')" }}
      >
        <div className="absolute inset-0 bg-background/85 dark:bg-background/92 backdrop-blur-sm" />
      </div>
      <main className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card text-card-foreground border-border/80 shadow-2xl rounded-3xl backdrop-blur-md">
            <CardHeader className="text-center space-y-2 pb-6">
              <span className="text-xs uppercase tracking-wider font-bold text-primary">Atendimento & Suporte</span>
              <CardTitle className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Entre em Contato
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Tem alguma dúvida ou sugestão? Preencha o formulário abaixo e
                nossa equipe responderá o mais breve possível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit((data) => {
                  const formData = new FormData();
                  Object.entries(data).forEach(([key, value]) => {
                    formData.append(key, value);
                  });
                  formAction(formData);
                })}
                className="space-y-6"
                noValidate 
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      className={cn(errors.name && "border-red-500 focus-visible:ring-red-500")} />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email" {...register("email")}
                      className={cn(errors.email && "border-red-500 focus-visible:ring-red-500")} />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    className={cn(errors.subject && "border-red-500 focus-visible:ring-red-500")} />
                  {errors.subject && (
                    <p className="text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    {...register("message")}
                    className={cn(errors.message && "border-red-500 focus-visible:ring-red-500")} />
                  {errors.message && (
                    <p className="text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
