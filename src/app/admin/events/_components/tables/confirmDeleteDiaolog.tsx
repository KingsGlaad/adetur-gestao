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
import { Municipality } from "@/types/municipality";

interface ConfirmDeleteDialogProps {
  children: ReactNode;
  municipio: Municipality;
}

export default function ConfirmDeleteDialog({
  children,
  municipio,
}: ConfirmDeleteDialogProps) {
  const [open, setOpen] = useState(false);

  function handleDelete() {
    console.log("Excluir", municipio.id);
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
            <strong>{municipio.name}</strong>.
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
