import { anton } from "@/app/fonts";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import React from "react";

type Service = {
  title: string;
  description: string;
  icon: keyof typeof Icons;
};

interface ServicesProps {
  title: string;
  description: string;
  footerDescription: string;
  services: Service[];
  actionText: string;
}

const services: ServicesProps[] = [
  {
    title: "Converting Websites",
    description:
      "PF Media creates high-performance websites designed to drive conversions. We blend strategy, design, and user experience to maximize ROI. Every element is optimized for action.",
    footerDescription:
      "Our conversion-focused websites are crafted to turn visitors into loyal customers, maximizing ROI with every click. Let PF Media drive measurable growth for your business.",
    services: [
      {
        title: "Strategic Website Architecture",
        description:
          "Through A/B testing, we refine design elements to maximize engagement and improve conversion rates.",
        icon: "target",
      },
      {
        title: "A/B Testing and Optimization",
        description:
          "We design intuitive, well-structured websites that guide visitors effortlessly to key actions, boosting conversions.",
        icon: "copy",
      },
      {
        title: "Seamless Multi-Device Optimization",
        description:
          "Our websites are optimized for all devices, ensuring a smooth, high-converting experience on mobile, tablet, and desktop.",
        icon: "monitor",
      },
      {
        title: "SEO-Driven Design",
        description:
          "We integrate SEO best practices into your site's design, boosting visibility and attracting quality traffic.",
        icon: "magnifying-glass",
      },
      {
        title: "Compelling Call-to-Action Strategies",
        description:
          "Our call-to-action strategies are designed to drive impactful conversions, guiding users effortlessly toward key actions. ",
        icon: "bell",
      },
      {
        title: "Analytics & Conversion Tracking",
        description:
          "We use analytics to track performance, optimize user journeys, and continuously improve conversion rates.",
        icon: "growth",
      },
    ],
    actionText: "Turn clicks to leads",
  },
  {
    title: "Viral Social Media Management",
    description:
      "Our team at PF Media creates impactful social media strategies that boost engagement, amplify your brand, and make your content go viral, helping you reach a wider audience.",
    footerDescription:
      "Our viral social media strategies ignite engagement and amplify your brand's reach. With targeted content and real-time analytics, we drive results that make an impact.",
    services: [
      {
        title: "Content Creation & Curation",
        description:
          "We design and curate compelling content tailored to your brand, capturing attention and driving engagement.",
        icon: "play",
      },
      {
        title: "Audience Analysis & Targeting",
        description:
          "Our data-driven approach identifies and targets the right audience, ensuring maximum reach and relevance.",
        icon: "users",
      },
      {
        title: "Engagement & Community Building",
        description:
          "We foster active communities around your brand, sparking conversations and building loyal followers.",
        icon: "heart",
      },
      {
        title: "Trend Spotting & Real-Time Marketing",
        description:
          "We capitalize on current trends to keep your brand relevant, using real-time marketing for viral potential.",
        icon: "thunder",
      },
    ],
    actionText: "Start Trading",
  },
  {
    title: "Paid Advertisement",
    description:
      "PF Media creates targeted paid ad campaigns that drive traffic, increase brand visibility, and deliver measurable results across platforms.",
    footerDescription:
      "With PF Media's paid ad strategies, your brand reaches its audience with precision and impact, driving real, measurable growth.",
    services: [
      {
        title: "Social Media Advertising",
        description:
          "Our targeted ads on platforms like Facebook, Instagram, and LinkedIn help you reach the right audience with engaging content.",

        icon: "instagram",
      },
      {
        title: "Retargeting & Remarketing",
        description:
          "We reconnect with past visitors through tailored ads, bringing them back to complete purchases or other desired actions.",
        icon: "reload",
      },
      {
        title: "Google Ads Optimization",
        description:
          "We optimize Google Ads campaigns to increase click-through rates, lower costs, and improve your ad performance.",
        icon: "analytics",
      },
      {
        title: "Display & Banner Ads",
        description:
          "Eye-catching visuals and targeted placements ensure your brand gains visibility on relevant sites and platforms.",
        icon: "picture",
      },
    ],
    actionText: "Power Up with Ads",
  },
];

const Services = () => {
  return (
    <div className="pl-2 pr-4 max-w-screen-2xl mx-auto md:pl-7 md:pr-14 lg:px-14 flex gap-4 md:gap-20 lg:gap-40 xl:gap-60 overflow-visible">
      <div className="w-fit  overflow-visible flex relative flex-shrink-0 justify-center self-stretch">
        <div className="bg-secondary before:absolute before:inset-0 before:w-full before:h-10 before:bg-gradient-to-b before:from-background w-1 -z-20 absolute h-full">
          <div className="fixed top-0 h-[50vh] w-[inherit] -z-10 bg-primary" />
        </div>
        <div className="size-3 md:size-4 z-20 shadow-[0px_0px_20px_10px_var(--shadow-color)] shadow-secondary bg-primary rounded-full sticky top-[50vh]  left-1/2" />
      </div>

      <div className="space-y-32">
        {services.map((service, index) => (
          <Section key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const Section = ({
  title,
  description,
  services,
  footerDescription,
  actionText,
}: ServicesProps) => {
  return (
    <section className="space-y-12 md:space-y-10 lg:space-y-20">
      <div className="space-y-7 lg:space-y-10">
        <h1
          className={`text-lg md:text-xl lg:text-3xl font-medium ${anton.className}`}
        >
          {title}
        </h1>
        <p className="text-sm lg:text-xl">{description}</p>
      </div>
      <div className="gap-y-8 gap-x-14 lg:gap-x-32 grid md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = Icons[service.icon];
          return (
            <div key={index} className="space-y-4">
              <div className="flex gap-2 items-center">
                <Icon />
                <h2 className="text-sm lg:text-lg font-semibold">
                  {service.title}
                </h2>
              </div>
              <p className="text-xs lg:text-base">{service.description}</p>
            </div>
          );
        })}
      </div>
      <div className="space-y-7 lg:space-y-12">
        <p className="text-sm lg:text-lg">{footerDescription}</p>
        <Button>{actionText}</Button>
      </div>
    </section>
  );
};

export default Services;
