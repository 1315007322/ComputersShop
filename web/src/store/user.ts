import { makeAutoObservable } from "mobx";
import { history } from '@utils/router';


class userdata {
    user: User = JSON.parse(localStorage.getItem('user') || '[]');
    constructor() {
        makeAutoObservable(this)
    }

    setUser = (user: User) => {
        localStorage.setItem('user', JSON.stringify(user))
        this.user = JSON.parse(localStorage.getItem('user') || '[]');
    }

    getUser = () => {
        console.log("获取用户", this.user);
        return this.user;
    }

    delete = () => {
        history.push('/home')
        localStorage.clear();
        this.user = JSON.parse(localStorage.getItem('user') || '[]');
    }
}


const userStore = new userdata();

export { userStore }

