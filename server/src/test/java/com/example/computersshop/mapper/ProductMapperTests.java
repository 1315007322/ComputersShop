package com.example.computersshop.mapper;

import com.example.computersshop.entity.PageParam;
import com.example.computersshop.entity.Product;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/*
 *项目名: server
 *文件名: ProductMapperTests
 *创建者: superYan
 *创建时间:2022/4/13 15:45
 */
@SpringBootTest
//表示启动这个单元测试类，需要传 springruner 实例的运行类型
@RunWith(SpringRunner.class)
public class ProductMapperTests {
    @Autowired
    private ProductsMap productsMap;


    @Test
    public void findListPage(){
        PageParam pageParam = new PageParam();
        pageParam.setPageNum(1);
        pageParam.setPageSize(10);
        List<Product> listPage = productsMap.findListPage(pageParam);

        for (Product item :
                listPage) {
            System.out.println(item.toString());

        }
    }
}
