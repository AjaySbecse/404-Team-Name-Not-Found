import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LoginComp from "./Auth/LoginComp";
import RegisterComp from "./Auth/RegisterComp";

export default function Header(){
    const {currentUser,logout} = useContext(AuthContext)
    return (
        <header id="header">
            <nav className="container navbar sticky-top navbar-light" id="header--nav">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <h1 className="custom-title">Farm Auction<span id="title-dot">.</span></h1>
                    </div>
                    <div className="d-flex">
                        <div className="col">
                            {
                                (currentUser) ? 
                                <>
                                    <div className="btn  mx-2" id="user-name">{currentUser.email}</div>
                                    <div className="btn mx-2" id="logout-btn" onClick={()=>{logout()}}>Logout</div>
                                </>
                                :
                                <>
                                    <LoginComp />
                                    <RegisterComp />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}