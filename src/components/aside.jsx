import "./components.css"
import MyAvatar from "../assets/my-avatar.png"

import ASideInfo from "./aside/asideInfo";
import { useState } from "react";

const Aside = () => {
    const [myInfoOpen, setMyInfoOpen] = useState(false)
    return <>
        <aside>
            <div className="asideM">
                <div className="asideImg">
                <img src={MyAvatar} alt="MyAvatar" />
            </div>
           <div className="name">
             <h1>Ismoil Dev {'</>'}</h1>
            <span>Web Developer</span>
           </div>
           <div className="asideBtn">
            <button onClick={() => setMyInfoOpen(!myInfoOpen)}>∨</button>
           </div>
            </div>
        
            <div className={`asideInfo ${myInfoOpen ? 'open' : ""}`}>
                <ASideInfo />
            </div>
           
        </aside>
    </>
}

export default Aside;