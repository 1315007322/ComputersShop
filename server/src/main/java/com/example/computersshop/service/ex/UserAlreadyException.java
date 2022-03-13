package com.example.computersshop.service.ex;
/*
 *项目名: ComputersShop
 *文件名: UserException
 *创建者: superYan
 *创建时间:2022/3/12 21:52
 */

public class UserAlreadyException extends ServiceException{
    public UserAlreadyException() {
        super();
    }

    public UserAlreadyException(String message) {
        super(message);
    }

    public UserAlreadyException(String message, Throwable cause) {
        super(message, cause);
    }

    public UserAlreadyException(Throwable cause) {
        super(cause);
    }

    protected UserAlreadyException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
