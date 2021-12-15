import React from "react";
import Pozadi from "../Pozadi";
import Barva from "../Barva";
import Obrazek from "../Obrazek";
import Snih from "../Snih";
import Hudba from "../Hudba";
import Text from "../Text";
import Odesilatel from "../Odesilatel";
import Button from "../Button";

const Vytvorit = ({data}) => {
  return (
    <>
      <header className="header">
			<h1 className="header__title">Vytvořit přáníčko</h1>
		</header>


		<main className="content">

			<div className="box">
				<div className="box__inside">

					<form className="configurator">

						<Pozadi data={data.backgrounds}/>
						<Barva data={data.colors}/>
            <Obrazek data={data.covers}/>
            <Snih data={data.snow}/>
				    <Hudba data={data.music}/>
            <Text/>
            <Odesilatel/>
            <Button/>

					</form>

				</div>
			</div>

		</main>
    </>
  );
};

export default Vytvorit;
