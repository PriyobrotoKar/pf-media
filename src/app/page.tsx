import Features from "./sections/Features";
import Herosection from "./sections/Herosection";
import Stats from "./sections/Stats";

export default function Home() {
  return (
    <div>
      <Herosection />
      <div className="bg-primary space-y-72 rounded-t-[60px] text-background py-40 ">
        <Features />
        <Stats />
      </div>
    </div>
  );
}
