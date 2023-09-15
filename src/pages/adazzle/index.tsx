import AdazzlePage from "@/components/Containers/Adazzle";
import { NextPageWithLayout } from "@/types/types";
import { ReactElement } from "react";

const Adazzle: NextPageWithLayout = () => {
  return <AdazzlePage />
};

Adazzle.getLayout = (page: ReactElement) => page;

export default Adazzle;
