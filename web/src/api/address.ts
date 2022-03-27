import { post, get, postNew } from '@utils/axios'


export const getList = (params?: any) => {
    return post('address/list', params)
}



export const addAddress = (params: Address) => {
    return post('address/add', params)
}


export const updateAddress = (params: Address) => {
    return post('address/update', params)
}

