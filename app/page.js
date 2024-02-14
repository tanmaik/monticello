import Person from "./components/Person";
import Team from "@/utils/Team";
import Image from "next/image";
import { Crimson_Text } from "next/font/google";

const crimson = Crimson_Text({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="mt-20 w-[33rem] px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/black.svg"
            alt="Kalisipudi Inc."
            width={5}
            height={5}
            className="h-5 w-5"
          />
          <h1
            className={`text-2xl ${crimson.className} cursor-pointer font-medium`}
          >
            Monticello,{" "}
            <span className="text-[#6C6C6C] transition hover:text-black">
              a next-gen software company
            </span>
          </h1>
        </div>
        <p className="mt-6 text-sm text-[#4E4E4E] ">
          {" "}
          We&apos;re a young team of builders, thinkers, and leaders, all
          focused toward building fast-moving, next-generation technology. Based
          out of Northern Virginia, our team has participated in dozens of
          business competitions, conducted hundreds of hours of research, and
          has spent a countless amount of time building amazing stuff.
        </p>
        <h1 className={`text-3xl ${crimson.className} mt-5 font-medium`}>
          Projects
        </h1>
        <h1 className={`text-3xl ${crimson.className} mt-5 font-medium`}>
          Team
        </h1>
        <p className="mt-2 text-sm text-[#4E4E4E]">
          We&apos;re a young team of builders, thinkers, and leaders, all
          focused toward building fast-moving, next-generation technology. Based
          out of Northern Virginia, our team has participated in dozens of
          business competitions, conducted hundreds of hours of research, and
          has spent a countless amount of time building amazing stuff.
        </p>
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4  ">
          {Team.map((person) => (
            <Person
              key={person.name}
              name={person.name.split(" ")[0]}
              role={person.role}
              image={person.image}
              location={person.location}
            />
          ))}
        </div>
        <div className={`mb-8 mt-24 italic ${crimson.className}`}>
          <p className="text-center">
            Copyright ©2024 Kalisipudi Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
