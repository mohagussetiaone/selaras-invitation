"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Tipe data untuk kartu undangan
interface InvitationCard {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

// Data dummy untuk undangan
const invitationData: InvitationCard[] = [
  {
    id: 4,
    title: "Bahagia Bersama",
    description: "Minimalist wedding invitation with modern typography.",
    price: "Rp 55.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement-concept_52683-38994.jpg?t=st=1732676766~exp=1732680366~hmac=4063feebe3e697cea439ae5795e9d2ada15ff77af1b3f6a8e875ea16334a541e&w=740",
  },
  {
    id: 5,
    title: "Cahaya Sukma",
    description: "Traditional themed invitation for cultural celebrations.",
    price: "Rp 60.000",
    imageUrl: "https://img.freepik.com/free-vector/watercolor-birthday-digital-invitation_23-2150173719.jpg?t=st=1732676843~exp=1732680443~hmac=cef1810c63c57f0d43a31b6e6c78ae903051cc05d89cf31b6106593732aea125&w=740",
  },
  {
    id: 6,
    title: "Senandung Cerita",
    description: "Soft pastel-colored invitation perfect for engagements.",
    price: "Rp 45.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement-concept_52683-39253.jpg?t=st=1732675695~exp=1732679295~hmac=1b1f0375701b257ae2a25b04c96e03a706fbccd557343c4e8c403c8dbd5d1d18&w=740",
  },
  {
    id: 7,
    title: "Indahnya Hari Ini",
    description: "Vintage-inspired wedding invitation for timeless elegance.",
    price: "Rp 65.000",
    imageUrl: "https://img.freepik.com/free-vector/hand-drawn-wedding-digital-invitation_23-2149981215.jpg?t=st=1732675701~exp=1732679301~hmac=3d179ecdf7b09b23bd5a7bdbef993d95789a3fa4d60a2f074c59bd5cb6268f1e&w=740",
  },
  {
    id: 8,
    title: "Langit Senja",
    description: "Romantic sunset-themed invitation for intimate events.",
    price: "Rp 50.000",
    imageUrl: "https://img.freepik.com/free-vector/hand-drawn-wedding-digital-invitation_23-2149981174.jpg?t=st=1732676904~exp=1732680504~hmac=151b340a375720406b25ada1fa05a9d72744d197fc7347f05f90a7367b9b8c88&w=740",
  },
  {
    id: 9,
    title: "Semesta Kita",
    description: "Starry night design for anniversary celebrations.",
    price: "Rp 40.000",
    imageUrl: "https://img.freepik.com/premium-vector/watercolor-wedding-digital-invitation_23-2149967852.jpg?w=740",
  },
  {
    id: 10,
    title: "Sahabat Abadi",
    description: "Playful invitation for reunions and gatherings.",
    price: "Rp 30.000",
    imageUrl: "https://img.freepik.com/premium-vector/flat-digital-wedding-invitation-template-with-smartphone_23-2149953388.jpg?w=740",
  },
  {
    id: 11,
    title: "Harapan Baru",
    description: "Modern baby shower invitation with cute illustrations.",
    price: "Rp 35.000",
    imageUrl: "https://img.freepik.com/free-vector/watercolor-wedding-digital-invitation-template_23-2149986187.jpg?t=st=1732676949~exp=1732680549~hmac=f43a900ec75d460ae3ad848a83d0482ce5878ae3ef40fe7a4a44c13bd91fa243&w=740",
  },
  {
    id: 12,
    title: "Pancarona",
    description: "Colorful festival-themed invitation for celebrations.",
    price: "Rp 40.000",
    imageUrl: "https://img.freepik.com/free-vector/hand-drawn-wedding-digital-invitation-template_23-2149931835.jpg?t=st=1732676961~exp=1732680561~hmac=b49fff95f339c9b2b99e8ca237e203a3e3644fbda2d132dd93f3402d50676c9b&w=740",
  },
  {
    id: 13,
    title: "Jelajah Cinta",
    description: "Rustic travel-themed wedding invitation.",
    price: "Rp 70.000",
    imageUrl: "https://img.freepik.com/free-vector/flat-design-wedding-digital-invitation_23-2149949327.jpg?t=st=1732677698~exp=1732681298~hmac=a36922537f5b6d1edb2e91b4e7a4548e416763fd13d0d1724238527722eba0e1&w=740",
  },
  {
    id: 14,
    title: "Ceria Bersama",
    description: "Cheerful birthday party invitation for kids.",
    price: "Rp 25.000",
    imageUrl: "https://img.freepik.com/premium-vector/hand-drawn-wedding-digital-invitation_23-2149940089.jpg?w=740",
  },
  {
    id: 15,
    title: "Abadi Indahnya",
    description: "Classic design for golden anniversary celebrations.",
    price: "Rp 65.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement-concept_23-2148568095.jpg?t=st=1732677001~exp=1732680601~hmac=3877d13411286cd53650d026a40c8a2d6c6f779f54b634032f9ce70f68685787&w=740",
  },
  {
    id: 16,
    title: "Alunan Kasih",
    description: "Elegant music-themed wedding invitation.",
    price: "Rp 60.000",
    imageUrl: "https://img.freepik.com/free-vector/flat-digital-wedding-invitation-template-with-smartphone_23-2149953406.jpg?t=st=1732677020~exp=1732680620~hmac=37d92aef73a4bfe76b7b6ee8986b4551e73e1a57c739448cb554b740d93f5776&w=740",
  },
  {
    id: 17,
    title: "Harmoni Kita",
    description: "Delicate floral invitation for vow renewals.",
    price: "Rp 50.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement-smartphone-concept_23-2148566411.jpg?t=st=1732677041~exp=1732680641~hmac=f3f20722438ba91486dad9eb9ad2b1da1add6fe06249a3c4ea6f52bd561817ff&w=740",
  },
  {
    id: 18,
    title: "Kenangan Manis",
    description: "Retro-themed wedding anniversary invitation.",
    price: "Rp 45.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement-smartphone-screen-format_23-2148571567.jpg?t=st=1732677053~exp=1732680653~hmac=eca98a3dd4d17aef9ba758efa561fc12b87dc850e6dc08ffdabb6b7e7a2c8ae6&w=740",
  },
  {
    id: 19,
    title: "Jejak Karya",
    description: "Creative invitation for art gallery openings.",
    price: "Rp 55.000",
    imageUrl: "https://img.freepik.com/free-vector/watercolor-wedding-digital-invitation-template_23-2149986181.jpg?t=st=1732677073~exp=1732680673~hmac=3e7b03d0914a00f3611b9bf92c3992b47596e6b8b48a87386c4d08a8b73bdb27&w=740",
  },
  {
    id: 20,
    title: "Pelangi Asa",
    description: "Vibrant LGBTQ+ pride-themed party invitation.",
    price: "Rp 40.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement_23-2148549615.jpg?t=st=1732677109~exp=1732680709~hmac=dbab20a5b6b51d04bf30fe02e374e4383919e91f4cf49e76f522123e245f9168&w=740",
  },
  {
    id: 21,
    title: "Citra Bahagia",
    description: "Sophisticated design for professional networking events.",
    price: "Rp 80.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement_23-2148562508.jpg?t=st=1732677125~exp=1732680725~hmac=5a11321957bcc67748a7fb12b6c2e72acba9b9c2546d9e807efdc134ba7a3cbf&w=740",
  },
  {
    id: 22,
    title: "Gema Suasana",
    description: "Festive invitation for holiday celebrations.",
    price: "Rp 50.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement-smartphone-screen-format_52683-39300.jpg?t=st=1732677164~exp=1732680764~hmac=e0884c0c8d9f4c22b537578a3e6f3e2b23b33b1dbc209a7b6d8ef0ff6de0d01f&w=740",
  },
  {
    id: 23,
    title: "Kasmaran",
    description: "Romantic invitation for couples' special nights.",
    price: "Rp 65.000",
    imageUrl: "https://img.freepik.com/free-vector/hand-drawn-wedding-digital-invitation_23-2149940095.jpg?t=st=1732677178~exp=1732680778~hmac=d0dc32be2e6c6ec5e1936d35fb014eb9438d312053993e2e658647400678be32&w=740",
  },
  {
    id: 24,
    title: "Merangkai Asa",
    description: "Hopeful-themed invitation for charity events.",
    price: "Rp 55.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-smartphone-screen_23-2148560508.jpg?t=st=1732677197~exp=1732680797~hmac=a5a76d451e2cadf708c7147f8b4d07789d3f7b84f681579d7f44b389806f4cdf&w=740",
  },
  {
    id: 25,
    title: "Selaras Rindu",
    description: "Dreamy invitation for private reunions.",
    price: "Rp 40.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement_23-2148566308.jpg?t=st=1732677231~exp=1732680831~hmac=bff23d2f9751827983f3a35a2f50a1162b7e41aa1d35496af07685b420f1271f&w=740",
  },
  {
    id: 26,
    title: "Kisah Satu Hari",
    description: "One-day event invitation with artistic design.",
    price: "Rp 45.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement_23-2148549783.jpg?t=st=1732677248~exp=1732680848~hmac=e8d314549ae2548211d6aa0d9a80d1edbc25fa8b5a96b1093072815c1a584b01&w=740",
  },
  {
    id: 27,
    title: "Gemilang Harapan",
    description: "Bright and colorful invitation for graduation parties.",
    price: "Rp 35.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement-with-smartphone_23-2148554841.jpg?t=st=1732677264~exp=1732680864~hmac=b92ea6a6965ae214241a48b2b8c4879f1dd05f676386af292f34ac50912ee106&w=740",
  },
  {
    id: 28,
    title: "Sejuta Makna",
    description: "Customizable minimalist invitation for all events.",
    price: "Rp 50.000",
    imageUrl: "https://img.freepik.com/premium-vector/postponed-wedding-announcement-concept_23-2148571185.jpg?w=740",
  },
  {
    id: 29,
    title: "Bintang Terang",
    description: "Elegant silver-themed invitation for evening events.",
    price: "Rp 70.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement_23-2148564660.jpg?t=st=1732677305~exp=1732680905~hmac=d49772859c2307a7a8087273048f78057441bb7644edc45dc410bccf0933aa79&w=740",
  },
  {
    id: 30,
    title: "Angan dan Cinta",
    description: "Whimsical floral design for garden weddings.",
    price: "Rp 60.000",
    imageUrl: "https://img.freepik.com/free-vector/postponed-wedding-announcement-smartphone-screen-format_23-2148562186.jpg?t=st=1732677329~exp=1732680929~hmac=909c9cb0bfc87dcd3e368bbf2f4890549970050b29629b626759a220a6f1ec48&w=740",
  },
];

const CardComponent: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen p-2">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {invitationData.map((card) => (
          <div key={card.id} className="relative flex flex-col text-gray-700 bg-white bg-clip-border rounded-md hover:shadow-md cursor-pointer" onClick={() => router.push(`/home/catalog/${card.id}`)}>
            {/* Gambar Undangan */}
            <div className="relative overflow-hidden text-gray-700 bg-white bg-clip-border rounded-t-md h-full md:h-48">
              <img src={card.imageUrl} alt={card.title} className="object-cover w-full h-full" />
            </div>
            {/* Konten Undangan */}
            <div className="p-2">
              <div className="flex items-center justify-between">
                <p className="font-sans text-base font-medium text-blue-gray-900">{card.title}</p>
              </div>
              <p className="font-sans text-sm text-gray-700 opacity-75 py-1.5">{card.description}</p>
              <p className="font-sans text-base font-medium text-blue-gray-900">{card.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
