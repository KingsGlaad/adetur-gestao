"use client";

import { Editor, EditorContent } from "@tiptap/react";
import { Label } from "@/components/ui/label";
import { TiptapToolbar } from "./TiptapToolbar"; // Assumindo que a toolbar está na mesma pasta

interface TiptapEditorProps {
  editor: Editor | null;
  error?: string;
}

export function TiptapEditor({ editor, error }: TiptapEditorProps) {
  return (
    <div>
      <Label>Sobre o Município</Label>
      <div className="border rounded-md mt-1">
        <TiptapToolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
