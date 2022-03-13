import { post, get, postNew } from '@utils/axios'

//查询相册一级目录
export const getPhotosList = (params: { pageNum: number, pageSize: number }) => {
    return get('photo/list', params)
}


//查询相册二级目录
export const getPhotosDetail = (params: { pageNum: number, pageSize: number, id: number }) => {
    return get('photo/subList', params)
}