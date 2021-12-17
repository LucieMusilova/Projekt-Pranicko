import React, {useState} from 'react';
import Snowfall from 'react-snowfall';
import { useAudio } from '../../hooks/useAudio';

const Pranicko = ({card}) => {

  const [open, setOpen] = useState(false);
 
const [isPlaying, play, pause] = useAudio(`../../assets/audio/${card?.music}.mp3`);

  const handlePlayClick = () => {
    setOpen(!open);
    open ? pause() : play();
  }
 

  return (
  <div className={`background background--${card.background}`}>

    <div className="snow">
        <Snowfall snowflakeCount={card.snow} />
    </div>

    <div className={open ? `card card--${card.color} card--open` : `card card--${card.color}`} onClick={handlePlayClick}>

      <div className="cover">
        <img className="cover__image" src={`../../assets/images/covers/${card.cover}.svg`} />
      </div>

      <div className="inside-left">
        <div className="inside-left__content">
          <div className="inside-left__text">{card.text}</div>
          <div className="inside-left__sender">{card.sender}</div>
        </div>
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