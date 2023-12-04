import ProductDetail from "./pages/ProductDetail";

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
      <ProductDetail />
    </div>
  );
}

export default App;
