import { Header } from "@/components/header";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
}
