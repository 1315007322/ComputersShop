package com.example.computersshop.mapper;
/*
 *项目名: ComputersShop
 *文件名: UserMap
 *创建者: superYan
 *创建时间:2022/3/12 18:03
 */

import com.example.computersshop.entity.User;

import java.util.Date;

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

    /**
     * 根据uid修改用户密码
     * @return
     */
    /**
     * 根据用户uid修改用户密码
     * @param uid 用户uid
     * @param newPassword  新传入的密码
     * @param modifiedUser 修改者 用户名
     * @param modifiedTime 修改时间
     * @return 返回受影响的行数
     */
    Integer updatePasswordByUid(Integer uid, String newPassword, String modifiedUser, Date modifiedTime);

    /**
     * 根据用户uid 查询用户数据
     */
    User findByUid(Integer uid);


}
