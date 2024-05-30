import React, { useState } from 'react';
import Card from '../components/Card';
import {cardData} from '../constants';
import { Button } from '@material-tailwind/react';
import PopupCard from '../components/PopupCard';

function Gallery() {
  const initialElements = Math.ceil(cardData.length * 0.20);
  const [numberOfEl, setNumberOfEl] = useState(initialElements);

  const numChange = () => {
    setNumberOfEl(prevNumberOfEl => Math.min(prevNumberOfEl + initialElements, cardData.length));
  };

  const slicedData = cardData.slice(0, numberOfEl);

  return (
    <div>
      <div className='flex justify-center md:px-8 lg:px-32'>
        <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-3 py-12 md:py-20">
          {slicedData.map((stat, index) => (
            <Card key={index} img={stat.link} text={stat.titles[1]} />
          ))}
        </div>
      </div>
      {numberOfEl < cardData.length && (
        <div className='flex justify-center mb-10'>
          <Button className='capitalize font-pop text-sm' onClick={numChange}>
            Load more illustrations
          </Button>
        </div>
      )}
      
    </div>
  );
}

export default Gallery;
