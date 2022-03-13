package com.example.computersshop.controller;
/*
 *项目名: ComputersShop
 *文件名: UserController
 *创建者: superYan
 *创建时间:2022/3/13 8:49
 */

import com.example.computersshop.entity.User;
import com.example.computersshop.mapper.UserMap;
import com.example.computersshop.service.IUserService;
import com.example.computersshop.service.ex.InsertException;
import com.example.computersshop.service.ex.UserException;
import com.example.computersshop.utils.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
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
}
