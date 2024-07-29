import React from 'react';
import { Card, Avatar } from 'antd';
import 'antd/dist/reset.css';
import './SectionComponent.css';

const data = [
  {
    name: 'Marvin McKinney',
    avatar: './1.png',
    content: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely."
  },
  {
    name: 'Jacob Jones',
    avatar: './2.png',
    content: 'As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.'
  },
  {
    name: 'Theresa Webb',
    avatar: './3.png',
    content: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  },
  {
    name: 'Cody Fisher',
    avatar: './4.png',
    content: 'As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.'
  },
  {
    name: 'Ronald Richard',
    avatar: './5.png',
    content: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  },
  {
    name: 'Theresa Webb',
    avatar: './3.png',
    content: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  },
  {
    name: 'Theresa Webb',
    avatar: './3.png',
    content: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  },
  {
    name: 'Theresa Webb',
    avatar: './3.png',
    content: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  },
  {
    name: 'Theresa Webb',
    avatar: './3.png',
    content: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant."
  },
];

const CardComponent = ({ name, avatar, content }) => (
  <Card className="card">
    <Avatar src={avatar} className="avatar" />
    <h3 className="name">{name}</h3>
    <p className="content">{content}</p>
  </Card>
);

const SectionComponent = () => {
  return (
    <div className="section">
      <div className='section-div'>
        <header className="title">What User says</header>
        <p className="subtitle">Testimonials that speak louder than words! Customer stories that light up our day.</p>
      </div>
      <div className="carousel-container">
        <div className="carousel">
          <div className="cards">
            {data.map((item, index) => (
              <CardComponent key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
