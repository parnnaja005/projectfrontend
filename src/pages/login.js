import react from 'react';
import React from 'react';
import Menu from './menu';
import { logins } from '../api/api';
export default class login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        email: null,
        password: null,
    }
    this.submit = this.submit.bind(this);
}
submit() {

    console.log(this.state.email)
    console.log(this.state.password)
    if(this.state.email!=null&&this.state.password!=null){
      console.log("dasdf")
      const data={
        email:this.state.email,
        password:this.state.password,
      }
      logins(data).then((res)=>{
        console.log(res)
    if(res.status=='singin success'){
      localStorage.setItem('data',res.token)
      window.location.href='/home'
    }
      })
    }
}
    render() { 
  return (
      <react.Fragment>
          <div>
        {/*header area start*/}
        <Menu></Menu>
        {/*header area end*/}
        {/*offcanvas menu area start*/}
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasMenu">
          <div className="offcanvas-header justify-content-end">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="offcanvas_main_menu">
              <li className="menu-item-has-children active">
                <a href="/home">Home</a>
              </li>
              <li className="menu-item-has-children"><a href="#">Match</a>
                <ul className="sub-menu">
                  <li><a href="match.html">Match Page</a></li>
                  <li><a href="match-details.html">Match Details</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children"><a href="#">Pages</a>
                <ul className="sub-menu">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="all-game.html">All Game</a></li>
                  <li><a href="game-details.html">Game Details</a></li>
                  <li><a href="faq.html">Faq Page</a></li>
                  <li><a href="players.html">Players</a></li>
                  <li><a href="player-details.html">Player Details</a></li>
                  <li><a href="registration.html">Sign Up</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="404.html">Error 404</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">blog</a>
                <ul className="sub-menu">
                  <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                  <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                  <li><a href="blog-without-sidebar.html">Blog Without Sidebar</a></li>
                  <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                  <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                  <li><a href="blog-grid-without-sidebar.html">Blog Grid Without Sidebar</a></li>
                  <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                  <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children"><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
        {/*offcanvas menu area end*/}
        {/* breadcrumbs area start */}
        <div className="breadcrumbs_aree breadcrumbs_bg mb-140" data-bgimg="assets/img/bg/breadcrumbs-bg.webp">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs_text text-center">
                  <h1>Login</h1>
                  <ul className="d-flex justify-content-center">
                    <li><a href="/home">Home </a></li>
                    <li> <span>//</span></li>
                    <li>  PAGES</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumbs area end */}
        {/* page wrapper start */}
        <div className="page_wrapper">
          {/* contact section start */}
          <section className="contact_page_section mb-140">
            <div className="container">
              <div className="row justify-content-between align-items-center mb-n50">
                <div className="col-lg-6 col-md-8 col-12 mx-auto mb-50">
                  <img width={550} height={550} src="assets/img/others/valorant_sage_light.jpg" alt="" />
                </div>
                <div className="col-lg-5 col-md-8 col-12 mx-auto mb-50">
                  <div className="section_title text-center mb-60">
                    <h2>Login</h2>
                  </div>
                  <div className="form_input">
                    <input name="login_email" placeholder="Email" type="email" onChange={(e) => this.setState({ email: e.target.value })} />
                  </div>
                  <div className="form_input">
                    <input name="login_password" placeholder="Password" type="password" onChange={(e) => this.setState({ password: e.target.value })} />
                  </div>
                  <div className="form_input_btn text-center mb-40">
                    <button type="submit" className="btn btn-link" onClick={this.submit}>Login<img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /></button>
                  </div>
                  <p className="text-center">Don't have any account, <a href="/register">Signup here</a></p>
                </div>
              </div>
            </div>
          </section>
          {/* contact section end */}
        </div>
        {/* page wrapper end */}
        {/*footer area start*/}
        <footer className="footer_widgets">
          <div className="main_footer">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="main_footer_inner d-flex">
                    <div className="footer_widget_list">
                      <div className="footer_logo">
                        <a href="#"><img aria-label="logo" width={215} height={79} src="assets/img/logo/logo.webp" alt="" /></a>
                      </div>
                      <div className="footer_contact_desc">
                        <p>It long estabhed fact that reader
                          will ditracted the readable content
                          looking using readable.</p>
                      </div>
                      <div className="footer_social">
                        <ul className="d-flex">
                          <li><a aria-label="facebook" className="facebook" href="https://www.facebook.com"><i className="icofont-facebook" /></a></li>
                          <li><a aria-label="dribble" className="dribbble" href="https://dribbble.com"><i className="icofont-dribbble" /></a></li>
                          <li><a aria-label="youtube" className="youtube" href="https://www.youtube.com"><i className="icofont-youtube-play" /></a></li>
                          <li><a aria-label="twitter" className="twitter" href="https://twitter.com"><i className="icofont-twitter" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer_widget_list contact">
                      <h3>Contact</h3>
                      <div className="footer_contact_info">
                        <div className="footer_contact_info_list">
                          <span>Location:</span>
                          <p>136 Harding Ave
                            Wheeling, West Virginia</p>
                        </div>
                        <div className="footer_contact_info_list">
                          <span>Phone:</span>
                          <p><a href="#">00 (62) 632 867 4497</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="footer_widget_list">
                      <h3>today’s winners</h3>
                      <div className="footer_winners_gallery">
                        <div className="footer_winners_list d-flex">
                          <div className="footer_winners_thumb">
                            <a href="game-details.html"><img aria-label="game-team" width={75} height={75} src="assets/img/others/winners1.webp" alt="" /></a>
                          </div>
                          <div className="footer_winners_thumb">
                            <a href="game-details.html"><img aria-label="game-team" width={75} height={75} src="assets/img/others/winners2.webp" alt="" /></a>
                          </div>
                          <div className="footer_winners_thumb">
                            <a href="game-details.html"><img aria-label="game-team" width={75} height={75} src="assets/img/others/winners3.webp" alt="" /></a>
                          </div>
                        </div>
                        <div className="footer_winners_list d-flex">
                          <div className="footer_winners_thumb">
                            <a href="game-details.html"><img aria-label="game-team" width={75} height={75} src="assets/img/others/winners4.webp" alt="" /></a>
                          </div>
                          <div className="footer_winners_thumb">
                            <a href="game-details.html"><img aria-label="game-team" width={75} height={75} src="assets/img/others/winners5.webp" alt="" /></a>
                          </div>
                          <div className="footer_winners_thumb">
                            <a href="game-details.html"><img aria-label="game-team" width={75} height={75} src="assets/img/others/winners6.webp" alt="" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="footer_widget_list footer_list_menu">
                      <h3>Content</h3>
                      <div className="footer_menu">
                        <ul>
                          <li><a href="about.html"> Copywriting</a></li>
                          <li><a href="about.html">Social Media</a></li>
                          <li><a href="about.html">Interactive Media</a></li>
                          <li><a href="about.html">Motion Design</a></li>
                          <li><a href="about.html">Illustration</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="footer_bottom_inner d-flex justify-content-between">
                    <div className="copyright_right">
                      <p> © 2021  BONX  Made with  <i className="icofont-heart" />  by <a href="https://hasthemes.com">HasThemes</a></p>
                    </div>
                    <div className="footer_bottom_link_menu">
                      <ul className="d-flex">
                        <li><a href="about.html">Terms &amp; Condition</a></li>
                        <li><a href="about.html">Privacy Policy</a></li>
                      </ul>
                    </div>
                    <div className="scroll__top_icon">
                      <a id="scroll-top" href="#"><img aria-label="scroll-top" width={46} height={40} src="assets/img/icon/scroll-top.webp" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*footer area end*/}
        {/* JS
============================================ */}
        {/*modernizr min js here*/}
        {/* Vendor JS */}
        {/* Main JS */}
      </div>
      </react.Fragment>
  )
}
}