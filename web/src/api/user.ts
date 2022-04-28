import { post, get, postNew } from '@utils/axios'

// 注册
export const UserReg = (user: User) => {
    return post('user/reg', user)
}

// 登录
export const UserLogin = (params: { username: string, password: string }) => {
    return post('user/login', params)
}

// 退出
export const UserloginOut = () => {
    return post('user/logout')
}

// 修改密码
export const ChangePw = (params: { oldPassword: string, newPassword: string }) => {
    return post('user/changePw', params)
}

// 修改用户的资料
export const ChangeUserInfo = (user: User) => {
    return post('user/changeInfo', user)
}