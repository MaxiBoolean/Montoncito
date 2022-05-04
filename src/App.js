import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
