import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>We are here to provide you with the best clothes for men, women, and children. We have a wide range of clothes for all ages and genders.</p>
                <p>
                    Our clothes are made of high-quality materials and are designed to last long. We offer a wide range of styles and colors to choose from.
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;
