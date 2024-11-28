import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

interface HeaderContentProps {
  buttonText: string;
  titleContent: string;
  descriptionContent: string;
  descriptionFlip?: [];
}

const HeaderContent: React.FC<HeaderContentProps> = ({ buttonText, titleContent, descriptionContent, descriptionFlip }) => {
  const words = ["Momen tak terlupakan dengan undangan online yang unik", "Jadikan acara spesial Anda lebih berkesan", "Undangan online sempurna untuk momen yang tak terlupakan"];

  return (
    <section className="py-8">
      <div className="flex flex-col justify-center mb-14">
        <span className="inline-block whitespace-nowrap mx-auto bg-primary/10 px-4 py-2 text-primary text-center rounded">{buttonText}</span>
        <div className="relative flex items-center justify-center my-4">
          {/* Garis Horizontal */}
          <hr className="absolute w-full max-w-6xl border-t border-1 border-primary z-0"></hr>
          {/* Teks Menimpa Garis */}
          <span className="relative z-10 px-4 bg-background text-3xl font-semibold">{titleContent}</span>
        </div>
        {descriptionContent && <p className="flex justify-center items-center text-center text-lg leading-relaxed">{descriptionContent}</p>}
        {descriptionFlip && (
          <p className="flex justify-center items-center text-center text-lg leading-relaxed">
            <FlipWords words={[]} /> <br />
          </p>
        )}
      </div>
    </section>
  );
};

export default HeaderContent;
