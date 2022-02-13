import React from "react";
import LoginComp from "./Auth/LoginComp";
import RegisterComp from "./Auth/RegisterComp";

export default function Header(){
    return (
        <header id="header">
            <nav className="container navbar sticky-top navbar-light" id="header--nav">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <h1 className="custom-title">Farm Auction<span id="title-dot">.</span></h1>
                    </div>
                    <div className="d-flex">
                        <div className="col">
                            <LoginComp />
                            <RegisterComp />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}