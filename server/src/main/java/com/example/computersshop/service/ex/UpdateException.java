package com.example.computersshop.service.ex;
/*
 *项目名: server
 *文件名: UpdateException
 *创建者: superYan
 *创建时间:2022/3/17 20:45
 */

public class UpdateException extends ServiceException{
    public UpdateException() {
        super("更新发生未知错误");
    }

    public UpdateException(String message) {
        super(message);
    }

    public UpdateException(String message, Throwable cause) {
        super(message, cause);
    }

    public UpdateException(Throwable cause) {
        super(cause);
    }

    protected UpdateException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
