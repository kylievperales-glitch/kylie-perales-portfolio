import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-6 py-32 md:py-48">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">404</p>
      <h1 className="text-4xl tracking-tight md:text-6xl">Page not found.</h1>
      <Link href="/" className="text-sm underline underline-offset-4">
        Back to home
      </Link>
    </Container>
  );
}
