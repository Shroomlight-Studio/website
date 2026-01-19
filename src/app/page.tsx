import Image from "next/image";
import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { EnginePreview } from "./components/EnginePreview";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <WhatWeDo />
      <EnginePreview />
      <Contact />
    </div>
  );
}
