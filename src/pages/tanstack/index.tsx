import TanstackPage from "@/components/Containers/Tanstack";
import { NextPageWithLayout } from "@/types/types";
import { ReactElement } from "react";

const Tanstack: NextPageWithLayout = () => {
  return <TanstackPage />
};

Tanstack.getLayout = (page: ReactElement) => page;

export default Tanstack;
