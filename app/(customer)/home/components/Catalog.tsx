import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import HeaderContent from "./HeaderContent";

const Catalog = () => {
  const cards = [
    {
      title: "Cipta Momen",
      src: "https://img.freepik.com/free-vector/hand-drawn-wedding-digital-invitation_23-2149981197.jpg?t=st=1732673054~exp=1732676654~hmac=13c28ec4272a859700335a2f87a30cdd1b5ef450c6234f65a5616cff629a0068&w=740",
      linkTemplate: "/customer/home/catalog/1",
    },
    {
      title: "Arunika",
      src: "https://img.freepik.com/premium-vector/white-orchid-leaves-digital-wedding-invitation-card_797454-5.jpg?w=740",
      linkTemplate: "/customer/home/catalog/1",
    },
    {
      title: "Lukisan Cinta",
      src: "https://img.freepik.com/free-vector/watercolor-wedding-digital-invitation-template_23-2149986190.jpg?t=st=1732673658~exp=1732677258~hmac=08e6e9115aa4e06c93b97037c9dbbce36e5233aec8fb8baa285156a81c517ea7&w=740",
      linkTemplate: "/customer/home/catalog/1",
    },
    {
      title: "Harmoni Hati",
      src: "https://img.freepik.com/premium-vector/flat-design-wedding-digital-invitation_23-2149949321.jpg?w=740",
      linkTemplate: "/customer/home/catalog/1",
    },
    {
      title: "Jejak Bahagia",
      src: "https://img.freepik.com/premium-vector/watercolor-wedding-digital-invitation-template_23-2149986175.jpg?w=740",
      linkTemplate: "/customer/home/catalog/1",
    },
    {
      title: "Pesona Abadi",
      src: "https://img.freepik.com/free-vector/hand-drawn-wedding-digital-invitation_23-2149981203.jpg?t=st=1732673741~exp=1732677341~hmac=e94e7735f1d29dc6f9df2eb7222ae7c2e694438f5bcd2e1570f6d3d617bbab2c&w=740",
      linkTemplate: "/customer/home/catalog/1",
    },
  ];

  return (
    <section className="my-14" id="catalog">
      <HeaderContent buttonText="Eksplor Tema" titleContent="Temukan Inspirasi Anda" descriptionContent="Jelajahi koleksi template untuk momen berharga Anda" />
      <FocusCards cards={cards} />
    </section>
  );
};

export default Catalog;
