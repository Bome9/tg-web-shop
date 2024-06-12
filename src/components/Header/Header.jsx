import React from "react"
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css'


const Header = () => {

    const { onClose, user, onToggleButton } = useTelegram();
    console.log(user)

    return (

        <div className={"header"}>
            <Button onClick={onClose}>Закрыть</Button>
            <button onClick={onToggleButton}>toggle</button>
            <div className={"username"}>
                {user?.username}
            </div>
        </div>
    )
}

export default Header;
