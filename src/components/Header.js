import { useState } from "react";


function Header({ setClearscreen, dark, setDark,setDownload  }) {

    const [themeOption, setThemeOption] = useState("Dark Theme")

    const clearScreen = () => {
        setClearscreen(true);
    }

    const changeTheme = () => {
        if (dark) {
            setDark(false)
            setThemeOption("Dark Theme")
            return
        }
        setDark(true)
        setThemeOption("Light Theme")
    }

    const download = () => {
        setDownload(true);
    }

    return (
        <>
            <div className="head">
                <div className="title"><h2>canvas</h2></div>
                <div className="user_option">
                    <div className="color_option">
                        <a onClick={changeTheme}>{themeOption}</a>
                    </div>
                    <div className="select">
                        <a onClick={clearScreen}>Clear Screen</a>
                        <a onClick={download}>Download</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
