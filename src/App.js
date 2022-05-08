import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import MiCustomProvider from "./components/MiContexto";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <MiCustomProvider>
        <Header />
        <Main />
        <Footer />
      </MiCustomProvider>
    </BrowserRouter>
  );
};

export default App;
