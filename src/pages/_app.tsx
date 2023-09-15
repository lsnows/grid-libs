import { AppPropsWithLayout } from "@/types/types";
import { StyleSheetManager } from "styled-components";

function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <StyleSheetManager>
      <main>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </main>
    </StyleSheetManager>
  )
}

export default App;
