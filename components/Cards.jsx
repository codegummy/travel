import React from "react";

export const Cards = ({img, country, price, destination, date, description}) => {
	return (
		<div className="container">
			<img
      src = {`./src/${img}`}
				alt=""
			/>
			<div className="info">
				<div className="first">
					<h4 className="country">{country}</h4> 
          <span className="gray">{price}</span>
				</div>

				<h1 className="destination">{destination}</h1>
				<p className="date">{date}</p>
				<p className="description">
					{description}
				</p>
			</div>
		</div>
	);
};
