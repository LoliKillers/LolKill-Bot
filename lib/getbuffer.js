const axios = require('axios');

const getBuffer = async (url, options) => {
    try {
        const _x = await axios({
            method : "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return _x.data
    } catch (e) {
        console.log(e)
    }
}

module.exports = { getBuffer}