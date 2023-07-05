import axios from "axios";
const apiHost = "http://127.0.0.1:5000";

// const apiHost = "server.easypayeasywash.tk";
export const registers = (data) => {
    return axios
        .post(apiHost + `/signup`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};
export const logins = (data) => {
    return axios
        .post(apiHost + `/signin`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const createpostapi = (data) => {
    return axios
        .post(apiHost + `/postcontent`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};


export const blogsapi = (userid) => {
    return axios
        .get(apiHost + `/blogsall/`+userid)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const blogsdetailapi = (id) => {
    return axios
        .get(apiHost + `/blogs/`+id)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};
export const updatestatuspost = (id,status) => {
    return axios
        .get(apiHost + `/changestatuspost/${id}/${status}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};
export const getcommentapi = (id) => {
    return axios
        .get(apiHost + `/comment/`+id)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const createcommentapi= (data) => {
    return axios
        .post(apiHost + `/comment`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const reply = (data) => {
    return axios
        .post(apiHost + `/reply`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};
export const uploader = (data) => {
    return axios
        .post(apiHost + `/uploader`, data)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getcredit = (id) => {
    return axios
        .get(apiHost + `/credit/`+id)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};
export const deletecredit = (id,credit,blogid) => {
    return axios
        .get(apiHost + `/deletecredit/${id}/${credit}/${blogid}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const checkblog = (id,blogid) => {
    return axios
        .get(apiHost + `/checkblog/${id}/${blogid}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getlistbuyblog = (id) => {
    return axios
        .get(apiHost + `/getlistblogbuy/${id}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};