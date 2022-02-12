import Login from "./Auth/Login";
import Register from "./Auth/Register";

function Header(){
    return (
        <header className="header">
            <div className="header-item-holder">
                <h1>Farm Auction</h1>
                <div className="auth-buttons">
                    <Login/>
                    <Register/>
                </div>
            </div>
        </header>
    );
}

export default Header;