

function Header({ setClearscreen }) {

    const clearScreen = () => {
        setClearscreen(true);
    }

    return (
        <>
            <div className="head">
                <div className="title"><h2>canvas</h2></div>
                <div className="user_option">
                    <div className="color_option">
                        <a>Black</a>
                        <a >White</a>
                    </div>
                    <div className="select">
                        <a onClick={clearScreen}>Clear Screen</a>
                        <a>Download</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header