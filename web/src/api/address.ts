import { post, get, postNew } from '@utils/axios'

export const getList = (params?: any) => {
    return post('address/list', params)
}

