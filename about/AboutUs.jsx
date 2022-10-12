import React from 'react';
import * as Img from "../../assets/images/index";
import { Card } from '../shared/Card';
import { items } from '../models/teams';
// import { Link } from 'react-router-dom';

const AboutUs = () => {

  return (
    <div className='section'>
      <div className='container'>
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="content">
          <div className="article">
            <h3>Who are we?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Libero explicabo cupiditate cum modi 
              sequi nam deserunt ipsum quis provident.
              Dolor delectus tempore architecto voluptates?
              Dolore aliquam tenetur saepe qui veritatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Libero explicabo cupiditate cum modi 
              sequi nam deserunt ipsum quis provident.
              Dolor delectus tempore architecto voluptates?
              Dolore aliquam tenetur saepe qui veritatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Libero explicabo cupiditate cum modi 
              sequi nam deserunt ipsum quis provident.
              Dolor delectus tempore architecto voluptates?
              Dolore aliquam tenetur saepe qui veritatis.</p>
            <div className="button">
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={Img.Who_Img} alt="" />
        </div>
      </div>

      <div className='container'>
        <div className="what-content">
          <div className="article">
            <h3>What we do?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente aspernatur illo 
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente aspernatur ill
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente aspsectetur adipisicing elit.
              Sapiente aspernatur illo onsectetur adipisicing elit.
              Sapiente aspernatur illo optio vel inventore itaque
              dolor totam non quod quis?</p>
            <div className="button">
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
        <div className="wimage-section">
          <img src={Img.What_Img} alt="" />
        </div>
      </div>


      <div className='team'>
        <h2 className='header'>Teams</h2>
        <div className='members'>
          <div className='member'>
            {items.map((item) => {
              return (
                <Card key={item.id} item={item} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;