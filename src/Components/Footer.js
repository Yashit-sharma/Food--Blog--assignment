import React from 'react'
import '../Styles/Footer.css'
export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className='footer--icon'>
        <img src='Images/food_truck.jpg' alt="not working"  style={{height:"100px",width:"100px"}}/>
        </div>
        <div className='contact--us'>
        <h4>Contact Us</h4>
        <ul>
            <li>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</li>
            <li>example2020@gmail.com</li>
            <li>(904) 443-0343</li>
        </ul>
        </div>
        <div className='more'>
        <h4>More</h4>
        <ul>
            <li>About Us</li>
            <li>Products</li>
            <li>Carrer</li>
            <li>Contact Us</li>
        </ul>
        </div>
        <div className='socials' style={{color:"rgba(14, 35, 104, 1)"}}>
            <div className="social-links">
            <h4>Social Links</h4>
            <div className='link--icons'>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter" ></i>
            <i className="bi bi-facebook"></i>
            </div>
            </div>
            <div className="copyright" style={{color:"#828B9C"}}>
            © 2022 Food Truck Example
            </div>
        </div>
    </div>
    </>
  )
}
