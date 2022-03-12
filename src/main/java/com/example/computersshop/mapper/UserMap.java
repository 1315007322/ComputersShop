package com.example.computersshop.mapper;
/*
 *项目名: ComputersShop
 *文件名: UserMap
 *创建者: superYan
 *创建时间:2022/3/12 18:03
 */

import com.example.computersshop.entity.User;

public interface UserMap {
    /**
     * 插入用户数据
     * @param user 用户数据
     * @return 受影响的行数，增删改 都会影响行数
     */
    Integer insert(User user);


    /**
     * 根据用户名查找用户
     * @param username
     * @return
     */
    User findByUsername(String username);
}
