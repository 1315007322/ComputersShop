import { post, get, postNew } from '@utils/axios'

export const UserReg = (user: User) => {
    return post('user/reg', user)
}
