package com.example.computersshop.mapper;
/*
 *项目名: server
 *文件名: DictDistrictMap
 *创建者: superYan
 *创建时间:2022/3/27 17:57
 */

import java.util.List;

public interface DictDistrictMap {



    /**
     * 根据省/市/区的行政代号获取省/市/区的名称
     * @param code 省/市/区的行政代号
     * @return 匹配的省/市/区的名称，如果没有匹配的数据则返回null
     */
    String findNameByCode(String code);

}
