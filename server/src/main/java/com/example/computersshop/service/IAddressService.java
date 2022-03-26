package com.example.computersshop.service;
/*
 *项目名: server
 *文件名: IAddressService
 *创建者: superYan
 *创建时间:2022/3/26 21:58
 */

import com.example.computersshop.entity.Address;

import java.util.List;

public interface IAddressService {
    /**
     * 插入用户地址
     * @return
     */
    void addAddress(Integer uid, Address address);


    /**
     * 获取用户所有的收货地址
     * @param uid
     * @return
     */
    List<Address> getAddress(Integer uid);
}
