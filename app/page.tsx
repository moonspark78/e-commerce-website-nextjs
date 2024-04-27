import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import newest from "./data/ImagesData.json"

interface Props{
  data: any;
}

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero/>
      <Newest/>
    </div>
  );
}
