import Logo from "./Logo"
import Description from "./Description"
import Chat from "./Chat"

const AltView = () => {
    return(
        <div className="AltView">
            <div>
              <Logo />
              <Description />
            </div>
            <Chat />
        </div>
    )
}

export default AltView;