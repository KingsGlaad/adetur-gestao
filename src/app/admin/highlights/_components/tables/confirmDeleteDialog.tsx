"use client";
import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/types/highligth";

interface ConfirmDeleteDialogProps {
  children: ReactNode;
  highlight: Highlight;
}

export default function ConfirmDeleteDialog({
  children,
  highlight,
}: ConfirmDeleteDialogProps) {
  const [open, setOpen] = useState(false);

  function handleDelete() {
    console.log("Excluir", highlight.id);
    setOpen(false);
  }

  return (
    <>
      <span onClick={() => setOpen(true)}>{children}</span>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tem certeza que deseja excluir?</DialogTitle>
          </DialogHeader>
          <p>
            Você está prestes a excluir o município:{" "}
            <strong>{highlight.title || ""}</strong>.
          </p>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
