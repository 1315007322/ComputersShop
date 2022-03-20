import { history } from "./router"


const getHistoryState = () => {
    return history.location.state
}

const RenderGender = (type: any) => {
    if (!isNaN(type)) {
        return type === 1 ? '男' : '女'
    } else {
        return '- -'
    }

}

export {
    getHistoryState,
    RenderGender
}