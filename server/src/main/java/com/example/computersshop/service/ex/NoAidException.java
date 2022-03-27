package com.example.computersshop.service.ex;
/*
 *项目名: server
 *文件名: NoAidException
 *创建者: superYan
 *创建时间:2022/3/27 22:42
 */

public class NoAidException extends ServiceException{
    public NoAidException() {
        super("数据异常");
    }

    public NoAidException(String message) {
        super(message);
    }

    public NoAidException(String message, Throwable cause) {
        super(message, cause);
    }

    public NoAidException(Throwable cause) {
        super(cause);
    }

    protected NoAidException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
