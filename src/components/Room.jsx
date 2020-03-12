import React, { useState } from 'react';
import './Room.css'

const Room = () => {
  const [isLit, setIsLit] = useState(true);
  const [isLight, setIsLight] = useState(false);
  const [temperature, setTemperature] = useState(22);

  return (
    <div className="room">
        <div className="disponibilite">
            <div id="status" className={isLit ? 'free' : 'lit'}></div>
            <span>La chambre est {isLit ? 'disponible' : 'occupée'}</span>
            <button onClick={() => {
                setIsLit(prev => !prev);
                if (isLit == false) {
                    setIsLight(false);
                    setTemperature(22);
                }
            }}>
                Changer l'état
            </button>
        </div>
        <div className="lumiere">
            <div id="status" className={isLight ? 'lighted' : 'off'}></div>
            <span>La chambre est {isLight ? 'allumé' : 'éteinte'}</span>
            <button onClick={() => { if(isLit != true) setIsLight(prev => !prev); }}>
                {isLight ? 'Eteindre' : 'Allumer'}
            </button>
        </div>
        <div className="temperature">
            <span>température de la chambre : {temperature} °C</span>
            <button className="temp" onClick={() => { if(isLit != true) setTemperature(prev => prev-1); }}> - </button>
            <button className="temp" onClick={() => { if(isLit != true) setTemperature(prev => prev+1); }}> + </button>
        </div>
    </div>
  );
};

export default Room;
