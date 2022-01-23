const WeatherCard = (props) => {
    const { data } = props
    if (data) {
        // console.log(data)
        return(
            <div data-testid="weatherCard" className="weather-card">
                <p>Location: {data.location.name}</p>          
                <img src={data.current.condition.icon} alt="weather icon" />   
                <p>Temp (C) : {data.current.temp_c}</p>
                <p>Temp (F) : {data.current.temp_f}</p>
                <p>Condition : {data.current.condition.text}</p>
            </div>
        )
    }
    else {
        return(
            <div data-testid="weatherCard">
                <p>Sorry there was an error!</p>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        )
    }
}

export default WeatherCard