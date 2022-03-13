package com.example.computersshop.service;
/*
 *项目名: ComputersShop
 *文件名: UserServiceTests
 *创建者: superYan
 *创建时间:2022/3/12 22:06
 */

import com.example.computersshop.entity.User;
import com.example.computersshop.service.impl.UserServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTests {
    @Autowired
    private IUserService userService;


    @Test
    public void regTest(){
        User user = new User();
        user.setUsername("yhf4");
        user.setPassword("2345123");
        userService.reg(user);
        System.out.println("注册成功");
    }
}
