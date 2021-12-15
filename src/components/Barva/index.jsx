import React from 'react';

const Barva = ({data}) => {
  return (
      	
    <div className="field">
							<label className="field__label">Barva přáníčka</label>

							<div className="field__swatch-group field__swatch-group--round">
              {data.map((d, index) =>
                <div className="field__swatch" key={index}>
                  <input type="radio" name="color" id={`color-${d.value}`}/>
                  <label htmlFor={`color-${d.value}`} className={`swatch--${d.value}`} data-description={d.description}></label>
                </div>
              )}
							
							</div>

						</div>

  )
}

export default Barva;