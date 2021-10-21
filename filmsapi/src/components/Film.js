import React from 'react'
export const Film = (props) => {
    return (

        <div className="film">
            <a className="film__font" onClick={()=>props.openDetails(props.film)}>{props.film.title}</a>
        </div>
    )
}