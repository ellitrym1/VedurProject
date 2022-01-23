import apparels from "../utils/temp-apparels-mapper"

const Apparel = (props) => {
    const { temp, condition } = props

    let tempRange = Object.keys(apparels).find((key) => {
        let range = key.split(" - ")
        return temp >= range[0] && temp < range[1]
    })
    console.log(apparels[tempRange][condition.toLowerCase()])
    return (
        <div className="apparel">
            <p>{apparels[tempRange][condition.toLowerCase()]}</p>
        </div>
    ) 
}

export default Apparel