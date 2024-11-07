"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import NavbarComponent from "@/components/ui/FloatingNavbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { LampDemo } from "@/components/ui/lamp";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <BackgroundBeamsWithCollision>
          <></>
        </BackgroundBeamsWithCollision>
        <NavbarComponent />
        <Hero />
        <Grid />
        <LampDemo/>
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
