import ProductDetail from "./pages/product/ProductDetail";
import StylePage from "./pages/style/StylePage";
import StyleUser from "./pages/style/StyleUser";
import StylePost from "./pages/style/StylePost";
import StyleProduct from "./pages/style/StyleProduct";

import HeaderMain from "./pages/HeaderMain";
import Footer from "./pages/Footer";
import Recommend from "./pages/Recommend";
import Rank from "./pages/Rank";
import MainPageHeader from "./components/soyoung/MainPageHeader";

import RankPage from './components/sanghee/RankPage';
import NoticeDetail from './components/sanghee/NoticeDetail';
import NoticeList from './components/sanghee/NoticeList';
import FAQs from './components/sanghee/FAQs';
import InspectionCriteria from './components/sanghee/InspectionCriteria';
import Search from './components/sanghee/searchs/Search';
import SearchResults from './components/sanghee/SearchResults';

import React, { useState } from 'react';
import { Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";

function App() {
  // yourOnSaveRecentSearchFunction를 정의하거나 가져옴
  const yourOnSaveRecentSearchFunction = (searchQuery) => {};

  const [recentSearches, setRecentSearches] = useState([]);

  const saveRecentSearch = (keyword) => {
    // 기존 검색어 배열에서 중복 검색어 제거
    const updatedSearches = recentSearches.filter((search) => search !== keyword);

    // 새로운 검색어 추가
    const newRecentSearches = [keyword, ...updatedSearches.slice(0, 4)];

    // 최근 검색어 상태 업데이트
    setRecentSearches(newRecentSearches);
  };
  
  return (
    <div className="App">
      <header>
        <HeaderMain /> {/*chlidren 객체로 아래헤더 바꿀수있도록 하기 */}
        <MainPageHeader />
      </header>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
          <Route path="/style/:cate" element={<StylePage />}></Route>
          <Route path="/style/user/:id" element={<StyleUser />}></Route>
          <Route path="/style/post/:id" element={<StylePost />}></Route>
          <Route path="/style/product/:id" element={<StyleProduct />}></Route>
          <Route path="/" element={<Recommend />} />
          <Route path="/lank" element={<Rank />} />
          <Route path="/luxury" element={<h1>luxury</h1>} />
          <Route path="/man" element={<h1>man</h1>} />
          <Route path="/woman" element={<h1>woman</h1>} />
          <Route path="/discovery" element={<h1>discovery</h1>} />
          <Route path="*" element={<h1>없는페이지 입니다.</h1>} />
          <Route path="/Search" element={<Search recentSearches={recentSearches} onSaveRecentSearch={saveRecentSearch} />} />
          <Route path="/SearchResults" element={<SearchResults recentSearches={recentSearches} onSaveRecentSearch={saveRecentSearch} />} />
          <Route path="/RankPage" element={<RankPage title="남성 신발 인기 순위" />} />
          <Route path="/NoticeList" element={<NoticeList />} />
          <Route path="/NoticeDetail/:id" element={<NoticeDetail />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/InspectionCriteria" element={<InspectionCriteria />} />
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
