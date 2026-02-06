import "./components.css"
import MyAvatar from "../assets/my-avatar.png"

import ASideInfo from "./aside/asideInfo";

const Aside = () => {
    return <>
        <aside>
            <div className="asideImg">
                <img src={MyAvatar} alt="MyAvatar" />
            </div>
            <h1>Ro'zmetov Ismoil</h1>
            <span>Web Developer</span>

            <ASideInfo />
        </aside>
    </>
}

export default Aside;