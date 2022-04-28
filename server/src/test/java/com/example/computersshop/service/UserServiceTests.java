package com.example.computersshop.service;
/*
 *项目名: ComputersShop
 *文件名: UserServiceTests
 *创建者: superYan
 *创建时间:2022/3/12 22:06
 */

import com.example.computersshop.entity.PageParam;
import com.example.computersshop.entity.Product;
import com.example.computersshop.entity.User;
import com.example.computersshop.service.impl.UserServiceImpl;
import com.github.pagehelper.PageInfo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTests {
    @Autowired
    private IUserService userService;

    @Autowired
    private IProductService productService;

    @Test
    public void regTest(){
        User user = new User();
        user.setUsername("yhf4");
        user.setPassword("2345123");
        userService.reg(user);
        System.out.println("注册成功");
    }


    @Test
    public void changePassword(){
        userService.changePassword(22,"test","qwe","123");
    }


    @Test
    public void changeInfo(){
        userService.changeInfo(22,"13122581766","1315007312@qq.com",0);
    }


    @Test
    public void getProductList(){
//        PageParam pageParam = new PageParam();
//        pageParam.setPageNum(1);
//        pageParam.setPageSize(10);
//        PageInfo<Product> productPageInfo = productService.selectProduct(pageParam);
//        System.out.println(productPageInfo.toString());

        Integer a = null;
        System.out.println(a);
    }
}
