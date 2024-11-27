"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home");
  }, [router]);

  return null;
};

export default IndexPage;

IndexPage.getLayout = function PageLayout(page: any) {
  return page;
};
