"use client";

import Image from "next/image";
import React, { useState, Fragment } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Card = React.memo(({ card, index, hovered, setHovered }: { card: any; index: number; hovered: number | null; setHovered: React.Dispatch<React.SetStateAction<number | null>> }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn("rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-96 w-full transition-all duration-300 ease-out", hovered !== null && hovered !== index && "blur-sm scale-[0.98]")}
  >
    <Image src={card.src} alt={card.title} fill className="object-cover absolute inset-0" />
    <div className={cn("absolute inset-0  flex items-end py-8 px-4 transition-opacity duration-300", hovered === index ? "opacity-100 bg-black/10" : "opacity-0 bg-black/50")}>
      <div className="text-xl md:text-2xl font-medium text-primary">{card.title}</div>
    </div>
  </div>
));

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Fragment>
      <div className="max-w-5xl md:px-8 mx-auto">
        <div className="flex justify-between items-center pb-8">
          <div>
            <h1 className="text-xl md:text-2xl">Katalog Popular</h1>
          </div>
          <Link href="/home/catalog">
            <Button variant="link">Lihat Semua</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto  w-full">
          {cards.map((card, index) => (
            <Card key={card.title} card={card} index={index} hovered={hovered} setHovered={setHovered} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
