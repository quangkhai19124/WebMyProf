import SiteLayout from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_100%_-20%,hsl(var(--primary)/0.25),transparent),radial-gradient(800px_400px_at_-20%_10%,hsl(var(--accent)/0.25),transparent)]" />
        <div className="container py-20 md:py-32 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1 text-xs text-muted-foreground shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Backend IT
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              Xin chào, tôi là <span className="text-primary">Lưu Quang Khải</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Tôi xây dựng hệ thống backend ổn định, bảo mật và dễ mở rộng. Tập trung vào kiến trúc sạch, hiệu năng và trải nghiệm nhà phát triển.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#du-an">Xem dự án</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#lien-he">Liên hệ</a>
              </Button>
            </div>
          </div>
          <div className="order-first md:order-last flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl" />
              <div className="relative aspect-square w-56 md:w-72 rounded-2xl bg-gradient-to-br from-primary to-accent p-1 shadow-brand">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-background/90">
                  <span className="text-6xl font-extrabold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">LK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="gioi-thieu" className="container py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">Giới thiệu</h2>
            <p className="mt-2 text-muted-foreground">
              Đôi nét về tôi
            </p>
          </div>
          <div className="md:col-span-2 text-muted-foreground leading-relaxed">
            <p>
              Với kinh nghiệm làm việc trong lĩnh vực Backend, tôi quen thuộc với việc thiết kế API, tối ưu cơ sở dữ liệu, hàng đợi, cache và giám sát hệ thống. Tôi ưu tiên code dễ bảo trì, có kiểm thử và CI/CD rõ ràng.
            </p>
            <p className="mt-4">
              Công nghệ ưa thích: Node.js, TypeScript, PostgreSQL, Redis, Docker, Kubernetes. Tôi cũng có kinh nghiệm với kiến trúc microservices và event-driven.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="ky-nang" className="bg-secondary/50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl font-bold">Kỹ năng nổi bật</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {["Node.js & TypeScript","Thiết kế REST/GraphQL API","PostgreSQL, Redis","Microservices & Message Queue","CI/CD & Testing","Docker & Kubernetes"].map((s) => (
              <div key={s} className="rounded-lg border bg-background p-4 shadow-sm">
                <p className="font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="du-an" className="container py-16 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Dự án tiêu biểu</h2>
            <p className="mt-2 text-muted-foreground">Một số công việc tôi đã thực hiện gần đây</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-xl border bg-background">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="p-6">
              <h3 className="text-lg font-semibold">Hệ thống đặt lịch dịch vụ</h3>
              <p className="mt-2 text-muted-foreground">Thiết kế kiến trúc microservices, tích hợp thanh toán và thông báo realtime. Tối ưu hiệu năng và độ tin cậy.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {['Node.js','PostgreSQL','Redis','Kafka'].map(t=> (
                  <span key={t} className="rounded-full border bg-secondary px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          </article>
          <article className="group relative overflow-hidden rounded-xl border bg-background">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="p-6">
              <h3 className="text-lg font-semibold">Nền tảng phân tích log</h3>
              <p className="mt-2 text-muted-foreground">Thu thập log phân tán, chỉ số thời gian thực, dashboard và cảnh báo. Hạ tầng linh hoạt, chi phí tối ưu.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {['TypeScript','gRPC','Elastic','Docker'].map(t=> (
                  <span key={t} className="rounded-full border bg-secondary px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="lien-he" className="bg-secondary/50 py-16 md:py-24">
        <div className="container grid gap-6 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">Liên hệ</h2>
            <p className="mt-2 text-muted-foreground">Sẵn sàng trao đổi cơ hội hợp tác</p>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <p className="text-muted-foreground">Bạn có thể gửi email trực tiếp cho tôi.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="mailto:contact@example.com?subject=Hợp tác%20cùng%20Lưu%20Quang%20Khải">Gửi email</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
