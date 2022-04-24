package com.example.computersshop.mapper;
/*
 *项目名: server
 *文件名: Products
 *创建者: superYan
 *创建时间:2022/4/13 15:34
 */

import com.example.computersshop.entity.PageParam;
import com.example.computersshop.entity.Product;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductsMap {

    /**
     * 分页查询商品列表
     * @return 返回分页的list
     */
    List<Product> findListPage(PageParam pageParam);
}
