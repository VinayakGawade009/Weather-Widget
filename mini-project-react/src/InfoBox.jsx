import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox() {
    const INIT_URL = "https://media.istockphoto.com/id/2175083463/photo/new-delhi-delhi-india-fire-truck-spraying-water-over-delhi-streets-amid-pollution-emergency.webp?a=1&b=1&s=612x612&w=0&k=20&c=M-M-0G2h5claKSoJDulPHau74xPvqheMVp7Xg0WjaZ8=";

    let info = {
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    }

    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo = {info.weather}</h1> */}
            
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p>Temparature = {info.temp}&deg;C</p>
                        <p>Min Temperature = {info.tempMin}&deg;C</p>
                        <p>Max Temperature = {info.tempMax}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>The weather can be described as <i>{info.weather}</i> feels like = {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}