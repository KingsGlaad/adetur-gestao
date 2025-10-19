'use client';

import { useVLibrasPlayer } from 'vlibras-player-nextjs';

/**
 * Componente que renderiza o widget do VLibras em todo o site.
 * Utiliza o hook `useVLibrasPlayer` para inicializar o player automaticamente.
 * @see https://www.npmjs.com/package/vlibras-player-nextjs
 */
export default function VLibrasWidget() {
  useVLibrasPlayer({
    autoInit: true,
  });

  // O componente não renderiza nada visualmente, pois o widget
  // do VLibras é injetado diretamente no body do documento.
  return null;
}