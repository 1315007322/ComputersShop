package com.example.computersshop.service;
/*
 *项目名: ComputersShop
 *文件名: IUserService
 *创建者: superYan
 *创建时间:2022/3/12 21:54
 * 用户模块业务层接口
 */


import com.example.computersshop.entity.User;

public interface IUserService {

    /**
     * 用户的注册方法
     * @param user 用户注册的数据
     */
    void reg(User user);

}
