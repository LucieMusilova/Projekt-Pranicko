import React from 'react';

const Obrazek = ({data, getChoice}) => {
  return (
      	
    <div className="field">
							<label className="field__label">Obrázek na obálce</label>

							<div className="field__swatch-group field__swatch-group--big">

              {data.map((d, index) =>
                <div className="field__swatch" key={index} onClick={() => getChoice("cover", d.value)}>
                  <input type="radio" name="color" id={`cover-${d.value}`}/>
                  <label htmlFor={`cover-${d.value}`} className={`swatch--cover-${d.value}`} data-description={d.description}></label>
                </div>
              )}
								
							</div>

						</div>

  )
}

export default Obrazek;