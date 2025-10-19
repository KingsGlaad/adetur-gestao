import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { VLibrasWidget } from "@/components/layout/VLibrasWidget";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <VLibrasWidget />
      <Footer />
    </div>
  );
}
