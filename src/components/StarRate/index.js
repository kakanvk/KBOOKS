import "./index.css"

function StarRate(props) {
    const { number } = props

    const fillStar = <ion-icon name="star"></ion-icon>;

    const numberFill = parseInt(number);
    const numberOutline = 5 - numberFill;

    const fill = Array(numberFill).fill(fillStar)
    const noFill = Array(numberOutline).fill(fillStar)

    return (
        <div className="StarRate">
            { fill.map((item, index) => {
                return <div key={index} className="star__fill">{item}</div>
            })}
            { noFill.map((item, index) => {
                return <div key={index} className="star__noFill">{item}</div>
            })}
        </div>
    )
}

export default StarRate;