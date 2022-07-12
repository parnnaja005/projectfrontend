
import react from 'react';
import React from 'react';
import Menu from './menu'
import jwt_decode from "jwt-decode";
import { blogsapi, getcredit, deletecredit, checkblog } from '../api/api';
export default class blogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      id: null,
      credit: null
    }
  }
  componentDidMount() {
    if (localStorage.getItem('data') != null) {
      var decoded = jwt_decode(localStorage.getItem('data'));
      getcredit(decoded.sub.id).then((res) => {
        this.setState({ credit: res.credit })
      })
      this.setState({ id: decoded.sub.id })

    }
    blogsapi().then((res) => {
      console.log(res)
      this.setState({ data: res })
    })
  }

  checkcredit(id, iduser, credit) {
    if (iduser === this.state.id) {
      window.location.href = `/${id}`
    } else {
      checkblog(this.state.id, id).then((res) => {
        console.log(res)
        if (res === 'yes') {
          window.location.href = `/${id}`
        }
        if (res === 'no') {
          if (credit > this.state.credit) {
            alert('not enough credit')
          } else {
            deletecredit(this.state.id, credit, id).then((res) => {
              console.log(res)
              window.location.href = `/${id}`
            })
          }
        }
      })
    }
  }
  render() {
    return (
      <react.Fragment>
        <div>
          <Menu></Menu>
          {/*offcanvas menu area start*/}
          <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasMenu">
            <div className="offcanvas-header justify-content-end">
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul className="offcanvas_main_menu">
                <li className="menu-item-has-children active">
                  <a href="index.html">Home</a>
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
                    <h1>BLOG PAGE</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* breadcrumbs area end */}
          {/* page wrapper start */}
          <div className="page_wrapper">
            {/* blog page section start */}
            <section className="blog_page_section mb-140">
              <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-4">
                    <div className="blog_sidebar blog_widget">
                      <div className="blog_widget_list mb-50">
                        <h3>Search Here</h3>
                        <div className="widget_search">
                          <form action="#">
                            <input placeholder="Search here" type="text" />
                            <button type="submit"><i className="icofont-search-1" /></button>
                          </form>
                        </div>
                      </div>
                      <div className="blog_widget_list mb-50">
                        <h3>POST CATEGORY</h3>
                        <div className="widget_category blog_widget_category">
                          <ul>
                            <li><a href="#"><i className="icofont-rounded-double-right" /> Single Player </a></li>
                            <li><a href="#"><i className="icofont-rounded-double-right" /> Legendary </a></li>
                            <li><a href="#"><i className="icofont-rounded-double-right" /> ES Sports </a></li>
                            <li><a href="#"><i className="icofont-rounded-double-right" /> Animation Game </a></li>
                            <li><a href="#"><i className="icofont-rounded-double-right" /> Offline Game </a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="blog_widget_thumb mb-50">
                        <img width={370} height={505} src="assets/img/blog/blog-sidebar-thumb.webp" alt="" />
                        <div className="widget_play_btn">
                          <a className="btn btn-link" href="all-game.html">Play Now <img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
                        </div>
                      </div>
                      <div className="blog_widget_list tags">
                        <h3>Tags</h3>
                        <div className="widget_tags">
                          <ul>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Advanture</a></li>
                            <li><a href="#"> Esports</a></li>
                            <li><a href="#">Fantasy</a></li>
                            <li><a href="#">Fortnite</a></li>
                            <li><a href="#">Matches</a></li>
                            <li><a href="#">Streamers</a></li>
                            <li><a href="#">Gamer</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="blog_page_wrapper">
                      <div className="blog_page_inner">
                        <div className="row">
                          {this.state.data == null ? null : this.state.data.map((item, i) => <div className="col-sm-6 col-12 mb-50">
                            <div className="single_blog_grid d-flex flex-column">
                              <div className="blog_thumb">
                                <a onClick={() => this.checkcredit(item._id.$oid, item.iduser, item.credit)}><img width={376} height={376} src={"https://drive.google.com/uc?export=download&id=" + item.image_id} alt="" /></a>
                              </div>
                              <div className="blog_content">
                                <div className="blog_date">
                                  <span><i className="icofont-calendar" />   {item.date}</span>
                                </div>
                                <h3><a onClick={() => this.checkcredit(item._id.$oid, item.iduser, item.credit)}>{item.title}</a></h3>
                                <a onClick={() => this.checkcredit(item._id.$oid, item.iduser, item.credit)}>READ MORE</a>
                              </div>
                            </div>
                          </div>)}
                          {/* {this.state.data.map((item,i) => <li key={i}>Test</li>)} */}

                        </div>
                      </div>
                      {/* <div className="pagination pagination_pages">
                      <ul>
                        <li className="current"><span>1</span></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li className="next"><a href="#"><i className="icofont-rounded-double-right" /></a></li>
                      </ul>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* blog page section end */}
            {/* gaming update section start */}
            <section className="gaming_update_section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="gaming_update_inner d-flex justify-content-between align-items-center" data-bgimg="assets/img/bg/gaming-update.webp">
                      <div className="gaming_update_text">
                        <h2>Connect with us <br />
                          for gamING update.</h2>
                      </div>
                      <div className="gaming_update_btn">
                        <a className="btn btn-link" href="contact.html">CONNECT NOW <img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* gaming update section end */}
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
        </div>
      </react.Fragment>
    )
  }
}
