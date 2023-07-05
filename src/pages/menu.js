import react from 'react';
import React from 'react';
import jwt_decode from "jwt-decode";
import { getcredit } from '../api/api';
export default class menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            email: null,
            name: null,
            role:null,
            credit: null
        }
    }
    componentDidMount() {
        if (localStorage.getItem('data') != null) {
            var decoded = jwt_decode(localStorage.getItem('data'));
            getcredit(decoded.sub.id).then((res) => {
                this.setState({ credit: res.credit })
            })
            this.setState({ id: decoded.sub.id, email: decoded.sub.email, name: decoded.sub.name,role:decoded.sub.role })

        }
    }
    logout() {
        localStorage.removeItem('data')
        window.location.href = '/login'
    }
    render() {
        return (
            <react.Fragment>
                <header className="header_section header_transparent sticky-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="main_header d-flex justify-content-between align-items-center">
                                    <div className="header_logo">
                                        <a className="sticky_none" href="/home"><img aria-label="logo" width={215} height={79} src="assets/img/logo/logo.webp" alt="" /></a>
                                    </div>
                                    {/*main menu start*/}
                                    <div className="main_menu d-none d-lg-block">
                                        <nav>
                                            <ul className="d-flex">
                                                <li><a href="/home">Home</a></li>
                                                <li><a href="/createpost">POST</a>
                                                    {/* <ul className="sub_menu">
                                                            <li><a href="match.html">Match Page</a></li>
                                                            <li><a href="match-details.html">Match Details</a></li>
                                                        </ul> */}
                                                </li>
                                                <li><a href="#">Pages</a>
                                                    <ul className="sub_menu">
                                                        <li><a href="about.html">About Us</a></li>
                                                        <li><a href="all-game.html">All Game</a></li>
                                                        <li><a href="game-details.html">Game Details</a></li>
                                                        <li><a href="faq.html">Faq Page</a></li>
                                                        <li><a href="players.html">Players</a></li>
                                                        <li><a href="player-details.html">Player Details</a></li>
                                                        <li><a href="/register">Sign Up</a></li>
                                                        <li><a href="login.html">Login</a></li>
                                                        <li><a href="404.html">Error 404</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/blogs">blog</a>
                                                    {/* <ul className="sub_menu">
                                                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                            <li><a href="blog-without-sidebar.html">Blog Without Sidebar</a></li>
                                                            <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                                                            <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                                                            <li><a href="blog-grid-without-sidebar.html">Blog Grid Without Sidebar</a></li>
                                                            <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                                                            <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                                                            <li><a href="blog-details.html">Blog Details</a></li>
                                                        </ul> */}
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/*main menu end*/}
                                    <div className="header_right_sidebar d-flex align-items-center">

                                        {this.state.id == null ? <div className="sing_up_btn">
                                            <a className="btn btn-link" href="/login">LOGIN <img width={15} height={15} src="assets/img/icon/arrrow-icon2.webp" alt="" /> </a>
                                        </div> : <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Profile
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" >name : {this.state.name} </a></li>
                                                <li><a className="dropdown-item" >role : {this.state.role} </a></li>
                                                <li><a className="dropdown-item">credit : {this.state.credit}</a></li>
                                                <li><a className="dropdown-item" onClick={this.logout} style={{ color: "red" }}>LOGOUT</a></li>
                                            </ul>
                                        </div>}

                                        <div className="canvas_open">
                                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu"><i className="icofont-navigation-menu" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </react.Fragment>
        )
    }
}
