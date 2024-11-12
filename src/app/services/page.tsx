import Herosection from "@/app/services/sections/Herosection";
import Services from "@/app/services/sections/Services";

export default function Home() {
  return (
    <div className="z-0">
      <Herosection />
      <Services />
    </div>
  );
}
