package com.example.computersshop.service.impl;
/*
 *项目名: server
 *文件名: DicDistrictServiceImpl
 *创建者: superYan
 *创建时间:2022/3/27 18:02
 */

import com.example.computersshop.mapper.DictDistrictMap;
import com.example.computersshop.service.IDicDistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DicDistrictServiceImpl implements IDicDistrictService {

    @Autowired
    DictDistrictMap districtMap;

    @Override
    public String findNameByCode(String code) {
       return districtMap.findNameByCode(code);
    }
}
