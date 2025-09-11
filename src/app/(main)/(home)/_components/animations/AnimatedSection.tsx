"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode; // Aceita qualquer elemento React como filho
  className?: string; // Permite passar classes CSS adicionais
  delay?: number; // Permite um atraso customizado para a animação
}

export function AnimatedSection({
  children,
  className,
  delay = 0.2,
}: AnimatedSectionProps) {
  // 1. Cria uma referência (ref) para o elemento div principal.
  // O Intersection Observer usará esta ref para saber qual elemento observar.
  const ref = useRef(null);

  // 2. Hook `useInView` da Framer Motion.
  // Retorna `true` quando o elemento referenciado (ref) entra na viewport.
  // `once: true` garante que a animação só aconteça na primeira vez.
  // `amount: 0.2` significa que a animação começa quando 20% do elemento está visível.
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // 3. `useAnimation` nos dá controles para iniciar a animação manualmente.
  const mainControls = useAnimation();

  // 4. `useEffect` para disparar a animação.
  // Este efeito é executado sempre que `isInView` muda.
  useEffect(() => {
    if (isInView) {
      // Se o componente está visível, inicia a animação para o estado "visible".
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    // 5. O componente `motion.div` da Framer Motion.
    // Ele renderiza uma div normal, mas com superpoderes de animação.
    <motion.div
      ref={ref}
      className={className}
      // `variants` definem os diferentes "estados" da animação.
      variants={{
        hidden: { opacity: 0, y: 75 }, // Estado inicial: invisível e 75px para baixo
        visible: { opacity: 1, y: 0 }, // Estado final: totalmente visível e na posição original
      }}
      initial="hidden" // O estado inicial da animação é "hidden".
      animate={mainControls} // A animação é controlada pelo `mainControls`.
      transition={{ duration: 0.5, delay: delay }} // Define a duração e o atraso da transição.
    >
      {children}
    </motion.div>
  );
}
