import AggridPage from "@/components/Containers/Aggrid";
import { NextPageWithLayout } from "@/types/types";
import { ReactElement } from "react";

const Aggrid: NextPageWithLayout = () => {
  return <AggridPage />
};

Aggrid.getLayout = (page: ReactElement) => page;

export default Aggrid;
