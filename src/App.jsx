// import { useState } from 'react'
import Product from './Komponen/product';
import "./App.css"

function App() {
  const products=[
    {
      nama:"Nike",
      gambar:"https://sneakers.co.id/wp-content/uploads/2018/09/img_5b8e3aa2d26b7.png",
      harga:"200000",
      ukuran:"40",
      deskripsi:"ini adalah sepatu Nike"
  
    },
    {
      nama:"Air Jordan",
      gambar:"https://sneakers.co.id/wp-content/uploads/2019/08/air-jordan-1-high-og-defiant-size-10-1.png",
      harga:"400000",
      ukuran:"40",
      deskripsi:"ini adalah sepatu Air Jordan"

    },
    {
      nama:"Adidas",
      gambar:"https://sneakers.co.id/wp-content/uploads/2016/04/Spezial_classic_kicks_Gary_aspden_spring_2015_600.jpg",
      harga:"300000",
      ukuran:"40",
      deskripsi:"ini adalah sepatu Adidas"


    },
    {
      nama:"Yeezy",
      harga:"400000",
      gambar:"https://sneakers.co.id/wp-content/uploads/2018/10/img_5bd09ef812453.png",
      ukuran:"40",
      deskripsi:"ini adalah sepatu Yeezy"


    },
  ];

  return (
    <div className='konten'>
      {products.map((x, i) => (
        <Product
          key={i}
          nama={x.nama}
          harga={x.harga}
          gambar={x.gambar}
          ukuran={x.ukuran}
          deskripsi={x.deskripsi}
        />
      ))}
    </div>
  );}



export default App
