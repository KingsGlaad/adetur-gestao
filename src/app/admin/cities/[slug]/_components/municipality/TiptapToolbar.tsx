"use client";

import { Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Heading4,
  Link,
  Unlink,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useCallback } from "react";

type Props = {
  editor: Editor | null;
};

export function TiptapToolbar({ editor }: Props) {
  const setLink = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // Se o utilizador cancelar o prompt
    if (url === null) {
      return;
    }

    // Se o utilizador remover a URL, remove o link
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    // Adiciona ou atualiza o link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-input bg-transparent rounded-t-md p-1 flex flex-wrap items-center gap-1">
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>

      <div className="mx-1 h-6 w-px bg-slate-300" />

      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 2 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 3 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        <Heading3 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 4 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 4 }).run()
        }
      >
        <Heading4 className="h-4 w-4" />
      </Toggle>

      <div className="mx-1 h-6 w-px bg-slate-300" />

      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>

      <div className="mx-1 h-6 w-px bg-slate-300" />

      <Toggle
        size="sm"
        onPressedChange={setLink}
        pressed={editor.isActive("link")}
      >
        <Link className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        onPressedChange={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive("link")}
      >
        <Unlink className="h-4 w-4" />
      </Toggle>
    </div>
  );
}
