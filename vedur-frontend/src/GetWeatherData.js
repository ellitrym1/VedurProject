const fetch = require("node-fetch")

const getWeatherData = (uri) => {
    return fetch(uri)
        .then(data => {
            return data.json()
        })
        .then(json => {
            return json
        })
        .catch(err => {
            console.log(err)    
        })
}

export default getWeatherData

