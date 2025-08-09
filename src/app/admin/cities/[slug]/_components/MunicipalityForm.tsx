"use client";

import Image from "next/image";
import { useMunicipalityForm } from "../_hooks/useMunicipalityForm";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

import { MunicipalityRefined } from "@/types/municipality";
import { MunicipalityImageGallery } from "./municipality/MunicipalityImageGallery";
import { TiptapEditor } from "./municipality/TiptapEditor";

interface MunicipalityFormProps {
  municipio: MunicipalityRefined;
}

export function MunicipalityForm({ municipio }: MunicipalityFormProps) {
  const { form, editor, isSubmitting, coatOfArms, gallery, onSubmit } =
    useMunicipalityForm(municipio);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* SEÇÃO DA IMAGEM DE CAPA */}
      <div>
        <Label>Imagem de Capa (Brasão)</Label>
        <div className="mt-2 flex items-center gap-4 p-4 border rounded-lg">
          <Image
            src={coatOfArms.preview || "/images/no-image.jpg"}
            alt="Pré-visualização do Brasão"
            width={100}
            height={100}
            className="object-contain rounded-md bg-slate-100"
          />
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                const file = e.target.files[0];
                coatOfArms.setFile(file);
                coatOfArms.setPreview(URL.createObjectURL(file));
              }
            }}
          />
        </div>
      </div>

      {/* SEÇÃO DA GALERIA */}
      <MunicipalityImageGallery
        images={gallery.images}
        onAddImages={gallery.addImages}
        onRemoveImage={gallery.removeImage}
        isUploading={gallery.isLoading}
      />

      <hr />

      {/* DADOS DO MUNICÍPIO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="hidden" {...register("id", { value: municipio.id })} />

        <div>
          <Label>Nome</Label>
          <Input {...register("name")} />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label>Descrição Curta (para cartões e listas)</Label>
          <Textarea {...register("description")} />
          {errors.description && (
            <p className="text-sm text-red-500 mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>

      <TiptapEditor editor={editor} error={errors.about?.message} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Latitude</Label>
          <Input
            type="number"
            step="any"
            {...register("latitude", { valueAsNumber: true })}
          />
        </div>
        <div>
          <Label>Longitude</Label>
          <Input
            type="number"
            step="any"
            {...register("longitude", { valueAsNumber: true })}
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Salvar Todas as Alterações"
        )}
      </Button>
    </form>
  );
}
