import Axios from "axios";
import WEBSERVICE from "../constants/API"
//import { getCurrentMarketCulture } from "./util";

export async function getAllObject(url) {
    return Axios.get(url)
        .then(res => {
            return res.data;
        }).catch
        ((error) => {
            console.log(error);
            return {
                error: true
            };
        });
}

export async function getDetailsObject(url, idObject) {
    return Axios.post(url, idObject, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        // console.log("fil",res.data)
        return res.data;
    }).catch((error) => {
        console.log(error);
        return {
            error: true
        };
    });
}

export async function getById(url, id) {
    //console.log(url+id)
    return Axios.get(url + id).then(res => {
        return res.data;
    }).catch
        ((error) => {
            console.log(error);
            return {
                error: true
            };
        });
}


export async function publishObject(url, id) {
    return Axios.post(url + id).then(res => {
        return res.data;
    }).catch((error) => {
        console.log(error);
        return {
            error: true
        };
    });
}

export async function getAll(url) {
    return Axios.get(url).then(res => {
        return res.data;
    }).catch
        ((error) => {
            console.log(error);
            return {
                error: true
            };
        });
}

export async function deleteObject(url, id) {
    return Axios.delete(url + id).then(res => {
        return res.data;
    }).catch
        ((error) => {
            console.log(error);
            return {
                error: true
            };
        });
}

export async function addObject(url, object) {
    console.log(url,object)
    return Axios.post(url, object, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        return res.data;
    }).catch((error) => {
        console.log(error);
        return {
            error: true
        };
    });
}

export async function saveObject(url, object) {
    // console.log(url,object)
    return Axios.post(url, object, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        return res.data;
    }).catch((error) => {
        console.log(error);
        return {
            error: true
        };
    });
}

export async function updateObject(url, object) {
    return Axios.put(url, object, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        return res.data;
    }).catch((error) => {
        console.log(error);
        return {
            error: true
        };
    });
}

export async function getAllMarket() {
    return Axios.get(WEBSERVICE.GETALLMARKET)
        .then(res => {
            return res.data;
        }).catch
        ((error) => {
            console.log(error);
            return {
                error: true
            };
        });
}


export async function submitLogin(userInfo) {
    return Axios.post(WEBSERVICE.CHECKLOGIN, userInfo, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        return res.data;
    }).catch((error) => {
        console.log(error);
        return {
            error: true
        };
    });
}

export async function uploadImage(url,file) {
    console.log(url, JSON.stringify(file))
    return Axios.post(url, file, {
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => {
        return res.data;
    }).catch((error) => {
        console.log(error);
        return {
            error: true
        };
    });
}