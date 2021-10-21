import Axios from 'axios';


export const getFilms = () => async () => {
    try {
        const {data} = await Axios.get("https://swapi.dev/api/films")

        console.log(JSON.parse(data.results))
        // console.log('dw')
        const a =JSON.parse(data.results)

        const c=[1,2,2,]

    } catch (e) {
        return [0]
    }
};
