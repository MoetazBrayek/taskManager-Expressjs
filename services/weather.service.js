import axios from 'axios';

const url = "https://www.weatherapi.com/docs/conditions.json"

export const getWeather = async () => {
    try {

        const weather = await axios.get(url);
        return weather.data
    } catch (error) {
        res.status(400).json({error});
    }
}