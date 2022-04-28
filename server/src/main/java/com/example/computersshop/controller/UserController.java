package com.example.computersshop.controller;
/*
 *项目名: ComputersShop
 *文件名: UserController
 *创建者: superYan
 *创建时间:2022/3/13 8:49
 */

import com.example.computersshop.entity.Login;
import com.example.computersshop.entity.Password;
import com.example.computersshop.entity.User;
import com.example.computersshop.service.IUserService;
import com.example.computersshop.utils.JsonResult;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@Controller
@Api(tags = "用户中心")
@Validated
@RequestMapping("user")
public class UserController extends BaseController{

    @Autowired
    private IUserService userService;

    @PostMapping("/reg")
    @ResponseBody
    public JsonResult<Void> reg(@RequestBody User user){
        userService.reg(user);
        return new JsonResult(OK,"注册成功");
    }

    @PostMapping("/login")
    @ResponseBody
    public JsonResult<User> login(@RequestBody Login user, HttpSession session) {
        // 调用业务对象的方法执行登录，并获取返回值
        User data = userService.login(user.getUsername(), user.getPassword());
        //登录成功后，将uid和username存入到HttpSession中
        session.setAttribute("uid", data.getUid());
        session.setAttribute("username", data.getUsername());

        // 将以上返回值和状态码OK封装到响应结果中并返回
        return new JsonResult<User>(OK, "登录成功",data);
    }

    @PostMapping("/logout")
    @ResponseBody
    public JsonResult logout(HttpSession session) {
        // 调用业务对象的方法执行登录，并获取返回值
        session.removeAttribute("uid");
        session.removeAttribute("username");
        // 将以上返回值和状态码OK封装到响应结果中并返回
        return new JsonResult<>(OK, "退出成功");
    }

    @PostMapping("/changePw")
    @ResponseBody
    public JsonResult<Void> changePw(@RequestBody Password password ,HttpSession session) {
        // 调用session.getAttribute("")获取uid和username
        System.out.println(session);
        Integer uid = getUuidFromSession(session);
        String username = getUsernameFromSession(session);

        // 调用业务对象执行修改密码
        userService.changePassword(uid, username, password.getOldPassword(), password.getNewPassword());
        // 返回成功
        // 将以上返回值和状态码OK封装到响应结果中并返回
        return new JsonResult<Void>(OK, "修改成功");
    }

    @PostMapping("/changeInfo")
    @ResponseBody
    public JsonResult<User> changeInfo(@RequestBody User user ,HttpSession session) {
        // 调用session.getAttribute("")获取uid和username
        System.out.println(session);
        Integer uid = getUuidFromSession(session);

        // 调用业务对象执行修改密码
        User result = userService.changeInfo(uid, user.getPhone(), user.getEmail(), user.getGender());

        // 返回成功
        // 将以上返回值和状态码OK封装到响应结果中并返回
        return new JsonResult<User>(OK, "修改成功",user);
    }

}
