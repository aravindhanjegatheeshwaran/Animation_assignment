import React from 'react';
import { Card, Avatar } from 'antd';
import 'antd/dist/reset.css';

const { Meta } = Card;

const data = [
  {
    name: 'Marvin McKinney',
    avatar: 'https://via.placeholder.com/150',
    content: 'Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data\'s protection completely.'
  },
  {
    name: 'Jacob Jones',
    avatar: 'https://via.placeholder.com/150',
    content: 'As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.'
  },
  {
    name: 'Theresa Webb',
    avatar: 'https://via.placeholder.com/150',
    content: 'Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I\'m always tax compliant.'
  }
];

const CardComponent = ({ name, avatar, content }) => (
  <Card className="card">
    <Meta
      avatar={<Avatar src={avatar} />}
      title={name}
      description={content}
    />
  </Card>
);

const SectionComponent = () => {
  return (
    <div className="section">
      <h1 className="title">What User Says</h1>
      <p className="subtitle">Testimonials that speak louder than words! Customer stories that light up our day.</p>
      <div className="cards">
        {data.map((data, index) => (
          <CardComponent key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default SectionComponent;
