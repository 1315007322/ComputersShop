package com.example.computersshop.service.impl;
/*
 *项目名: ComputersShop
 *文件名: UserServiceImpl
 *创建者: superYan
 *创建时间:2022/3/12 21:57
 */

import com.example.computersshop.entity.User;
import com.example.computersshop.mapper.UserMap;
import com.example.computersshop.service.IUserService;
import com.example.computersshop.service.ex.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.UUID;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserMap userMap;

    @Override
    public void reg(User user) {
        User result = userMap.findByUsername(user.getUsername());
        if(result != null){
            throw new UserAlreadyException("用户名被占用，请重新注册");
        }else{
            String pw = user.getPassword();
            String uuid = UUID.randomUUID().toString().toLowerCase();
            user.setSalt(uuid);
            pw = getMD5PW(pw,uuid);
            user.setPassword(pw);
            user.setIsDelete(0);
            user.setCreatedUser(user.getUsername());
            user.setModifiedUser(user.getUsername());
            Date date = new Date();
            user.setCreatedTime(date);
            user.setModifiedTime(date);
            Integer insert = userMap.insert(user);
            if(insert != 1){
                throw new InsertException("在用户注册过程中产生未知异常");
            }
        }
    }



    private String getMD5PW(String pw,String salt){
        for (int i = 0; i<3;i++){
            pw = DigestUtils.md5DigestAsHex((salt + pw + salt).getBytes()).toUpperCase();
        }
        return pw;
    }


    @Override
    public User login(String username, String password) {
        User user = userMap.findByUsername(username);
        if(user == null){
            throw new UserNotFoundException();
        }
        String salt = user.getSalt();
        String md5PW = getMD5PW(password, salt);
        if(!user.getPassword().equals(md5PW)){
            throw new UserPwAtypismException("账号密码错误");
        }

        User user1 = new User();
        user1.setUsername(user.getUsername());
        user1.setUid(user.getUid());
        user1.setAvatar(user.getAvatar());
        return user1;
    }

    @Override
    public void changePassword(Integer uid, String username, String oldPassword, String newPassword) {
        User user = userMap.findByUid(uid);
        if(user == null){
            throw new UserNotFoundException();
        }

        String salt = user.getSalt();
        String md5PW = getMD5PW(oldPassword, salt);
        if(!user.getPassword().equals(md5PW)){
            throw new UserPwAtypismException("账号密码错误");
        }

        String pw = getMD5PW(newPassword, user.getSalt());


        Integer integer = userMap.updatePasswordByUid(uid, pw, username, new Date());
        if(integer != 1){
            throw  new UpdateException();
        }


    }


}
