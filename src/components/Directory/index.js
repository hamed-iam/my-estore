import React from 'react';
import ShopMen from './../../assets/pexels-pixabay-157675.jpg';
import ShopWomen from './../../assets/pexels-godisable-jacob-952214.jpg';
import './styles.scss';
const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${ShopWomen})` }}>
          <a>Shop women's</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${ShopMen})` }}>
          <a>Shop Men's</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
