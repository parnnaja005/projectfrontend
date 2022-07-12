import react from 'react';
import React from 'react';
import Menu from './menu';
export default class home extends React.Component {
      submit(){
          console.log(this.state.id)
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
                    {/* page wrapper start */}
                    <div className="page_wrapper">
                        {/*slide banner section start*/}
                        <section className="hero_banner_section d-flex align-items-center mb-130" data-bgimg="assets/img/bg/ekko.jpg">
                            <div className="container">
                                <div className="hero_banner_inner">
                                    <div className="row align-items-center">
                                        <div className="col-12">
                                            <div className="hero_content">
                                                <h1 className="wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">Best Game <br />
                                                    Playing Today.</h1>
                                                <p className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1.2s"></p>
                                                <a className="btn btn-link wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1.3s"onClick={this.submit} >Read Now! <img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero_position_img">
                                <img width={926} height={772} src="assets/img/bg/viego-lol.jpg" alt="" />
                            </div>
                        </section>
                        {/*slider area end*/}
                        {/* gaming  world section start */}
                        <section className="gaming_world_section mb-140">
                            <div className="container">
                                <div className="section_title text-center wow fadeInUp mb-60" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                    <h2>yOU ARE MOST WELCOME <br />
                                        IN GAMING WORLD.</h2>
                                </div>
                                <div className="gaming_world_inner">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-6">
                                            <div className="single_gaming_world wow fadeInUp" data-bgimg="assets/img/others/gaming-world-bg1.webp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                                <div className="gaming_world_thumb">
                                                    <img width={141} height={157} src="assets/img/others/gaming-world1.webp" alt="" />
                                                </div>
                                                <div className="gaming_world_text">
                                                    <h3>Live Streaming</h3>
                                                    <p>When unknown printer took
                                                        type and scrambled it to make type
                                                        specimen book centuries,</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6">
                                            <div className="single_gaming_world wow fadeInUp" data-bgimg="assets/img/others/gaming-world-bg2.webp" data-wow-delay="0.2s" data-wow-duration="1.2s">
                                                <div className="gaming_world_thumb">
                                                    <img width={156} height={157} src="assets/img/others/gaming-world2.webp" alt="" />
                                                </div>
                                                <div className="gaming_world_text">
                                                    <h3>Game News</h3>
                                                    <p>When unknown printer took
                                                        type and scrambled it to make type
                                                        specimen book centuries,</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6">
                                            <div className="single_gaming_world wow fadeInUp" data-bgimg="assets/img/others/gaming-world-bg3.webp" data-wow-delay="0.3s" data-wow-duration="1.3s">
                                                <div className="gaming_world_thumb">
                                                    <img width={151} height={156} src="assets/img/others/gaming-world3.webp" alt="" />
                                                </div>
                                                <div className="gaming_world_text">
                                                    <h3>Game Tournaments</h3>
                                                    <p>When unknown printer took
                                                        type and scrambled it to make type
                                                        specimen book centuries,</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* gaming  world section end */}
                        {/* gaming video section start */}
                        <section className="gaming_video_section mb-118 wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="gaming_video_inner slick_navigation slick__activation" data-slick="{
                            &quot;slidesToShow&quot;: 1,
                            &quot;slidesToScroll&quot;: 1,
                            &quot;arrows&quot;: true,
                            &quot;dots&quot;: false,
                            &quot;autoplay&quot;: false,
                            &quot;speed&quot;: 300,
                            &quot;infinite&quot;: true ,  
                            &quot;responsive&quot;:[ 
                            {&quot;breakpoint&quot;:500, &quot;settings&quot;: { &quot;slidesToShow&quot;: 1 } }  
                            ]                                                     
                        }">
                                            <div className="gaming_video_thumb">
                                                <img width={1170} height={540} src="assets/img/bg/gaming-bg1.webp" alt="" />
                                                <div className="gaming_video_paly_icon">
                                                    <a className="video_popup" href="https://www.youtube.com/watch?v=eS9Qm4AOOBY"><img width={134} height={140} src="assets/img/others/play-btn.webp" alt="" /></a>
                                                </div>
                                                <div className="live_streaming_text">
                                                    <h3>Watch Live Streaming</h3>
                                                </div>
                                            </div>
                                            <div className="gaming_video_thumb">
                                                <img width={1170} height={540} src="assets/img/bg/gaming-bg1.webp" alt="" />
                                                <div className="gaming_video_paly_icon">
                                                    <a className="video_popup" href="https://www.youtube.com/watch?v=eS9Qm4AOOBY"><img width={134} height={140} src="assets/img/others/play-btn.webp" alt="" /></a>
                                                </div>
                                                <div className="live_streaming_text">
                                                    <h3>Watch Live Streaming</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* gaming video section end */}
                        {/* upcoming gaming section start */}
                        <section className="upcoming_gaming_section mb-125">
                            <div className="container">
                                <div className="section_title text-center wow fadeInUp mb-60" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                    <h2>Upcoming Match</h2>
                                    <p>When unknown printer took type and scrambled it to make <br />
                                        type specimen book centuries,</p>
                                </div>
                                <div className="upcoming_gaming_inner">
                                    <div className="upcoming_gaming_list wow fadeInUp d-flex justify-content-between align-items-center mb-30" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                        <div className="upcoming_gaming_text">
                                            <p>20 August 2021  -  09:00 PM</p>
                                            <h3><a href="match-details.html">Roar Spring Game 2021</a></h3>
                                            <span>08 Teams Registered</span>
                                        </div>
                                        <div className="upcoming_play_video text-center">
                                            <a className="video_popup" href="https://www.youtube.com/watch?v=eS9Qm4AOOBY"><img width={53} height={44} src="assets/img/others/play-btn2.webp" alt="" /></a> <br />
                                            <span>Live Stream</span>
                                        </div>
                                        <div className="upcoming_gaming_thumb d-flex align-items-center">
                                            <div className="single_upcoming_thumb">
                                                <img width={97} height={119} src="assets/img/others/upcoming-game-thumb1.webp" alt="" />
                                            </div>
                                            <div className="single_upcoming_thumb">
                                                <img width={87} height={87} src="assets/img/others/game-vs1.webp" alt="" />
                                            </div>
                                            <div className="single_upcoming_thumb">
                                                <img width={93} height={120} src="assets/img/others/upcoming-game-thumb2.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="upcoming_gaming_list wow fadeInUp d-flex justify-content-between align-items-center mb-30" data-wow-delay="0.2s" data-wow-duration="1.2s">
                                        <div className="upcoming_gaming_text">
                                            <p>20 August 2021  -  09:00 PM</p>
                                            <h3><a href="match-details.html">Skrit tournament 2021</a></h3>
                                            <span>08 Teams Registered</span>
                                        </div>
                                        <div className="upcoming_play_video text-center">
                                            <a className="video_popup" href="https://www.youtube.com/watch?v=eS9Qm4AOOBY"><img width={53} height={44} src="assets/img/others/play-btn2.webp" alt="" /></a> <br />
                                            <span>Youtube Stream</span>
                                        </div>
                                        <div className="upcoming_gaming_thumb d-flex align-items-center">
                                            <div className="single_upcoming_thumb">
                                                <img width={102} height={119} src="assets/img/others/upcoming-game-thumb3.webp" alt="" />
                                            </div>
                                            <div className="single_upcoming_thumb">
                                                <img width={87} height={87} src="assets/img/others/game-vs2.webp" alt="" />
                                            </div>
                                            <div className="single_upcoming_thumb">
                                                <img width={105} height={119} src="assets/img/others/upcoming-game-thumb4.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="upcoming_gaming_list wow fadeInUp d-flex justify-content-between align-items-center" data-wow-delay="0.3s" data-wow-duration="1.3s">
                                        <div className="upcoming_gaming_text">
                                            <p>20 August 2021  -  09:00 PM</p>
                                            <h3><a href="match-details.html">Ninja 360 Game 2021</a></h3>
                                            <span>08 Teams Registered</span>
                                        </div>
                                        <div className="upcoming_play_video text-center">
                                            <a className="video_popup" href="https://www.youtube.com/watch?v=eS9Qm4AOOBY"><img width={53} height={44} src="assets/img/others/play-btn2.webp" alt="" /></a> <br />
                                            <span>Twitch Stream</span>
                                        </div>
                                        <div className="upcoming_gaming_thumb d-flex align-items-center">
                                            <div className="single_upcoming_thumb">
                                                <img width={118} height={119} src="assets/img/others/upcoming-game-thumb5.webp" alt="" />
                                            </div>
                                            <div className="single_upcoming_thumb">
                                                <img width={87} height={87} src="assets/img/others/game-vs3.webp" alt="" />
                                            </div>
                                            <div className="single_upcoming_thumb">
                                                <img width={100} height={119} src="assets/img/others/upcoming-game-thumb6.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="others_match_btn text-center">
                                    <a className="btn btn-link" href="match.html">Other’s Match </a>
                                </div>
                            </div>
                        </section>
                        {/* upcoming gaming section end */}
                        {/* counterup section start */}
                        <section className="counterup_section mb-115 wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="counterup_inner d-flex justify-content-center">
                                            <div className="single_counterup one">
                                                <div className="counterup_text">
                                                    <h2 className="counterup color1">8697</h2>
                                                    <span>TWITCH STREAMS</span>
                                                </div>
                                            </div>
                                            <div className="single_counterup two">
                                                <div className="counterup_text">
                                                    <h2 className="counterup color2">428</h2>
                                                    <span>TOTAL GAMES</span>
                                                </div>
                                            </div>
                                            <div className="single_counterup three">
                                                <div className="counterup_text">
                                                    <h2 className="counterup color3">5367</h2>
                                                    <span>YOUTUBE STREAMS</span>
                                                </div>
                                            </div>
                                            <div className="single_counterup four">
                                                <div className="counterup_text">
                                                    <h2 className="counterup color4">249</h2>
                                                    <span>PRO TEAM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* counterup section end */}
                        {/* popular gaming  section start */}
                        <section className="popular_gaming_section mb-140">
                            <div className="container">
                                <div className="section_title text-center wow fadeInUp mb-60" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                    <h2>Popular GAME</h2>
                                    <p>When unknown printer took type and scrambled it to make <br />
                                        type specimen book centuries,</p>
                                </div>
                                <div className="popular_gaming_inner wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1.2s">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="popular_gaming_thumb">
                                                <a href="#"><img width={570} height={330} src="assets/img/others/popular-game-thumb1.webp" alt="" /></a>
                                                <div className="gaming_details_btn">
                                                    <a className="btn btn-link" href="game-details.html">Game Details <img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="popular_gaming_thumb">
                                                <a href="#"><img width={570} height={330} src="assets/img/others/popular-game-thumb2.webp" alt="" /></a>
                                                <div className="gaming_details_btn">
                                                    <a className="btn btn-link" href="game-details.html">Game Details <img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="popular_gaming_thumb">
                                                <a href="#"><img width={570} height={330} src="assets/img/others/popular-game-thumb3.webp" alt="" /></a>
                                                <div className="gaming_details_btn">
                                                    <a className="btn btn-link" href="game-details.html">Game Details <img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="popular_gaming_thumb">
                                                <a href="#"><img width={570} height={330} src="assets/img/others/popular-game-thumb4.webp" alt="" /></a>
                                                <div className="gaming_details_btn">
                                                    <a className="btn btn-link" href="game-details.html">Game Details <img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* popular gaming section end */}
                        {/* testimonial section start */}
                        <section className="testimonial_section wow fadeInUp" data-bgimg="assets/img/others/testimonial-bg-fullwidth.webp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section_title mb-60">
                                            <h2>What people’s say <br />
                                                ABOUT <span>game studio.</span></h2>
                                        </div>
                                        <div className="testimonial_inner slick__activation slick_navigation" data-slick="{
                            &quot;slidesToShow&quot;: 1,
                            &quot;slidesToScroll&quot;: 1,
                            &quot;arrows&quot;: true,
                            &quot;dots&quot;: false,
                            &quot;autoplay&quot;: false,
                            &quot;speed&quot;: 300,
                            &quot;infinite&quot;: true ,  
                            &quot;responsive&quot;:[  
                            {&quot;breakpoint&quot;:576, &quot;settings&quot;: { &quot;slidesToShow&quot;: 1 } }  
                            ]                                                     
                        }" data-bgimg="assets/img/others/testimonial-bg.webp">
                                            <div className="testimonial_list d-flex align-items-center">
                                                <div className="testimonial_thumb">
                                                    <img width={270} height={319} src="assets/img/others/testimonial-thumb.webp" alt="" />
                                                </div>
                                                <div className="testimonial_content">
                                                    <div className="testimonial_desc">
                                                        <p>It is a long established fact that a reader will be distracted the
                                                            readable content of page when looking at it layout the point using
                                                            lorem Ipsum is that it has a more-or-less normal distribution lette
                                                            as opposed to using making it look like readable english,
                                                            many desktop publishing packages and web page now editors.</p>
                                                    </div>
                                                    <div className="testimonial_author">
                                                        <h3>Randolph Frazier</h3>
                                                        <span>Top Rated Gamer</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial_list d-flex align-items-center">
                                                <div className="testimonial_thumb">
                                                    <img width={270} height={319} src="assets/img/others/testimonial-thumb.webp" alt="" />
                                                </div>
                                                <div className="testimonial_content">
                                                    <div className="testimonial_desc">
                                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quos consectetur amet blanditiis, facilis esse illo unde saepe facere dolore porro asperiores ducimus, inventore voluptate doloribus odio fugit magnam voluptatum perferendis? Sit quisquam labore adipisci doloremque! Aperiam voluptate modi quasi are nobis.</p>
                                                    </div>
                                                    <div className="testimonial_author">
                                                        <h3>Roar Spring</h3>
                                                        <span>Top Rated Gamer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* testimonial section end */}
                        {/* blog section start */}
                        <section className="blog_section mb-90">
                            <div className="container">
                                <div className="section_title text-center wow fadeInUp mb-70" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                    <h2>Latest Blog</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna</p>
                                </div>
                                <div className="row blog_inner">
                                    <div className="col-lg-6">
                                        <div className="single_blog d-flex align-items-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                            <div className="blog_thumb">
                                                <a href="blog-details.html"><img width={200} height={200} src="assets/img/blog/blog1.webp" alt="" /></a>
                                            </div>
                                            <div className="blog_content">
                                                <div className="blog_date">
                                                    <span><i className="icofont-calendar" />  20 January 2021</span>
                                                </div>
                                                <h3><a href="blog-details.html">if you have seen Apple's
                                                    recent jabs.</a></h3>
                                                <a href="blog-details.html">READ MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single_blog d-flex align-items-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                            <div className="blog_thumb">
                                                <a href="blog-details.html"><img width={200} height={200} src="assets/img/blog/blog2.webp" alt="" /></a>
                                            </div>
                                            <div className="blog_content">
                                                <div className="blog_date">
                                                    <span><i className="icofont-calendar" />  20 January 2021</span>
                                                </div>
                                                <h3><a href="blog-details.html">Lorem ipsum dolor sit amet, adipisicing elit.</a></h3>
                                                <a href="blog-details.html">READ MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single_blog d-flex align-items-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                            <div className="blog_thumb">
                                                <a href="blog-details.html"><img width={200} height={200} src="assets/img/blog/blog3.webp" alt="" /></a>
                                            </div>
                                            <div className="blog_content">
                                                <div className="blog_date">
                                                    <span><i className="icofont-calendar" />  20 January 2021</span>
                                                </div>
                                                <h3><a href="blog-details.html"> Perferendis hic sint are rem, incidunt vitae.</a></h3>
                                                <a href="blog-details.html">READ MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single_blog d-flex align-items-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                            <div className="blog_thumb">
                                                <a href="blog-details.html"><img width={200} height={200} src="assets/img/blog/blog4.webp" alt="" /></a>
                                            </div>
                                            <div className="blog_content">
                                                <div className="blog_date">
                                                    <span><i className="icofont-calendar" />  20 January 2021</span>
                                                </div>
                                                <h3><a href="blog-details.html">if you have seen Apple's
                                                    recent jabs.</a></h3>
                                                <a href="blog-details.html">READ MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* blog section end */}
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
