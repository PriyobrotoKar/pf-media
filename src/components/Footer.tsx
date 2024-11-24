import FeatherIcon from "feather-icons-react";
import { Button } from "./ui/button";

const socals = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
  },
];

const company = [
  {
    name: "Terms & Conditions",
    link: "/terms",
  },
  {
    name: "Privacy Policy",
    link: "/privacy",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className=" pt-48 pb-16 px-8  bg-primary">
      <main className="flex max-w-screen-2xl mx-auto justify-between bg-background  rounded-3xl p-20 ">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold text-primary">PF Media.</h1>
            <p>pfmedia@gmail.com</p>
          </div>
          <Button>
            Explore <FeatherIcon icon="arrow-up-right" />
          </Button>
        </div>
        <div className="flex gap-40">
          <div className="space-y-5">
            <h2 className="text-xl font-bold">Social</h2>
            <div className="space-y-3">
              {socals.map((socal, index) => (
                <a className="block" href={socal.link} key={index}>
                  {socal.name}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl font-bold">Company</h2>
            <div className="space-y-3">
              {company.map((company, index) => (
                <a className="block" href={company.link} key={index}>
                  {company.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
}
