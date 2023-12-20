import ProductDetail from "./pages/product/ProductDetail";
import StylePage from "./pages/style/StylePage";
import StyleUser from "./pages/style/StyleUser";
import StylePost from "./pages/style/StylePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
    style={{
      fontFamily: "'Noto Sans KR', sans-serif",
    }}
    className="App">
      <div style={{backgroundColor:"black", height:"64px" ,padding:"20px 40px"}}>
        <h1 style={{color:"white"}}>HEADER</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/product" element={<ProductDetail />}></Route>
          <Route path="/style/:cate" element={<StylePage />}></Route>
          <Route path="/style/user/:id" element={<StyleUser />}></Route>
          <Route path="/style/post/:id" element={<StylePost />}></Route>
        </Routes>
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
