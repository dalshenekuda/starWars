import './style.scss';
import React, {useEffect, useState} from 'react'
import Axios from "axios";
import {Film} from "./components/Film";
import {Details} from "./components/Details";

function App() {

    const [films, setFilms] = useState([])
    const [currentFilm, setCurrentFilm] = useState('')
    const [favoritesList, setFavoritesList] = useState(JSON.parse(localStorage.getItem('favoritesList')) ?
        JSON.parse(localStorage.getItem('favoritesList')) : [])
    const [alreadyExist, setAlreadyExist] = useState(false)

    const addToFavorites = (newFilm) => {
        let contains = false
        if (favoritesList.length > 0) {
            for (let i = 0; i < favoritesList.length; i++) {
                if (favoritesList[i].title === newFilm.title) {
                    contains = true
                    setAlreadyExist(true)
                    break;
                }
            }
        }

        if (!contains) {
            const prev = favoritesList
            prev.push(newFilm)
            setFavoritesList([...prev])
            localStorage.setItem('favoritesList', JSON.stringify(favoritesList))
        }
    }

    const openDetails = (newCurFilm) => {
        setCurrentFilm(newCurFilm)
    }

    useEffect(() => {
        setAlreadyExist(false)
    }, [currentFilm])

    useEffect(async () => {
        try {
            const {data} = await Axios.get("https://swapi.dev/api/films")
            setFilms(data.results)
        } catch (e) {
            console.log(e)
        }
    }, [])


    return (
        <div className="app">
            <h1>The Star Wars API</h1>

            <div className="content">
                <div className="content__box">
                    <div className="width40">
                        <a className="content__box__head-font">Titles</a>
                        <div className="content__box__list">
                            {films && films.map((film) =>
                                <Film key={film.title} openDetails={openDetails} film={film}/>)}
                        </div>
                    </div>

                    <div className="width60">
                        <a className="content__box__head-font">Details</a>
                        <div className="content__box__list-details">
                            {currentFilm &&
                            <Details film={currentFilm} alreadyExist={alreadyExist} addToFavorites={addToFavorites}/>}
                        </div>
                    </div>
                </div>

                <div className="favorites-box">
                    <a className="content__box__head-font">Favorites list</a>
                    <div className="content__box__list-details red">
                        {favoritesList && favoritesList.map((film) =>
                            (<Film openDetails={openDetails} film={film}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


