import Image from "next/image";
import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { EnginePreview } from "./components/EnginePreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <EnginePreview />
    </div>
  );
}
