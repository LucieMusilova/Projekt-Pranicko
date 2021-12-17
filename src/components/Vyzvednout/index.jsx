import React, {useState} from 'react';
import { Link } from "react-router-dom";

import Header from "../Header";

const Vyzvednout = () => {
  const [code, setCode] = useState('');

  const getCode = (a) => {
    setCode(a);
  };

  return (
    <>
    <Header />
      <div className="header">
        <h1 className="header__title">Vyzvednout přáníčko</h1>
      </div>

      <main className="content">
        <form className="pickup" autoComplete="off">
          <label htmlFor="pickup-code" className="pickup__label">
            Zadej šestimístný kód přáníčka
          </label>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">
              <input
                id="pickup-code"
                className="pickup__code"
                type="text"
                maxLength="6"
                autoComplete="off"
                onChange={(event) => getCode(event.target.value)}
              />
            </div>
          </div>
          <Link to={`/pranicko/${code}`}>
            <button className="button button--big">Vyzvednout přáníčko</button>
          </Link>
        </form>
      </main>
    </>
  );
};

export default Vyzvednout;
