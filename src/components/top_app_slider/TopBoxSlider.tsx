import TopBox2 from "./TopBox2";
import "./TopBoxSlider.css";
import { useState } from 'react';
import { BiSolidRightArrow, BiSolidLeftArrow} from 'react-icons/bi';

const TopBoxSlider = () => {

  const text1 = "Hello, this is text for the box 1. This is being sent by props to make this container reusable!";
  const bg_url_1 = "url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/new-york-city.png\")"


  const text2 = "So this is text for the box 2. This is being sent by props too. Everything is refactoreedd ENJOYY!";
  const bg_url_2 = "url(\"https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg\")";
  const bg_url_3 = "url(\"https://unsplash.it/g/500/350?random\")";
  const bg_url_4 = "url(\"https://unsplash.it/g/500/350\")";

  const cards = [<TopBox2 text = {text1} title="AHMAD MUKHTAR" date="30th September, 2023" bgimg={bg_url_1}/>, <TopBox2 text = {text2} title="Shaiq e Mustafa" date="1st August, 2023" bgimg={bg_url_2}/>,<TopBox2 text = {text1} title="AHMAD MUKHTAR" date="30th September, 2023" bgimg={bg_url_3}/>,<TopBox2 text = {text2} title="Shaiq e Mustafa" date="1st August, 2023" bgimg={bg_url_4}/>]
  
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number>(calculateVisibleCards());

  function calculateVisibleCards(): number {
    const screenWidth = window.innerWidth;
    const cardWidth = 300; // Adjust this to your card width
    return Math.floor(screenWidth / cardWidth);
  }

  function handleNext() {
    const nextIndex = (currentIndex + 1) % cards.length;
    setCurrentIndex(nextIndex);
  }

  function handlePrevious() {
    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    setCurrentIndex(prevIndex);
  }

  const isAtFirstCard = currentIndex === 0;
  const isAtLastCard = currentIndex === cards.length - 1;

  return (
    <div className="TBS_slider-container">
      <button className="TBS_prev-button" onClick={handlePrevious} disabled={isAtFirstCard}>
        <BiSolidLeftArrow className = "TBS_gr_button"/>
      </button>
      <div className="TBS_slider">
        <div
          className="TBS_card-wrapper"
          style={{ transform: `translateX(-${currentIndex * 370}px)` }} // Adjust card width
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`TBS_slider-card ${index >= currentIndex && index < currentIndex + visibleCards ? 'visible' : ''}`}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
      <button className="TBS_next-button" onClick={handleNext} disabled={isAtLastCard}>
        <BiSolidRightArrow className = "TBS_gr_button"/>
      </button>
    </div>
  );


}

export default TopBoxSlider
