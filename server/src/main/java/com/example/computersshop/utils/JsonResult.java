package com.example.computersshop.utils;
/*
 *项目名: ComputersShop
 *文件名: JsonResult
 *创建者: superYan
 *创建时间:2022/3/13 8:47
 */

import java.io.Serializable;

public class JsonResult<E> implements Serializable {
    private Integer state;
    private String message;
    private E data;

    public JsonResult() {

    }

    public JsonResult(Integer state) {
        this.state = state;
    }

    public JsonResult(String message) {
        this.message = message;
    }
    public JsonResult(Integer state,String message) {
        this.message = message;
        this.state = state;
    }

    public JsonResult(E data) {
        this.data = data;
    }



    public JsonResult(Integer state, String message, E data) {
        this.state = state;
        this.message = message;
        this.data = data;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public E getData() {
        return data;
    }

    public void setData(E data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "JsonResult{" +
                "state=" + state +
                ", message='" + message + '\'' +
                ", data=" + data +
                '}';
    }
}
