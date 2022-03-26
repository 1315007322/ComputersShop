package com.example.computersshop.service.ex;
/*
 *项目名: server
 *文件名: addressOverflowException
 *创建者: superYan
 *创建时间:2022/3/26 22:05
 */

public class AddressOverflowException extends ServiceException{
    public AddressOverflowException() {
        super("用户地址超出限制");
    }

    public AddressOverflowException(String message) {
        super(message);
    }

    public AddressOverflowException(String message, Throwable cause) {
        super(message, cause);
    }

    public AddressOverflowException(Throwable cause) {
        super(cause);
    }

    protected AddressOverflowException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
