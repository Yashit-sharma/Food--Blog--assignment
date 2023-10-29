import React from 'react'
import '../Styles/Food.css'
import items from '../Components/Data.js'
import { useState } from 'react';
export default function Food() {
    const Data = items;
    const items_per_page = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage =Math.ceil(Data.length / items_per_page);
    const handleClickNext = () => {
      if(currentPage < totalPage){
        setCurrentPage(currentPage + 1);
      }
    }
    const handleClickPrev = () => {
      if(currentPage > 1){
        setCurrentPage(currentPage - 1);
      }
    }
  const indexOfLastItem = currentPage * items_per_page;
  const indexOfFirstItem = indexOfLastItem - items_per_page;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);
  return (
   <>
    <div className=" food--main">
    <div className="food--heading">
    <h2>Latest Article</h2>
    </div>
    <div className="food--items">
    {currentItems.map((ele)=>{
    return(
    <div className="card" key={ele.id} style={{width: "16rem",padding:"10px"}}>
    <img src={ele.image} alt='not working' className="card-img-top" style={{borderRadius:"21px",height:"13rem"}}/>
    <div className="card-body">
    <h5 className="card-title">{ele.name}</h5>
    <p className="card-text">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
    <button className="btn read--more">Read More</button>
    </div>
    </div>
    )
    })}
    </div>
    <div className="pagination">
        <button className="btn pagination--buttons" disabled={currentPage === 1} onClick={()=>handleClickPrev()}><i className="bi bi-arrow-left-square"></i></button>
        <span style={{display:"flex",alignItems:"center"}}>{currentPage}/{totalPage}</span>
        <button className="btn pagination--buttons" disabled={currentPage === totalPage} onClick={()=>handleClickNext()}><i className="bi bi-arrow-right-square"></i></button>
    </div>
   </div>
   </>
  )
}
