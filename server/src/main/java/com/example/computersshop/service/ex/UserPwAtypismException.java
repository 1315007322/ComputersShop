package com.example.computersshop.service.ex;
/*
 *项目名: server
 *文件名: UserPwAtypismException
 *创建者: superYan
 *创建时间:2022/3/13 21:48
 */

public class UserPwAtypismException extends ServiceException{
    public UserPwAtypismException() {
        super();
    }

    public UserPwAtypismException(String message) {
        super(message);
    }

    public UserPwAtypismException(String message, Throwable cause) {
        super(message, cause);
    }

    public UserPwAtypismException(Throwable cause) {
        super(cause);
    }

    protected UserPwAtypismException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
