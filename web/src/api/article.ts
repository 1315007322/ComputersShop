import { post, get, postNew } from '@utils/axios'

//查看博客详情
export const getBlogDetail = (params: { id: number }) => {
    return get('article/detail', params)
}
