import React from 'react';

const Hudba = ({data, getChoice}) => {
  return (
      	
    <div className="field">
							<label className="field__label">Hudba</label>

							<div className="field__radio-group">
                {data.map((d, index) =>
                  <div className="field__radio" key={index}>
                    <input type="radio" name="music" id={`music-${d.value}`} onClick={() => getChoice("music", d.value)}/>
                    <label htmlFor={`music-${d.value}`}>{d.description}</label>
                  </div>
                )}

							</div>
						</div>


  )
}

export default Hudba;