import React from 'react'

export const Details = (props) => {
    return (
        <div className="details">
            <a className="details__font bold">{props.film.title}</a>
            <a className="details__font">{props.film.opening_crawl}</a>
            <p className="details__font"><span className="bold">Director: </span> {props.film.director}</p>
            <p className="details__font"><span className="bold">Producer: </span> {props.film.producer}</p>
            <p className="details__font"><span className="bold">Release date: </span> {props.film.release_date}</p>

            <div className="details__add-elements">
                <button onClick={() => props.addToFavorites(props.film)}>Add to favorites</button>
                {props.alreadyExist && <div><a className="details__add-elements__text">Already in favorites</a></div>}
            </div>
        </div>
    )
}