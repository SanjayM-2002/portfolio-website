import { DATA } from "@/data/resume";
import React from "react";
import BlurFade from "./magicui/blur-fade";
import { IconProps } from "./icons";
import Link from "next/link";

type ISocialArray = {
  icon: (props: IconProps) => React.JSX.Element;
  name: string;
  url: string;
  navbar: boolean;
};

export default function SocialCards() {
  return (
    <div className="grid gap-3 grid-cols-2">
      {Object.entries(DATA.contact.social)
        .map(([_, social], id) => (
          <BlurFade key={social.name} delay={0.04 * 10 + id * 0.1}>
            <SocialItem data={social} />
          </BlurFade>
        ))}
    </div>
  );
}
3;

function SocialItem({ data }: { data: ISocialArray }) {
  return (
    <Link
      target="_blank"
      href={data.url}
      className="relative cursor-none flex overflow-hidden p-2 rounded-md border text-primary h-[100px]"
    >
      <p className="text-foreground">{data.name}</p>
      <data.icon className="size-24 pointer-events-none opacity-20 absolute -right-7 -bottom-7" />
    </Link>
  );
}