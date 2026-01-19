import Image from "next/image";
import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { EnginePreview } from "./components/EnginePreview";
import { FeaturedProjects } from "./components/FeaturedProjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <WhatWeDo />
      <EnginePreview />
    </div>
  );
}
