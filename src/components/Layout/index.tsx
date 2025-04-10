import Footer from '../Footer';
import Header from '../Header';

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container px-4 py-8 min-h-[80vh] max-w-[1300px] mx-auto bg-grey-default">
        {children}
      </main>
      <Footer />
    </>
  );
}
