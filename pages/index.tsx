import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';

const Home: NextPage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
      <Head>
        <title>Darryl's Porfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky w-full cursor-pointer bottom-5">
          <div className="flex items-center justify-center">
            <img
              className="w-10 h-10 rounded-full cursor-pointer filter grayscale hover:grayscale-0"
              src="https://i.ibb.co/0C4ShBv/profile-pic.jpg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
