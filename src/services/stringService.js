import axios from "axios"

let stringCut = (payload) => {

    const config = {
        method: "POST",
        url: "https://lyft-interview-test.glitch.me/test",
        data: payload,
        headers: {"content-type": "application/json"}

    }
    return axios(config)
}

export {stringCut}