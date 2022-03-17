package com.example.computersshop.service.ex;
/*
 *项目名: server
 *文件名: pwnotSame
 *创建者: superYan
 *创建时间:2022/3/17 20:44
 */

public class PwNotSameException extends ServiceException{
    public PwNotSameException() {
        super();
    }

    public PwNotSameException(String message) {
        super(message);
    }

    public PwNotSameException(String message, Throwable cause) {
        super(message, cause);
    }

    public PwNotSameException(Throwable cause) {
        super(cause);
    }

    protected PwNotSameException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
