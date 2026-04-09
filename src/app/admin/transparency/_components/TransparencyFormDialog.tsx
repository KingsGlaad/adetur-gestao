"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Plus, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Transparency } from "@/types/transparency";

const transparencySchema = z.object({
  title: z.string().min(1, "O título é obrigatório."),
  description: z.string().optional(),
  category: z.string().min(1, "A categoria é obrigatória."),
});

type TransparencyFormValues = z.infer<typeof transparencySchema>;

interface TransparencyFormDialogProps {
  initialData?: Transparency | null;
  onUpdate: () => void;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const CATEGORIES = [
  "LDO - Lei de Diretrizes Orçamentárias",
  "LOA - Lei Orçamentária Anual",
  "PPA - Plano Plurianual",
  "Relatórios de Gestão",
  "Editais",
  "Outros",
];

export function TransparencyFormDialog({
  initialData,
  onUpdate,
  isOpen: controlledIsOpen,
  onOpenChange: controlledOnOpenChange,
}: TransparencyFormDialogProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isOpen = controlledIsOpen ?? internalIsOpen;
  const onOpenChange = controlledOnOpenChange ?? setInternalIsOpen;

  const title = initialData ? "Editar Arquivo" : "Novo Arquivo de Transparência";
  const action = initialData ? "Salvar alterações" : "Adicionar Arquivo";
  const toastMessage = initialData ? "Arquivo atualizado." : "Arquivo adicionado.";

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<TransparencyFormValues>({
    resolver: zodResolver(transparencySchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      category: initialData?.category || "",
    },
  });

  const categoryValue = watch("category");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title || "",
        description: initialData.description || "",
        category: initialData.category || "",
      });
    } else {
      reset({
        title: "",
        description: "",
        category: "",
      });
    }
    setFile(null);
  }, [initialData, reset, isOpen]);

  const onSubmit = async (values: TransparencyFormValues) => {
    if (!initialData && !file) {
      toast.error("O arquivo PDF é obrigatório.");
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description || "");
      formData.append("category", values.category);
      if (file) {
        formData.append("file", file);
      }

      if (initialData) {
        await axios.patch(`/api/transparency/${initialData.id}`, formData);
      } else {
        await axios.post("/api/transparency", formData);
      }

      toast.success(toastMessage);
      onUpdate();
      onOpenChange(false);
    } catch (error) {
      console.error("Erro ao salvar transparência:", error);
      toast.error("Ocorreu um erro ao salvar os dados.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) return null;

  const content = (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Título do Arquivo</Label>
            <Input
              id="title"
              {...register("title")}
              placeholder="Ex: LDO 2024 - Exercício 2025"
              className="mt-1"
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="category">Categoria</Label>
            <Select
              value={categoryValue}
              onValueChange={(val) => setValue("category", val)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="description">Descrição (Opcional)</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Breve descrição do conteúdo do arquivo"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="file">Arquivo PDF {initialData ? "(Deixe vazio para manter o atual)" : ""}</Label>
            <div className="mt-1 flex items-center gap-4">
              <Input
                id="file"
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="cursor-pointer"
              />
            </div>
            {file && (
              <p className="text-xs text-muted-foreground mt-2 flex items-center">
                <FileText className="h-3 w-3 mr-1" /> {file.name}
              </p>
            )}
          </div>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processando...
            </>
          ) : (
            action
          )}
        </Button>
      </form>
    </DialogContent>
  );

  if (initialData) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        {content}
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Novo Arquivo
        </Button>
      </DialogTrigger>
      {content}
    </Dialog>
  );
}
