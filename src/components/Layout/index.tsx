import Footer from "../Footer";
import Header from "../Header";

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 min-h-[80vh]">
        {children}
      </main>
      <Footer />
    </>
  );
}
