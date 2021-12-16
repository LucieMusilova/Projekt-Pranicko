import React from "react";
import { Link } from "react-router-dom";

const Hotovo = ({ final }) => {
  if (final === null) {
    return <p>Načítám údaje.</p>;
  }
  if (final !== null && final.success === false) {
    return <p>Nejsou zvolena všechna pole, prosím doplň je.</p>;
  }
  if (final !== null && final.success === true) {

    return (
      <main className="content">
        <div className="pickup">
          <p className="pickup__label">Přímý odkaz na přáníčko</p>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">
              <a href="https://tvuj-web.cz/card/abc123" className="pickup__url">
                https://tvuj-web.cz/card/abc123
              </a>
              <p className="pickup__description">
                Tento odkaz pošli emailem, přes messenger nebo ho dej na
                sociální sítě. Po kliknutí na odkaz se zobrazí tvoje přáníčko.
              </p>
            </div>
          </div>

          <p className="pickup__label">Kód tvého přáníčka</p>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">
              <div className="pickup__code">{final.data.id}</div>
              <p className="pickup__description">
                S tímto kódem si kdokoliv může vyzvednout tvoje uložené
                přáníčko. Hodí se, když chceš přáníčko poslat třeba SMSkou a
                nechceš opisovat celou adresu.
              </p>
            </div>
          </div>

          <Link to="/vytvorit/">
            <button className="button button--big">
              Vytvořit další přáníčko
            </button>
          </Link>
        </div>
      </main>
    );
    }
};

export default Hotovo;
