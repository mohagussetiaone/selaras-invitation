type Route = {
  name: string;
  to: string;
};

export const routes: Route[] = [
  { name: "Home", to: "/home" },
  { name: "Katalog", to: "/home/catalog" },
  { name: "Album", to: "/home/album" },
  { name: "Testimonial", to: "/home/#testimonial" },
  { name: "Tentang Kami", to: "/home/#about" },
];
