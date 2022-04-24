package com.example.computersshop.controller;
/*
 *项目名: server
 *文件名: ProductController
 *创建者: superYan
 *创建时间:2022/4/24 21:23
 */


import com.example.computersshop.entity.PageParam;
import com.example.computersshop.entity.Product;
import com.example.computersshop.service.IProductService;
import com.example.computersshop.service.impl.ProductServiceImpl;
import com.example.computersshop.utils.JsonResult;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@Api(tags = "商品")
@RequestMapping(value = "products")
@Validated
public class ProductController {

    @Autowired
    private IProductService productService;


    @PostMapping("/list")
    @ResponseBody
    public JsonResult<PageInfo<Product>> queryProductList(@RequestBody PageParam pageParam){
        PageInfo<Product> productPageInfo = productService.selectProduct(pageParam);
        return new JsonResult<>(200,"查询成功",productPageInfo);
    }

}
