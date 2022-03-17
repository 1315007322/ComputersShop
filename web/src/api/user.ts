import { post, get, postNew } from '@utils/axios'

// 注册
export const UserReg = (user: User) => {
    return post('user/reg', user)
}

// 登录
export const UserLogin = (params: { username: string, password: string }) => {
    return post('user/login', params)
}

// 修改密码
export const ChangePw = (params: { newPassword: string, oldpassword: string }) => {
    return post('user/changePassword', params)
}
