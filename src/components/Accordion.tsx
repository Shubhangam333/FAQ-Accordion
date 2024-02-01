"use client";

import star from "@/assets/images/icon-star.svg";
import plusIconImage from "@/assets/images/icon-plus.svg";
import minusIconImage from "@/assets/images/icon-minus.svg";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type AccordionItem = {
  question: string;
  answer: string;
};

const Items: AccordionItem[] = [
  {
    question: "What is Frontend Mentor and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Frontend Mentor offers realistic coding challenged to help developer improve their frontend coding skills with projects in HTML, CSS, and JavScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Frontend Mentor offers realistic coding challenged to help developer improve their frontend coding skills with projects in HTML, CSS, and JavScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "How can I het help if I'm stuck on a challenge?",
    answer:
      "Frontend Mentor offers realistic coding challenged to help developer improve their frontend coding skills with projects in HTML, CSS, and JavScript. It's suitable for all levels and ideal for portfolio building.",
  },
];

export default function Accordion() {
  return (
    <section className="md:w-[60%] rounded-lg mx-auto accordion-container w-[80%]">
      <h1 className="text-5xl flex gap-2 font-extrabold ">
        <Image src={star} alt="star-icon" />
        FAQs
      </h1>
      <section className="flex flex-col gap-12 mt-4">
        {Items.map((item, i) => (
          <AccordionItem key={i} item={item} />
        ))}
      </section>
    </section>
  );
}

function AccordionItem({ item }: { item: AccordionItem }) {
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  const [animationParent] = useAutoAnimate();
  return (
    <article>
      <p onClick={toggleItem} ref={animationParent}>
        <div className="flex justify-between items-start">
          <span className="font-bold text-xl text-black hover:text-[#AD28EB]">
            {item.question}
          </span>
          <div>
            {!isItemOpen && (
              <Image src={plusIconImage} alt="plus-icon" className="w-8 h-8 " />
            )}
            {isItemOpen && (
              <Image
                src={minusIconImage}
                alt="minus-icon"
                className="w-8 h-8 "
              />
            )}
          </div>
        </div>
        {isItemOpen && <p>{item.answer}</p>}
      </p>
    </article>
  );
}
