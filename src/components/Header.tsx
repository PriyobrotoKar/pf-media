import FeatherIcon from "feather-icons-react";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Referal Program",
    url: "/referal",
  },
  {
    title: "Products",
    url: "/products",
  },
];

const Header = () => {
  return (
    <header className="flex fixed top-0 w-full z-50 justify-between bg-background items-center px-8 py-5">
      <div className="text-[1.125rem] lg:text-lg text-primary font-medium">
        PF Media.
      </div>
      <nav className="bg-secondary p-2 rounded-full space-x-1 hidden lg:block">
        {navLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className={cn(
              buttonVariants({
                variant: link.title === "Home" ? "default" : "ghost",
                size: "sm",
                className: "lg:h-9",
              })
            )}
          >
            {link.title}
          </a>
        ))}
      </nav>
      <Button
        variant={"secondary"}
        size={"sm"}
        className="hidden lg:inline-flex"
      >
        Get a quote <FeatherIcon icon="arrow-up-right" />
      </Button>
      <FeatherIcon icon="menu" className="text-primary lg:hidden" />
    </header>
  );
};

export default Header;
