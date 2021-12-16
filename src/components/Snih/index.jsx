import React from 'react';

const Snih = ({data, getChoice}) => {
  return (
      	
    <div className="field">
							<label className="field__label ">Sníh na pozadí</label>

							<div className="field__radio-group">

                {data.map((d, index) =>
                  <div className="field__radio" key={index}>
                    <input type="radio" name="snow" id={`snow-${d.value}`} onClick={() => getChoice("snow", d.value)}/>
                    <label htmlFor={`snow-${d.value}`}>{d.description}</label>
                  </div>
                )}

							</div>
						</div>

  )
}

export default Snih;