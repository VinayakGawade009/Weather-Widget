import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    const INIT_URL = "https://media.istockphoto.com/id/2175083463/photo/new-delhi-delhi-india-fire-truck-spraying-water-over-delhi-streets-amid-pollution-emergency.webp?a=1&b=1&s=612x612&w=0&k=20&c=M-M-0G2h5claKSoJDulPHau74xPvqheMVp7Xg0WjaZ8=";

    const HOT_URL = "https://plus.unsplash.com/premium_photo-1670185510638-6427989f7efa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwc3VtbWVyJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://media.istockphoto.com/id/960213848/photo/its-cold-out-here-i-have-to-cover-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=ql-lZmTkEFmOwUNrp-twoVAgij5XBudNPeTN7_4SUYs=";
    const RAIN_URL = "https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";

    

    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo = {info.weather}</h1> */}

            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp; {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>Temparature = {info.temp}&deg;C</p>
                            <p>Min Temperature = {info.tempMin}&deg;C</p>
                            <p>Max Temperature = {info.tempMax}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}