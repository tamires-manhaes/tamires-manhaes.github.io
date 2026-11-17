import Layout from '@/components/Layout';
import Hero from '@/components/Sections/Hero';
import Work from '@/components/Sections/Work';
import Stack from '@/components/Sections/Stack';
import Thread from '@/components/Sections/Thread';
import Experience from '@/components/Sections/Experience';
import About from '@/components/Sections/About';
import Contact from '@/components/Sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Work />
      <Stack />
      <Thread />
      <Experience />
      <About />
      <Contact />
    </Layout>
  );
}
