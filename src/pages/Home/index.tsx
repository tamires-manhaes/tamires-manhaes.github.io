import Layout from '@/components/Layout';
import About from '@/components/Sections/About';
import ContactForm from '@/components/Sections/Contact';
import Projects from '@/components/Sections/Projects';
import TechStack from '@/components/Sections/TechStack';
import WorkExperience from '@/components/Sections/WorkXP';

export default function HomePage() {
  return (
    <Layout>
      <About />
      <TechStack />
      <Projects />
      <WorkExperience />
      <ContactForm />
    </Layout>
  );
}
