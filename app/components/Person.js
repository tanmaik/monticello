"use client";

import Image from "next/image";

import { Crimson_Text } from "next/font/google";

const crimson = Crimson_Text({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
});

export default function Person({ name, role, image, location }) {
  const rotation = Math.random() * 20 - 10;

  return (
    <div
      className={`relative group w-32 border-2 bg-white cursor-help px-2 py-2 rounded-md shadow-md hover:shadow-lg`}
      style={{
        transform: `rotate(${rotation}deg) scale(1)`,
        transition: "transform 0.3s ease",
        zIndex: 0,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = `rotate(${0}deg) scale(1.75)`;
        e.currentTarget.style.zIndex = 1;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1)`;
        e.currentTarget.style.zIndex = 0;
      }}
    >
      <Image
        src={image}
        alt="Person"
        height={1000}
        width={1000}
        className="rounded-md w-full aspect-square shadow-sm"
      />
      <div className="flex flex-col -space-y-2">
        <h1 className={`${crimson.className}  font-bold text-lg italic`}>
          {name}
        </h1>
        <p className={`${crimson.className} font-bold text-slate-500 italic`}>
          {role}
        </p>
      </div>
      <p
        className={`${crimson.className} font-bold text-xs italic hidden group-hover:inline`}
      >
        {location}
      </p>
    </div>
  );
}
