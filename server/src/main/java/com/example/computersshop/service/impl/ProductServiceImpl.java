package com.example.computersshop.service.impl;
/*
 *项目名: server
 *文件名: IProductService
 *创建者: superYan
 *创建时间:2022/4/24 21:22
 */

import com.example.computersshop.entity.PageParam;
import com.example.computersshop.entity.Product;
import com.example.computersshop.mapper.ProductsMap;
import com.example.computersshop.service.IProductService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    private ProductsMap productsMap;


    @Override
    public PageInfo<Product> selectProduct(PageParam pageParam) {
        List<Product> listPage = productsMap.findListPage(pageParam);
        return new PageInfo<>(listPage);
    }
}
