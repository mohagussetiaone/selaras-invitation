"use client";

import Banner from "./components/Banner";
import Catalog from "./components/Catalog";
import Category from "./components/Category";
import Instruction from "./components/Instruction";
import Testimonials from "./components/Testimonial";

const page = () => {
  return (
    <section>
      <Banner />
      <Category />
      <Catalog />
      <Instruction />
      <Testimonials />
    </section>
  );
};

export default page;
