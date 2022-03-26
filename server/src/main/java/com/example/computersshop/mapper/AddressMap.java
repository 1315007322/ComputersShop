package com.example.computersshop.mapper;
/*
 *项目名: server
 *文件名: Address
 *创建者: superYan
 *创建时间:2022/3/20 21:25
 */

import com.example.computersshop.entity.Address;

import java.util.List;

public interface AddressMap {
    /**
     * 插入地址
     * @param address 地址实体
     * @return 操作的行数
     */
    Integer insert(Address address);

    /**
     * 根据用户id 查询用户的所有地址
     * @param uid
     * @return
     */
    List<Address> findAddressByUid(Integer uid);
    /**
     * 根据用户id 查询用户地址数量
     * @param uid
     * @return
     */
    Integer findCountByUid(Integer uid);
}
