import Image from "next/image";
import { Hero } from "./components/Hero";
import { EnginePreview } from "./components/EnginePreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <EnginePreview />
    </div>
  );
}
