import react from 'react';
import React from 'react';
import Menu from './menu'
import jwt_decode from "jwt-decode";
import { blogsdetailapi, createcommentapi, getcommentapi, reply } from '../api/api';
export default class blogsdetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      email: null,
      name: null,
      data: null,
      comment: "",
      postid: null,
      allpost: [],
      replycomment: "",
      showreply: null
    }
    this.submit = this.submit.bind(this);
    this.reply = this.reply.bind(this);
    this.showreplys = this.showreplys.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem('data') != null) {
      var decoded = jwt_decode(localStorage.getItem('data'));
      this.setState({ id: decoded.sub.id, email: decoded.sub.email, name: decoded.sub.name })

    }
    var currentLocation = window.location.href.split('/')[3];
    console.log(currentLocation)
    getcommentapi(currentLocation).then((res) => {
      console.log(res)
      this.setState({ allpost: res })
    })
    this.setState({ postid: currentLocation })

    blogsdetailapi(currentLocation).then((res) => {
      console.log(res)
      this.setState({ data: res })
    })
  }
  showreplys(id) {
    console.log("idid", id)
    this.setState({ showreply: id })
  }
  reply(event) {
    event.preventDefault()
    // event.preventDefault()
    // console.log(event.target.comment.value)
    // console.log(this.inputNode.value)
    this.setState((state) => ({
      allpost: state.allpost.map((items, index) => {
        console.log('items', items)
        if (items._id.$oid === event.target.id.value) {
          const data = {
            id_coment: event.target.id.value,
            username: this.state.name,
            comment: event.target.comment.value
          }
          reply(data).then((res) => {
            console.log(res)
          })

          items.reply.push({
            comment: event.target.comment.value,
            username: this.state.name
          })
          event.target.comment.value = ""
          this.setState({ replycomment: "" })
          this.setState({ showreply: null })
        }
        return items;

      })
    }))
  }

  submit() {
    console.log(this.state.data[0].date)
    console.log(this.state.id);
    const data = {
      userid: this.state.id,
      postid: this.state.postid,
      username: this.state.name,
      comment: this.state.comment,
      reply: []
    }
    console.log(this.state.allpost)
    createcommentapi(data).then((res) => {
      console.log(res)
      const datas = {
        userid: this.state.id,
        postid: this.state.postid,
        username: this.state.name,
        comment: this.state.comment,
        reply: [],
        _id: { $oid: res.id }
      }
      this.setState({ allpost: [...this.state.allpost, datas] })
      this.setState({ comment: "" })

    })
  }
  render() {

    return (
      <react.Fragment>
        <Menu></Menu>

        {this.state.data == null ? null :
          <div>
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
                      <h1>BLOG DETAILS</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* breadcrumbs area end */}
            {/* page wrapper start */}
            <div className="page_wrapper">
              {/*blog body area start*/}
              <section className="blog_details_section mb-130">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="blog_details_inner">
                        <div className="blog_details_header text-center">
                          <div className="blog__meta_date">
                            <ul className="d-flex justify-content-center">
                              <li><span>By</span> {this.state.data[0].create_by} </li>
                              <li> {this.state.data[0].date} </li>
                              <li>0 min read</li>
                            </ul>
                          </div>
                          <div className="blog_details_title">
                            <h2> {this.state.data[0].title} </h2>
                          </div>
                          <div className="widget_tags">
                            <ul>
                              <li><a href="#">{this.state.data[0].category}</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="blog_sticky_thumb">
                          <img width={1170} height={550} src={"https://drive.google.com/uc?export=download&id=" + this.state.data[0].image_id} alt="" />
                        </div>
                        <div className="blog_details_content ">
                          <div className="blog_details_content_step">
                            <h3 className="title_margin"> {this.state.data[0].title} </h3>
                            <div className="blog_details_desc">
                              <p>{this.state.data[0].content}</p>
                            </div>
                          </div>
                          <div className="post__social d-flex justify-content-between align-items-center">
                            <h3>Share this article:</h3>
                            <ul className="d-flex">
                              <li><a href="https://www.facebook.com"><i className="icofont-facebook" /></a></li>
                              <li><a href="https://www.skype.com"><i className="icofont-skype" /></a></li>
                              <li><a href="https://twitter.com"><i className="icofont-twitter" /></a></li>
                              <li><a href="https://www.linkedin.com"><i className="icofont-linkedin" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row  justify-content-end">
                    <div className="col-12">
                      <div className="blog_comment_wrapper">
                        <div className="comments_form">
                          <div className="comments_title">
                            <h2>Comment</h2>
                          </div>
                          <div className="comments_form_inner">
                            <div className="row">
                              <div className="col-lg-12 col-md-6">
                                <div className="comments_form_input">
                                  <input type="text" value={this.state.comment} onChange={(e) => this.setState({ comment: e.target.value })} />
                                </div>
                              </div>
                              {/* <div className="col-lg-6 col-md-6">
                              <div className="comments_form_input">
                                <input placeholder="Email *" type="text" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="comments_form_input">
                                <input placeholder="Address *" type="text" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="comments_form_input">
                                <input placeholder="Subject" type="text" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="comments_form_input">
                                <textarea placeholder="Message" defaultValue={""} />
                              </div>
                            </div> */}
                            </div>
                            {this.state.id == null ? <div className="comments_submit_btn text-center">
                              <a className="btn btn-link" href="/login">LOGIN<img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
                            </div> : <div className="comments_submit_btn text-center">
                              <a className="btn btn-link" onClick={this.submit}>SUBMIT NOW <img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
                            </div>}
                          </div>
                        </div>
                        <div className="comments_title">
                          <h2>COMMENTS ({this.state.allpost.length})</h2>
                        </div>
                        {this.state.allpost == null ? null : this.state.allpost.map((item, i) => <div className="comments_box">
                          <div className="comment_list d-flex">
                            <div className="comment_thumb">
                              <img width={100} height={100} src="assets/img/blog/post-comment1.webp" alt="" />
                            </div>
                            <div className="comment_content">
                              <a onClick={() => this.showreplys(item._id.$oid)}> <img width="36" height="27"
                                src="assets/img/icon/reply.webp" alt="" /> </a>
                              <h3>{item.username}</h3>
                              {/* <span> Web Designer</span> */}
                              <p>{item.comment}</p>
                            </div>
                          </div>
                          {item._id.$oid == this.state.showreply ? <form onSubmit={this.reply}>
                            <div class="row">

                              <div class="col">
                                <div className="comments_form_input">
                                  <input type="text" name="comment" />
                                  <input type="hidden" name="id" value={item._id.$oid} />
                                </div>
                              </div>
                              <div class="col">
                                <div className="comments_submit_btn ">
                                  <button className="btn btn-link" >reply <img width={10} height={5} src="assets/img/icon/arrrow-icon.webp" alt="" /> </button>
                                  {/* <a className="btn btn-link" onClick={() => this.reply(item._id.$oid, item.username)}>reply <img width={10} height={5} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a> */}
                                </div>
                              </div>

                            </div>
                          </form> : null}

                          {item.reply.length !== 0 ? item.reply.map((item, i) => <div className="container">
                            <div className="row">
                              <div className="col-lg-2">
                              </div>
                              <div className="comment_list d-flex col-lg-10">
                                <div className="comment_thumb">
                                  <img width={100} height={100} src="assets/img/blog/post-comment2.webp" alt="" />
                                </div>
                                <div className="comment_content">
                                  <h3>{item.username}</h3>
                                  {/* <span> user Interface designer</span> */}
                                  <p>{item.comment}</p>
                                </div>
                              </div>
                            </div>
                          </div>) : <div></div>}

                        </div>
                        )}


                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*blog section area end*/}
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
                          <p> © 2021 BONX Made with <i className="icofont-heart" /> by <a href="https://hasthemes.com">HasThemes</a></p>
                        </div>
                        <div className="footer_bottom_link_menu">
                          <ul className="d-flex">
                            <li><a href="about.html">Terms &amp; Condition </a></li>
                            <li><a href="about.html">Privacy Policy </a></li>
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
          </div>}
      </react.Fragment>
    )
  }
}
