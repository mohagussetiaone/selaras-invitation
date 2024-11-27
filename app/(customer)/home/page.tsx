"use client";

import Banner from "./components/Banner";
import Catalog from "./components/Catalog";
import Category from "./components/Category";
import Testimonials from "./components/Testimonial";

const page = () => {
  return (
    <section>
      <Banner />
      <Category />
      <Catalog />
      <Testimonials />
    </section>
  );
};

export default page;
