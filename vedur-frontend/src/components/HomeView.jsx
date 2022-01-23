import Logo from "./Logo"
import Description from "./Description"

const HomeView = () => {
    return (
        <div className="HomeView">
            <Logo />
            <Description />
            <button onClick={this.changeView}>Talk to me</button>
        </div>
    )
}

export default HomeView;