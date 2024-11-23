import Features from "./sections/Features";
import Herosection from "./sections/Herosection";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Herosection />
      <div className="bg-primary space-y-72 rounded-t-[60px] text-background py-40 ">
        <Features />
        <Stats />
        <Testimonials />
      </div>
    </div>
  );
}
