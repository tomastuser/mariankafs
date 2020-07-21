import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
///import 'slick-carousel/slick/slick.css';
///import 'slick-carousel/slick/slick-theme.css';

const CustomSlide = ({ index, url, ...props }) => {
  return (
    <div className='UvodSlider' {...props}>
      <img src={url}></img>
    </div>
  );
};

function UvodSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          padding: '10px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };
  const [photos, setPhotos] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('https://marianka.herokuapp.com/photos')
      .then((res) => {
        setPhotos(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(photos);
  if (isLoaded) {
    return (
      <div className='uvodStredCont'>
        <Slider {...settings}>
          {photos.map((photo) => (
            <CustomSlide index={photo.id} url={photo.Image.url} />
          ))}
        </Slider>
        <div className='vitejte'>Vítejte v Mariánce!</div>
        <div
          className='sipka'
          onClick={() => window.scrollTo(0, window.innerHeight * 0.78)}
        >
          ↓
        </div>
      </div>
    );
  }
  return (
    <div className='loading'>
      <h3>NAHRÁVÁM...</h3>
    </div>
  );
}

export default UvodSlider;
