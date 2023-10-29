import React from 'react'
import '../Styles/Top.css'
export default function Top() {
  return (
    <>
    <div className="main">  
      <div className="left divide">
      <div className="area">
      <div className="icon">
      <img src='Images/food_truck.jpg' alt="not working"  style={{height:"73px",width:"73px"}}/>
      </div>
      <div className="text" style={{paddingTop:"40px"}}>
      <h2 className='big--text'>
        Discover the <span style={{color:"#E23744",fontSize:"50px"}}>Best</span> Food and Drinks.
      </h2>
      </div>
      <div className="small--text">
      <span>Naturally made Healthcare Products for the better care & support of your body.</span>
      </div>
      <div className="button--top">
       <div className='explore--button'>Explore Now!</div>
      </div>
      </div>
      </div>
      <div className="right divide" > 
      <div className="pizza--image">
      <img src="Images/pizza.jpeg" alt="not working" />
      <button className="btn btn-outline-light pizza--btn">Get In Touch</button>
      </div>
      </div>
    </div>
    </>
  )
}
