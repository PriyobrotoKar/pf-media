import Features from "./sections/Features";
import Herosection from "./sections/Herosection";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Herosection />
      <div className="bg-primary space-y-72 rounded-t-[60px] max-w-screen-2xl mx-auto text-background py-40 will-change-auto ">
        <Features />
        <Stats />
        <Testimonials />
      </div>
    </div>
  );
}
