package com.example.computersshop.entity;
/*
 *项目名: server
 *文件名: Password
 *创建者: superYan
 *创建时间:2022/3/18 11:23
 */

import com.sun.istack.internal.NotNull;

public class Password extends Base{

    @NotNull
    private String newPassword;


    @NotNull
    private String oldPassword;

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

}
