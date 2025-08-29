import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    })

    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox/>
            <InfoBox/>
        </div>
    )
}