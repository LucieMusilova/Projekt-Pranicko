import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Snowfall from 'react-snowfall';
import { useAudio } from '../../hooks/useAudio';

const Pranicko = () => {

  const {id} = useParams();
  const [open, setOpen] = useState(false);
  const [card, setCard] = useState({cover: 'trees'}); 

  const fetchData = () => {
    fetch(`https://xmas-api.itgirls.cz/cards/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCard(data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

 
const [isPlaying, play, pause] = useAudio(`../../assets/audio/${card?.music}`);

  const handlePlayClick = () => {
    setOpen(!open);
    open ? pause() : play();
  }
 
  return (
  <div className={`background background--${card?.background}`}>

    <div className="snow">
        <Snowfall snowflakeCount={card?.snow} />
    </div>

    <div className={open ? `card card--${card?.color} card--open` : `card card--${card?.color}`} onClick={handlePlayClick}>

      <div className="cover">
        <img className="cover__image" src={`../../assets/images/covers/${card?.cover}.svg`} />
      </div>

      <div className="inside-left">
        <div className="inside-left__content">
          <div className="inside-left__text">{card?.text}</div>
          <div className="inside-left__sender">{card?.sender}</div>
        </div>
        <img className="inside-left__logo" src="../../assets/images/czechitas.svg" alt="Czechitas"/>
      </div>

      <div className="inside-right">
        <div className="photo photo1"><img src="../../assets/images/photos/photo1.jpg"/></div>
        <div className="photo photo2"><img src="../../assets/images/photos/photo2.jpg"/></div>
        <div className="photo photo3"><img src="../../assets/images/photos/photo3.jpg"/></div>
        <div className="photo photo4"><img src="../../assets/images/photos/photo4.jpg"/></div>
      </div>

    </div>

    <p className="instructions">Kliknutím mě otevři</p>

  </div>

  )
  
}

export default Pranicko;