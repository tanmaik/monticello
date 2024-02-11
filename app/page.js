import Person from "./components/Person";
import Team from "@/utils/Team";

import { Crimson_Text } from "next/font/google";

const crimson = Crimson_Text({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-[33rem] mt-20 px-6">
        <h1 className={`text-3xl ${crimson.className} font-medium`}>Team</h1>
        <p className="text-sm text-[#4E4E4E] mt-2">
          We&apos;re a young team of builders, thinkers, and leaders, all
          focused toward building fast-moving, next-generation technology. Based
          out of Northern Virginia, our team has participated in dozens of
          business competitions, conducted hundreds of hours of research, and
          has spent a countless amount of time building amazing stuff.
        </p>
        <div className="mt-12 grid sm:grid-cols-4 grid-cols-3  ">
          {Team.map((person) => (
            <Person
              key={person.name}
              name={person.name.split(" ")[0]}
              role={person.role}
              image={person.image}
              location={person.location}
            />
          ))}

          {/* <Person name="" /> */}
        </div>
      </div>
    </div>
  );
}
