import HttpRequest from './request'


const post = async (url: string, params: any) => {
    const res = HttpRequest.post(url, params)
    return res
}

const get = async (url: string, params: any) => {
    const res = await HttpRequest.get(url, { params })
    return res
}

const postNew = async (url: string, params: any) => {
    const res = await HttpRequest.post(url, params, { withCredentials: false })
    return res
}




export { post, get, postNew }