import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Blog from '../src/components/Blog';
import Experience from '../src/components/Experience';
import Philosophy from '../src/components/Philosophy';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gandharv Kalia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-surface selection:bg-primary/10 selection:text-primary">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Blog />
          <Experience />
          <Philosophy />
          <Contact />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
