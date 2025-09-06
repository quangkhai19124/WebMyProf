import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" />
          404 - Không tìm thấy trang
        </div>
        <h1 className="mt-4 text-4xl font-bold">Trang không tồn tại</h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Có vẻ như bạn đã truy cập vào một đường dẫn không hợp lệ. Hãy quay lại trang chủ.
        </p>
        <div className="mt-6">
          <Button asChild>
            <a href="/">Về trang chủ</a>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
