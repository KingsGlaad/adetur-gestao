import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="ADETUR Logo"
        quality={100}
        priority
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold">ADETUR</span>
        <span className="text-sm text-secondary">Alta Mogiana</span>
      </div>
    </div>
  );
}
