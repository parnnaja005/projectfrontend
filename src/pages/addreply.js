import React, { useState } from "react";

const AddReply = ({ id }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reply, setReply] = useState("");
    console.log(id)
    return (
        <div>
        <div className="row">
            <div className="col-lg-12 col-md-6">
                <div className="comments_form_input">
                    <input type="text" />
                </div>
            </div>
        </div>
          <div className="comments_submit_btn text-center">
          <a className="btn btn-link">reply <img width={10} height={10} src="assets/img/icon/arrrow-icon.webp" alt="" /> </a>
        </div>
        </div>

    )
};

export default AddReply;