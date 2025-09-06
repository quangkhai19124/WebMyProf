import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-white font-bold shadow-brand">
              LK
            </span>
            <span className="font-semibold">Lưu Quang Khải</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#gioi-thieu" className="hover:text-primary transition-colors">Giới thiệu</a>
            <a href="#ky-nang" className="hover:text-primary transition-colors">Kỹ năng</a>
            <a href="#du-an" className="hover:text-primary transition-colors">Dự án</a>
            <a href="#lien-he" className="hover:text-primary transition-colors">Liên hệ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm">
              <a href="#lien-he">Liên hệ</a>
            </Button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t">
        <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Lưu Quang Khải. Backend IT.
          </p>
          <div className="flex items-center gap-4">
            <a className="hover:text-primary" href="#gioi-thieu">Giới thiệu</a>
            <a className="hover:text-primary" href="#du-an">Dự án</a>
            <a className="hover:text-primary" href="#lien-he">Liên hệ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
