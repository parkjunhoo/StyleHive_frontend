// SearchResults.js

import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchResults.css';
import SearchItem from './SearchItem';
import StyleList from '../style/StyleList';
import UserItem from './UserItem';

import SearchInput from './searchs/SearchInput'; // 검색바
import Autocomplete from './searchs/Autocomplete'; // 자동완성

const SearchResults = ({ recentSearches, onSaveRecentSearch }) => {
  const [activeTab, setActiveTab] = useState('products'); // tab 기본값
  const [keyword, setKeyword] = useState('');
  const [searchMode, setSearchMode] = useState('normal');
  const [autocompleteResults, setAutocompleteResults] = useState([]); // 자동 완성
  const [relatedKeywords, setRelatedKeywords] = useState([]); // 연관 검색어
  const [products, setProducts] = useState([]); // 상품 tab
  const [communities, setCommunities] = useState([]); // 스타일 tab
  const [users, setUsers] = useState([]); // 프로필 tab
  const location = useLocation();
  const navigate = useNavigate();
  const [searchCompleted, setSearchCompleted] = useState(false); // 검색 완료 여부
  
  // 데이터 받아오기
  const fetchData = useCallback(async (query, tab) => {
    try {
      const response = await fetch(`http://localhost:8080/api/search?keyword=${encodeURIComponent(query)}&tab=${tab}`);

      if (!response.ok) {
        console.error('Fetch failed with status:', response.status);
        return;
      }

      const data = await response.json();

      if (tab === 'users') {
        setUsers(data || []);
      } else if (tab == 'communities') {
        setCommunities(data || []);
      } else {
        setProducts(data || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [setUsers, setCommunities, setProducts]);

  // 자동 완성 받아오기
  const fetchAutocompleteResults = useCallback(async (query) => {
    try {
      const response = await fetch(`http://localhost:8080/api/search/autocomplete?keyword=${encodeURIComponent(query)}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching autocomplete results:', error);
      return [];
    }
  }, []);
  
  // 연관 검색어 받아오기
  const fetchRelatedKeywords = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/search/relatedProducts?keyword=${encodeURIComponent(keyword)}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching related keywords:', error);
      return [];
    }
  }, [keyword]);

  // 검색어 입력 핸들러
  const handleSearchInput = useCallback(async (event) => {
    const query = event.target.value.trim();
    setKeyword(query);
    
    // 포커스가 되고 Enter 키가 눌렸을 때에만 검색 실행
    if (event.key === 'Enter' && query !== '') {
      setSearchCompleted(true);
    } else {
      setSearchCompleted(false);
    }

    if (query.trim() !== '') {
      setSearchMode('autocomplete');

      // 자동완성 결과 받아오기
      const autocompleteResults = await fetchAutocompleteResults(query);
      setAutocompleteResults(autocompleteResults);
    } else {
      setSearchMode('normal');
    }
  }, []);

  // 검색 완료 핸들러
  const handleSearchSubmit = useCallback(async () => {
    const query = keyword.trim();
    if (query !== '') {
      onSaveRecentSearch(query);
      
      // 콘솔에 현재 최근 검색어 목록 출력
      console.log('현재 최근 검색어 목록:', recentSearches);
    
      // 연관 검색어를 다시 가져옴
      try {
        const relatedKeywordsData = await fetchRelatedKeywords(query);
        setRelatedKeywords(relatedKeywordsData);
      } catch (error) {
        console.error('연관 키워드 업데이트 중 에러 발생:', error);
      }

      // 상품 목록과 연관 검색어를 가져오는 함수 호출
      fetchData(query, activeTab);
      
      // 검색 완료 후 자동완성 결과 초기화
      setAutocompleteResults([]);
      setSearchCompleted(false);
    }
  }, [keyword, onSaveRecentSearch, fetchRelatedKeywords, setRelatedKeywords, fetchData, activeTab, setAutocompleteResults]);

  // 엔터 키 또는 포커스를 잃었을 때 검색 실행
  useEffect(() => {
    if (searchCompleted) {
      handleSearchSubmit();
    }
  }, [searchCompleted]);

  // tab을 눌렀을 때 결과값 다시 가져오기
  const handleTabClick = useCallback(async (tab) => {
    setActiveTab(tab);
    navigate(`?keyword=${encodeURIComponent(keyword)}&tab=${tab}`);
    await fetchData(keyword, tab);
  }, [keyword, navigate]);

  // 사용자를 팔로우/언팔로우하는 함수
  const handleFollowToggle = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/user/follow/toggle?userId2=${userId}`, {
        method: 'POST'
      });
      if (!response.ok) {
        console.error('Follow toggle failed with status:', response.status);
        return;
      }
      // 팔로우 상태 변경 후 데이터를 다시 불러옴
      await fetchData(keyword, activeTab);
    } catch (error) {
      console.error('Error toggling follow:', error);
    }
  };

  // 컴포넌트가 처음으로 마운트될 때 데이터 가져오기
  useEffect(() => {
    const initialFetchData = async () => {
      // URL에서 검색어와 탭 정보 가져오기
      const urlSearchParams = new URLSearchParams(location.search);
      const keywordFromUrl = urlSearchParams.get('keyword');
      const tabFromUrl = urlSearchParams.get('tab');

      // 검색어와 탭 정보 설정
      setKeyword(keywordFromUrl || '');
      setActiveTab(tabFromUrl || 'products');

      // 데이터 가져오기
      await fetchData(keywordFromUrl || '', tabFromUrl || 'products');
    };

    initialFetchData();
  }, [location.search, fetchData]);

  // 컴포넌트가 처음으로 마운트될 때 연관 검색어 가져오기
useEffect(() => {
  const fetchRelatedKeywordsData = async () => {
    try {
      // URL에서 검색어 가져오기
      const urlSearchParams = new URLSearchParams(location.search);
      const keywordFromUrl = urlSearchParams.get('keyword');

      // 연관 검색어 가져오기
      const response = await fetch(`http://localhost:8080/api/search/relatedProducts?keyword=${encodeURIComponent(keywordFromUrl || '')}`);
      const data = await response.json();

      // 연관 검색어 설정
      setRelatedKeywords(data || []);
    } catch (error) {
      console.error('Error fetching related keywords data:', error);
    }
  };

  fetchRelatedKeywordsData();
}, [location.search]);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search);
    const keywordFromUrl = urlSearchParams.get('keyword');
    const tabFromUrl = urlSearchParams.get('tab');
    setKeyword(keywordFromUrl || '');
    setActiveTab(tabFromUrl || 'products');
  }, [location.search]);

  useEffect(() => {
    const fetchRelatedKeywordsAndUpdateState = async () => {
      if (searchCompleted && searchMode === 'normal' && keyword.trim() !== '') {
        try {
          const relatedKeywordsData = await fetchRelatedKeywords(keyword);
          setRelatedKeywords(relatedKeywordsData);
        } catch (error) {
          console.error('연관 키워드 업데이트 중 에러 발생:', error);
        }
      }
    };
  
    // 검색이 완료되고 검색 모드가 'normal'이며 키워드가 비어 있지 않을 때 실행
    fetchRelatedKeywordsAndUpdateState();
  }, [searchCompleted]);

  // 검색 입력란 외의 다른 요소를 클릭했을 때 자동완성 결과를 숨김
  const handleOutsideClick = () => {
    setSearchMode('normal');
  };
    
  return (
    <>
    <div className="container r_content" onClick={handleOutsideClick}>
      <div className='search_title'>
      <SearchInput
            searchQuery={keyword}
            handleSearchInput={handleSearchInput}
            onSearchSubmit={handleSearchSubmit}
          />
        {searchMode === 'autocomplete' && autocompleteResults.length > 0 && (
          <Autocomplete autocompleteResults={autocompleteResults} />
        )}
      <div className='related_keywords'>
          <p className='title'>연관</p>
          <div className='keywords'>
          {relatedKeywords.map((relatedKeyword, index) => (
            <a key={index} className='keyword' href={`YOUR_LINK_HERE/${encodeURIComponent(relatedKeyword)}`}>
              <p>{relatedKeyword}</p>
            </a>
          ))}
          </div>
        </div>
      </div>

        <nav className='shop_tab'>
          <div className='tabs'>
            <ul className='ul_tab'>
              <li className='li_tab'>
              <a className={`tab ${activeTab === 'products' ? 'active' : ''}`} onClick={() => handleTabClick('products')}>
                  <span className='products'>상품</span>
                </a>
              </li>
              <li className='li_tab'>
              <a className={`tab ${activeTab === 'communities' ? 'active' : ''}`} onClick={() => handleTabClick('communities')}>
                  <span className='communities'>스타일</span>
                </a>
              </li>
              <li className='li_tab'>
              <a className={`tab ${activeTab === 'users' ? 'active' : ''}`} onClick={() => handleTabClick('users')}>
                  <span className='users'>프로필</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {activeTab === 'products' && (
          <div className="product-list">
            {products.map((product) => (
                <SearchItem key={product.productId} {...product} />
            ))}
          </div>
        )}
        {activeTab === 'communities' && (
          <div className="communities-list">
            <StyleList data={communities} />
          </div>
        )}
        {activeTab === 'users' && (
          <div className="user-list">
            {users.map((user) => (
              <UserItem 
                key={user.userId} 
                userId={user.userId}
                userNickname={user.userNickname}
                userImg={user.userImg}
                userFollowsCount={user.userFollowsCount}
                isFollowing={user.isFollowing}
                isCurrentUser= {user.userId === user.loggedInUserId}
                handleFollowToggle={handleFollowToggle}
              />
            ))}
          </div>
        )}
    </div>
    </>
  );
};

export default SearchResults;