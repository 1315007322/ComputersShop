package com.example.computersshop.entity;
/*
 *项目名: server
 *文件名: login
 *创建者: superYan
 *创建时间:2022/4/27 20:44
 */

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class Login {
    @ApiModelProperty(value = "用户名", required = true)
    private String username;

    @ApiModelProperty(value = "密码", required = true)
    private String password;
}
