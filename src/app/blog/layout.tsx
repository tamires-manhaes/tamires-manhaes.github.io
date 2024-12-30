import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | tamires.dev",
  description: "Read my latest thoughts and insights on frontend development",
};

export default function BlogLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="max-w-2xl min-h-[70vh] mx-auto px-4 mt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
