"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Post } from "@/types/post";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { EditorToolbar } from "./TiptapEditor";

const postSchema = z.object({
  title: z.string().min(1, "O título é obrigatório."),
  subtitle: z.string().optional(),
  altText: z.string().optional(),
  content: z
    .string()
    .refine(
      (value) => value.replace(/<p><\/p>/g, "").trim().length > 0,
      "O conteúdo é obrigatório.",
    ),
  published: z.boolean(),
});

type PostFormValues = z.infer<typeof postSchema>;

interface PostFormProps {
  initialData?: Post | null;
}

export function PostForm({ initialData }: PostFormProps) {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(
    initialData?.coverImage || null,
  );
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const title = initialData ? "Editar Notícia" : "Nova Notícia";
  const action = initialData ? "Salvar alterações" : "Criar Notícia";
  const toastMessage = initialData ? "Notícia atualizada." : "Notícia criada.";

  const {
    register,
    handleSubmit,
    control, // Importar o control
    setValue,
    formState: { errors },
  } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: initialData?.title || "",
      subtitle: initialData?.subtitle || "",
      content: initialData?.content || "",
      altText: initialData?.altText || "",
      published: initialData?.published || false,
    },
  });

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    immediatelyRender: false,
    content: initialData?.content || "",
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert max-w-none prose-sm sm:prose-base focus:outline-none min-h-[300px] p-4",
      },
    },
    onUpdate: ({ editor }) => {
      setValue("content", editor.getHTML(), { shouldValidate: true });
    },
  });

  useEffect(() => {
    // Limpa a URL do objeto de preview para evitar vazamento de memória
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  useEffect(() => {
    // Desliga o editor quando o componente é desmontado
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  const onSubmit = async (data: PostFormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("subtitle", data.subtitle || "");
      formData.append("altText", data.altText || "");
      formData.append("content", data.content);
      formData.append("published", String(data.published));
      if (imageFile) {
        formData.append("coverImage", imageFile);
      }

      if (initialData) {
        await axios.put(`/api/posts/${initialData.id}`, formData);
      } else {
        await axios.post("/api/posts", formData);
      }

      toast.success(toastMessage);
      router.push("/admin/posts");
      router.refresh(); // Atualiza os dados da tabela na página de listagem
    } catch (error) {
      console.error("Erro ao salvar a notícia:", error);
      toast.error("Ocorreu um erro ao salvar a notícia.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setExistingImage(null);
    }
  };

  const currentImage = imagePreview || existingImage;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label>Imagem de Capa</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1"
          />
          {currentImage && (
            <div className="mt-4 relative w-40 h-40">
              <Image
                src={currentImage}
                alt="Preview"
                fill
                className="object-cover rounded-md"
              />
            </div>
          )}
        </div>
        <div>
          <Label>Créditos da imagem</Label>
          <Input {...register("altText")} className="mt-1" />
          {errors.altText && (
            <p className="text-sm text-red-500 mt-1">
              {errors.altText.message}
            </p>
          )}
        </div>
        <div>
          <Label>Título</Label>
          <Input {...register("title")} className="mt-1" />
          {errors.title && (
            <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <Label>Subtítulo</Label>
          <Input {...register("subtitle")} className="mt-1" />
          {errors.subtitle && (
            <p className="text-sm text-red-500 mt-1">
              {errors.subtitle.message}
            </p>
          )}
        </div>
        <div>
          <Label>Conteúdo</Label>
          <div className="mt-1 rounded-md border border-input bg-transparent">
            <EditorToolbar editor={editor} />
            <EditorContent editor={editor} />
          </div>
          {errors.content && (
            <p className="text-sm text-red-500 mt-1">
              {errors.content.message}
            </p>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Controller
            name="published"
            control={control}
            render={({ field }) => (
              <Switch
                id="published"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />

          <Label htmlFor="published">Publicar notícia?</Label>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...
            </>
          ) : (
            action
          )}
        </Button>
      </form>
    </div>
  );
}
