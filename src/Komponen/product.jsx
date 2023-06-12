// import React from 'react'
import { useState } from 'react';
import Tombol from './Tombol';
import "./Product.css";

const Product = (p) => {
    const { nama, gambar, deskripsi } = p;
    const [like, setLike] = useState(false);
    const [show, setShow] = useState(false);

    const handleLikeClick = () => {
        setLike(!like);
    };

    const handleMoreClick = () => {
        setShow(!show);
    };

    return (
        <div className='product'>
            <h2>{nama}</h2>
            <img className='image' src={gambar} alt={nama} />
            {show && <p>{deskripsi}</p>}
            <Tombol onClick={handleLikeClick}>
                {like ? "Batal Suka" : "Suka"}
            </Tombol>
            <Tombol onClick={handleMoreClick}>
                {show? "Sembunyikan" : "Selengkapnya"}
            </Tombol>
        </div>
    );
}


export default Product