import './style.scss';
// import {getFilms} from './functions/requests'
import React, {useEffect, useState} from 'react'
import Axios from "axios";
import {Film} from "./components/Film";
import {Details} from "./components/Details";

function App() {

    const [films, setFilms] = useState([])
    const [currentFilm, setCurrentFilm] = useState(0)

    // const [forwardList, setForwardList] = useState(JSON.parse(localStorage.getItem('forwardList'))?
    //     JSON.parse(localStorage.getItem('forwardList')):[])

    // const addToForwards = (newEl) => {
    //     setForwardList([...forwardList,newEl])
    //     // console.log(forwardList)
    //     localStorage.setItem('forwardList', JSON.stringify(forwardList));
    // }
    const openDetails = (newCurFilm) => {
        setCurrentFilm(newCurFilm)
    }

    useEffect(async () => {
        try {
            const {data} = await Axios.get("https://swapi.dev/api/films")
            setFilms(data.results)
            console.log('few')
        } catch (e) {
            console.log(e)
        }
    }, [])


    return (
        <div className="app">
            <h1>The Star Wars API</h1>

            <div className="content">
                <div className="content__list">
                    {/* <a className="content__list__head-font">Titles</a> */}

                    <div className="content__list__films">
                        {films ?
                            (films.map((film) => (
                                    <Film key={film.title} openDetails={openDetails} film={film}/>
                                )
                            )) :
                            (<div></div>)}
                    </div>

                    <div className="content__list__details">
                        {currentFilm ?
                            (<Details film={currentFilm}/>)
                            :
                            (<div></div>)}

                    </div>

                </div>
                <div className="content__details">

                </div>
            </div>
        </div>
    );
}

export default App;


