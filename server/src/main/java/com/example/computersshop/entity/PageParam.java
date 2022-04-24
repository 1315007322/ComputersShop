package com.example.computersshop.entity;
/*
 *项目名: server
 *文件名: pageInfo
 *创建者: superYan
 *创建时间:2022/4/24 22:46
 */

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class PageParam {
    @ApiModelProperty(value = "当前页",required = true)
    int pageNum;
    @ApiModelProperty(value = "每页数量",required = true)
    int pageSize;
}
