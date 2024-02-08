// SearchItem.js

import React from 'react';
import './SearchItem.css';

const formatNumber = (num) => {
  if (num === undefined || num === null) {
    return ''; // 정의되지 않은 경우 빈 문자열 반환
  }
  if (num >= 10000) {
    const formattedNumber = (num / 10000).toFixed(1);
    const decimalPart = formattedNumber.split('.')[1];
    return decimalPart === '0' ? formattedNumber.split('.')[0] + '만' : formattedNumber + '만';
  }
  return num.toLocaleString();
};

const SearchItem = ({
  productId,
  productEngName,
  productKorName,
  imgList,
  communityTagProductsCount,
  userLikesCount
}) => {
  
  return (
    <div className="product-item">
      {imgList.length > 0 ? ( // 이미지가 존재하는 경우에만 렌더링
        <img src={imgList[0].imgThumbUrl} alt={`Product item ${productId}`} />
      ) : ( // 이미지가 없는 경우
      <img src="/default-image.jpg" alt={`Product item ${productId}`} />
     )}
      <div className="product-info">
        <div className="product-details">
          <div className="brand-name"></div>
          <div className="product-name-english">{productEngName}</div>
          <div className="product-name-korean">{productKorName}</div>
          <div className="product-price">원</div>
          <div className="buy-now">즉시 구매가</div>
        </div>
        <div className="product-stats">
          <div><img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F1174%2F1174410.png&type=a340" alt={'북마크'} /> {formatNumber(userLikesCount)}</div>
          <div><img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fus.123rf.com%2F450wm%2Ficonmama%2Ficonmama1601%2Ficonmama160100163%2F50953775-writing-icon.jpg&type=sc960_832" alt={'후기'} /> {formatNumber(communityTagProductsCount)}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
