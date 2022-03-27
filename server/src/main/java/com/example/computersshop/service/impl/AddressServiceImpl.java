package com.example.computersshop.service.impl;
/*
 *项目名: server
 *文件名: AddressServiceImpl
 *创建者: superYan
 *创建时间:2022/3/26 22:01
 */

import com.example.computersshop.entity.Address;
import com.example.computersshop.entity.User;
import com.example.computersshop.mapper.AddressMap;
import com.example.computersshop.mapper.UserMap;
import com.example.computersshop.service.IAddressService;
import com.example.computersshop.service.ex.AddressOverflowException;
import com.example.computersshop.service.ex.InsertException;
import com.example.computersshop.service.ex.NoAidException;
import com.example.computersshop.service.ex.UpdateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
public class AddressServiceImpl implements IAddressService {

    @Autowired
    private AddressMap addressMap;

    @Autowired
    private UserMap userMap;

    @Override
    public void addAddress(Integer uid, Address address) {

        Integer countByUid = addressMap.findCountByUid(uid);
        if(countByUid >= 20){
            throw new AddressOverflowException();
        }

        Integer insert = addressMap.insert(address);

        if(insert == null){
            throw new InsertException();
        }
    }

    @Override
    public void updateAddress(Integer uid,Address address) {
        if(address.getAid() == null){
            throw  new NoAidException();
        }
        User user = userMap.findByUid(uid);
        address.setModifiedUser(user.getUsername());
        address.setModifiedTime(new Date());
        Integer integer = addressMap.updateAddress(address);
        if(integer == null){
            throw new UpdateException();
        }
    }

    @Override
    public List<Address> getAddress(Integer uid) {
        List<Address> addressByUid = addressMap.findAddressByUid(uid);

        return addressByUid;
    }


}
