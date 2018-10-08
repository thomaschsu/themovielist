import React from "react"
import "./SearchResult.css"

const SearchResult = props => (
	<div className="movSearch animated fadeInDownBig delay-2s">
		<img src={props.image === "N/A" || !props.image ? "/nopicture.png" : props.image} alt="movie poster, description, and release date"></img>
		<a onClick={props.click} className="btn-floating btn-med waves-effect waves-light red"><i className="material-icons">ondemand_video</i></a>
		<a onClick={props.click} className="btn-floating btn-med waves-effect waves-light green"><i className="material-icons" data-imdb={props.imdb}>add</i></a>
		<div className="titleContainer">
		<span className="movTitle">{props.title} </span>
		<span className="movYear">({props.year})</span>
		</div>
	</div>
);

export default SearchResult;