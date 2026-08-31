"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

interface AppQRCodeProps {
  size?: number;
  className?: string;
}

export function AppQRCode({ size = 140, className = "" }: AppQRCodeProps) {
  const [qrUrl, setQrUrl] = useState("/r/app");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setQrUrl(`${window.location.origin}/r/app`);
    }
  }, []);

  return (
    <div className={`p-3 bg-white rounded-2xl shadow-sm border border-border inline-flex flex-col items-center justify-center ${className}`}>
      <QRCodeSVG
        value={qrUrl}
        size={size}
        level="H"
        includeMargin={false}
        imageSettings={{
          src: "/logo.png",
          x: undefined,
          y: undefined,
          height: Math.floor(size * 0.22),
          width: Math.floor(size * 0.22),
          excavate: true,
        }}
      />
    </div>
  );
}
