import React from "react";

//presentational component recieve data via prop
export default function FilmPresentation({films}) {
    console.log(films);
    return (
        <div className="container">
            {films.map((film)=>(
                <div className="column">
                    <div className="card">
                    <img src={film.img}/>
                    <h3>{film.filmName}</h3>
                    <p className="year">{film.year}</p>
                    <p className="nation">{film.nation}</p>
                    <p><button>Detail</button></p>
                    </div>
                </div>
            ))}
        </div>
    )//reponsible for rendering ui based on recieved data(prop)
}
//doesnt manage state or interact directly with data source(just recieved via prop)