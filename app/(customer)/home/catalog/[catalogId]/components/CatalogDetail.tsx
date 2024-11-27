"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CatalogDetail = () => {
  const [clicked, setClicked] = useState<boolean>(true);

  return (
    <section className="max-w-6xl text-gray-700 body-font overflow-hidden">
      <div className="container mt-6 mx-auto">
        <div className="lg:w-full flex flex-wrap">
          <div className="lg:w-1/2 w-full flex flex-col">
            <div>
              <img
                src={`https://img.freepik.com/free-vector/flat-design-wedding-digital-invitation_23-2149949327.jpg?t=st=1732677698~exp=1732681298~hmac=a36922537f5b6d1edb2e91b4e7a4548e416763fd13d0d1724238527722eba0e1&w=740`}
                className={`mx-auto w-[300px] md:w-[450px] md:h-[300px] object-contain rounded-lg transition-transform duration-300`}
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full mx-auto p-4">
            <h2 className="text-black flex justify-start text-lg xl:text-4xl title-font font-medium mb-1">Arunika</h2>
            <div style={{ textAlign: "justify" }} className="py-3 border-gray-200">
              <p className="text-lg text-black">Deskripsi produk</p>
              {/* <div dangerouslySetInnerHTML={{ __html: product.description }} /> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
                praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
                quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet laborum.
              </p>
            </div>
            <div className="flex justify-between">
              <span className="title-font font-semibold text-2xl text-black">Rp. 55 000</span>
            </div>
            <div className="flex gap-5 mt-4 justify-end">
              <Button variant="secondary">Lihat Undangan</Button>
              <Button>
                <ShoppingCart size={25} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogDetail;
