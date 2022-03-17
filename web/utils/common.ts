import { history } from "./router"


const getHistoryState = () => {
    return history.location.state
}

export {
    getHistoryState
}