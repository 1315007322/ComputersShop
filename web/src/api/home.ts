import { post, get, postNew } from '@utils/axios'

export const getList = (params: {pageNum: number,pageSize: number}) => {
    return get('article/list', params)
}

