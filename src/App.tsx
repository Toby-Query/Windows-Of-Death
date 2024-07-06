// import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar.js";
import Ch1 from "./pages/Chapter1.js";
import Ch2 from "./pages/Chapter2.js";
import Ch3 from "./pages/Chapter3.js";
import Ch4 from "./pages/Chapter4.js";
import Ch5 from "./pages/Chapter5.js";
import Ch6 from "./pages/Chapter6.js";
// import About from "./pages/About.jsx";
// import Analytics from "./pages/Analytics.jsx";
// import Comment from "./pages/Comment.jsx";
// import Product from "./pages/Product.jsx";
// import ProductList from "./pages/ProductList.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="//Windows-Of-Death" element={<Ch1 />} />
          <Route path="/Windows-Of-Death/Ch2" element={<Ch2 />} />
          <Route path="/Windows-Of-Death/Ch3" element={<Ch3 />} />
          <Route path="/Windows-Of-Death/Ch4" element={<Ch4 />} />
          <Route path="/Windows-Of-Death/Ch5" element={<Ch5 />} />
          <Route path="/Windows-Of-Death/Ch6" element={<Ch6 />} />
          {/* <Route path="/productList" element={<ProductList />} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
