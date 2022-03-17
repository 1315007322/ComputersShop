package com.example.computersshop.controller;
/*
 *项目名: ComputersShop
 *文件名: BaseController
 *创建者: superYan
 *创建时间:2022/3/13 9:45
 */

import com.example.computersshop.service.ex.*;
import com.example.computersshop.utils.JsonResult;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

//控制层基类
public class BaseController {
    public static final int OK = 200;



    @ExceptionHandler(ServiceException.class)
    @ResponseBody
    public JsonResult<Object> handleException(Throwable e){
        JsonResult<Object> result = new JsonResult<>();
        if(e instanceof UserAlreadyException){
            result.setState(4000);
            result.setMessage("用户名被占用");
        }else if(e instanceof InsertException){
            result.setState(5000);
            result.setMessage(("插入时遇到未知异常"));
        }else if(e instanceof UserNotFoundException){
            result.setState(3000);
            result.setMessage(("用户名不存在"));
        }else if(e instanceof UserPwAtypismException){
            result.setState(2000);
            result.setMessage(("账号密码错误"));
        }else if(e instanceof PwNotSameException){
            result.setState(2010);
            result.setMessage(("原密码不一致"));
        }else if(e instanceof UpdateException){
            result.setState(2020);
            result.setMessage(("更新时发生未知错误"));
        }
        return  result;
    }


    protected Integer getUuidFromSession(HttpSession httpSession){
        return Integer.valueOf(httpSession.getAttribute("uid").toString());
    }

    protected String getUsernameFromSession(HttpSession httpSession){
        return httpSession.getAttribute("username").toString();
    }

}
