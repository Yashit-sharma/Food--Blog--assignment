import React from 'react'
import '../Styles/About.css'
export default function About() {
  return (
   <>
  <div className="about--main">
    <div className="image--about">
      <img src='Images/about.png' alt="" />
    </div>
    <div className="about--text">
      <h3>About us</h3>
      <p style={{fontSize:"15px",color:"grey"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. has survived not only five centuries.
      </p>
      <button className="btn btn-outline-light about--btn">Read More</button>
    </div>
  </div>
   </>
  )
}
