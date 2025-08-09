import { X, ImageIcon, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MunicipalityImage } from "@/generated";

interface MunicipalityImageGalleryProps {
  images: MunicipalityImage[];
  onAddImages: (files: FileList) => void;
  onRemoveImage: (imageId: string) => void;
  isUploading: boolean;
}

export function MunicipalityImageGallery({
  images,
  onAddImages,
  onRemoveImage,
  isUploading,
}: MunicipalityImageGalleryProps) {
  // FIX: Garante que `images` é sempre um array antes de chamar .map()
  // Se a prop 'images' não for um array, imageList será um array vazio.
  const imageList = Array.isArray(images) ? images : [];

  return (
    <div className="space-y-4">
      <Label>Galeria de Imagens do Município</Label>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {/* Usa a variável segura imageList para o map */}
        {imageList.map((image) => (
          <div key={image.id} className="relative aspect-square group">
            <img
              src={image.url}
              alt="Imagem da galeria"
              className="w-full h-full object-cover rounded-md border"
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full opacity-0 group-hover:opacity-100"
              onClick={() => onRemoveImage(image.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Label
          htmlFor="gallery-file-input"
          className="aspect-square border-2 border-dashed rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-accent"
        >
          {isUploading ? (
            <Loader2 className="h-8 w-8 animate-spin" />
          ) : (
            <>
              <ImageIcon className="h-8 w-8 mb-2" />
              <span className="text-xs text-center">Adicionar</span>
            </>
          )}
        </Label>
        <input
          id="gallery-file-input"
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          disabled={isUploading}
          onChange={(e) => e.target.files && onAddImages(e.target.files)}
        />
      </div>
    </div>
  );
}
