import HomePage from "@/components/Containers/Home";
import { NextPageWithLayout } from "@/types/types";
import { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  return <HomePage />
};

Home.getLayout = (page: ReactElement) => page;

export default Home;
