const axios = require('axios')

const baseURL = 'https://como-fazer-devpleno-18.firebaseio.com/'

const list = async (key) => {
    const content = await axios.get(baseURL+key+'.json')
    if(content.data) {
        const objetos = Object
            .keys(content.data)
            .map(key => {
                return{
                    id: key, 
                    ...content.data[key]
                }
            })
        return objetos
    }
    return []
}

const remove = async(key, id) => {
    await axios.delete(baseURL+key+'/'+id+'.json')
    return true
}

const get = async(key, id) => {
    const content = await axios.get(`${baseURL}/${key}/${id}.json`)
    return {
        id: id,
        ...content.data
    }
}

const update = async(key, id, data) => {
    await axios.put(`${baseURL}/${key}/${id}.json`, data)
    return true
}

const create = async(key, data) => {
    await axios.post(`${baseURL}/${key}/.json`, data)
    return true
}

module.exports = {
    list, remove, get, update, create
}