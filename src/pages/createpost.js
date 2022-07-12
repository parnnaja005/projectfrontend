import react from 'react';
import React from 'react';
import Menu from './menu'
import Select from 'react-select';
import { createpostapi,uploader } from '../api/api';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2'
const options = [
    { value: "MMORPG", label: "MMORPG", color: "#004e8c" },
    { value: "FPS", label: "FPS", color: "#004e8c" },
    { value: "MOBA", label: "MOBA", color: "#004e8c" },
    { value: "ROLE PLAY", label: "ROLE PLAY", color: "#004e8c" },
    { value: "DEMO", label: "DEMO", color: "#004e8c" },
    { value: "ACTION", label: "ACTION", color: "#004e8c" }
];
const styles = {
    control: (base, state) => ({
        ...base,
        background: "#140e38",
        // match with the menu
        borderRadius: "10px 10px 10px 10px",
        height: '58px',
        // Overwrittes the different states of border
        borderColor: "#281e4d",
        // Removes weird border around container
    }),
    option: (provided, state) => ({
        ...provided,
        fontWeight: state.isSelected ? "bold" : "normal",
        color: "white",
        backgroundColor: '#281e4d',
        fontSize: state.selectProps.myFontSize
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "white",
        fontSize: state.selectProps.myFontSize
    })
};

export default class createpost extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            id: null,
            email: null,
            name: null,
            title: null,
            credit: null,
            details: null,
            selectedOption: null,
            selectedFile: null
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        if (localStorage.getItem('data') != null) {
            var decoded = jwt_decode(localStorage.getItem('data'));
            this.setState({ id: decoded.sub.id, email: decoded.sub.email, name: decoded.sub.name })

        }
    }
    submit(imageid) {
        console.log(this.state.title)
        console.log(this.state.selectedOption.value)
        console.log(this.state.credit)
        console.log(this.state.details)

        const data = {
            id: this.state.id,
            title: this.state.title,
            category: this.state.selectedOption.value,
            credit: this.state.credit,
            content: this.state.details,
            create_by: this.state.name,
            image_id:imageid

        }
        createpostapi(data).then((res) => {
            console.log(res)
            if (res.status == 'post success') {
                console.log("kkkkkkkkk")
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                }).then(console.log('uuuuuu'))
            }
        })
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }
    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });

    };

    // On file upload (click the upload button)
    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
        uploader(formData).then((res)=>{
            console.log("res",res.image_id)
            this.submit(res.image_id)
        })
    };
    render() {
        const { selectedOption } = this.state;
        return (
            <react.Fragment>
                <div>
                    <Menu></Menu>
                    {/*header area end*/}
                    {/* breadcrumbs area start */}
                    <div className="breadcrumbs_aree breadcrumbs_bg mb-140" data-bgimg="assets/img/bg/breadcrumbs-bg.webp">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="breadcrumbs_text text-center">
                                        <h1>สร้างกระทู้</h1>
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
                                        <div className="blog_comment_wrapper">
                                            <div className="comments_form">
                                                <div className="comments_title">
                                                    <h2>สร้างกระทู้</h2>
                                                </div>
                                                <div className="comments_form_inner">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <h4>ชื่อกระทู้</h4>
                                                            <div className="comments_form_input">
                                                                <input onChange={(e) => this.setState({ title: e.target.value })} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <h4>เลือกหมวดหมู่</h4>

                                                            <div className="gaming_form_list">
                                                                <Select
                                                                    value={selectedOption}
                                                                    onChange={this.handleChange}
                                                                    options={options}
                                                                    menuColor='red'
                                                                    styles={styles}
                                                                />
                                                            </div>

                                                        </div>
                                                        {/* <div class="col-lg-6 col-md-6">
                                                <div class="comments_form_input">
                                                    <input placeholder="Address *" type="text">
                                                </div>
                                            </div> */}
                                                        <div className="col-lg-6 col-md-6">
                                                            <h4>เครดิต</h4>
                                                            <div className="comments_form_input">
                                                                <input type="text" onChange={(e) => this.setState({ credit: e.target.value })} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <h4>เลือกรูปภาพ</h4>
                                                            <div>
                                                                <input className="form-control" type="file" id="formFile"  onChange={this.onFileChange}  />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <h4>เนื้อหา</h4>
                                                            <div className="comments_form_input">
                                                                <textarea type="text" onChange={(e) => this.setState({ details: e.target.value })} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {this.state.id == null ? <div className="comments_submit_btn text-center">
                                                        <a className="btn btn-link" href="/login">LOGIN<img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
                                                    </div> : <div className="comments_submit_btn text-center">
                                                        <a className="btn btn-link" onClick={this.onFileUpload}>สร้าง<img width={20} height={20} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
                                                    </div>}
                                                </div>
                                            </div>
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
                </div>
            </react.Fragment>
        )
    }
}
