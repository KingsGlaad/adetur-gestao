"use client";

import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import Underline from "@editorjs/underline";
// @ts-ignore
import Strikethrough from "editorjs-strikethrough";

interface EditorProps {
  value: string | OutputData | null;
  onChange: (value: OutputData) => void;
  placeholder?: string;
}

export default function Editor({ value, onChange, placeholder }: EditorProps) {
  const ejInstance = useRef<EditorJS | null>(null);
  const isReady = useRef<boolean>(false);
  const containerId = "editorjs-container";

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      if (ejInstance.current) {
        ejInstance.current.destroy();
        ejInstance.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: containerId,
      onReady: () => {
        ejInstance.current = editor;
        
        // Se o valor inicial for uma string (provavelmente HTML salvo do TipTap), renderizamos do HTML
        if (typeof value === "string" && value.trim().length > 0 && !isReady.current) {
          editor.blocks.renderFromHTML(value).then(() => {
            isReady.current = true;
          });
        } else {
          isReady.current = true;
        }
      },
      onChange: async () => {
        if (!isReady.current) return;
        try {
          const content = await editor.save();
          onChange(content);
        } catch (e) {
          console.error("Editor.js save error", e);
        }
      },
      autofocus: false,
      data: typeof value !== "string" && value ? value : undefined,
      placeholder: placeholder || "Escreva o conteúdo da notícia...",
      tools: {
        header: {
          class: Header as any,
          config: {
            placeholder: "Digite um cabeçalho",
            levels: [2, 3, 4],
            defaultLevel: 2,
          },
          shortcut: "CMD+SHIFT+H",
        },
        list: {
          class: List as any,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+L",
        },
        quote: {
          class: Quote as any,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
        },
        code: CodeTool as any,
        underline: Underline as any,
        strikethrough: Strikethrough as any,
      },
      i18n: {
        messages: {
          ui: {
            "blockTunes": {
              "toggler": {
                "Click to tune": "Clique para opções",
                "or drag to move": "ou arraste para mover"
              },
            },
            "inlineToolbar": {
              "converter": {
                "Convert to": "Converter para"
              }
            },
            "toolbar": {
              "toolbox": {
                "Add": "Adicionar"
              }
            }
          },
          toolNames: {
            "Text": "Texto",
            "Heading": "Cabeçalho",
            "List": "Lista",
            "Quote": "Citação",
            "Code": "Código",
            "Bold": "Negrito",
            "Italic": "Itálico",
            "Underline": "Sublinhado",
            "Strikethrough": "Tachado"
          }
        }
      }
    });
  };

  return (
    <div 
      id={containerId} 
      className="prose dark:prose-invert max-w-none w-full min-h-[300px] bg-transparent"
    />
  );
}
