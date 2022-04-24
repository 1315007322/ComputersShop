package com.example.computersshop.service;
/*
 *项目名: server
 *文件名: IProductService
 *创建者: superYan
 *创建时间:2022/4/13 15:33
 */


import com.example.computersshop.entity.PageParam;
import com.example.computersshop.entity.Product;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface IProductService {

    PageInfo<Product> selectProduct(PageParam pageParam);

}
