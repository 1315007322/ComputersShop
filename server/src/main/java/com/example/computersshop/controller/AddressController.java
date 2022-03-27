package com.example.computersshop.controller;
/*
 *项目名: server
 *文件名: AddressController
 *创建者: superYan
 *创建时间:2022/3/26 22:07
 */

import com.example.computersshop.entity.Address;
import com.example.computersshop.service.IAddressService;
import com.example.computersshop.service.IDicDistrictService;
import com.example.computersshop.service.impl.AddressServiceImpl;
import com.example.computersshop.utils.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("address")
public class AddressController extends BaseController{

    @Autowired
    IAddressService addressService;

    @Autowired
    IDicDistrictService dicDistrictService;


    @PostMapping("/add")
    @ResponseBody
    public JsonResult<Void> addAddress(@RequestBody Address address,HttpSession session){

        Integer uid = getUuidFromSession(session);
        address.setUid(uid);
        address.setProvinceName(dicDistrictService.findNameByCode(address.getProvinceCode()));
        address.setCityName(dicDistrictService.findNameByCode(address.getCityCode()));
        address.setAreaName(dicDistrictService.findNameByCode(address.getAreaCode()));
        addressService.addAddress(uid,address);
        return new JsonResult<>(200,"创建成功");
    }


    @PostMapping("/update")
    @ResponseBody
    public JsonResult<Void> updateAddress(@RequestBody Address address,HttpSession session){
        Integer uid = getUuidFromSession(session);
        address.setUid(uid);
        address.setProvinceName(dicDistrictService.findNameByCode(address.getProvinceCode()));
        address.setCityName(dicDistrictService.findNameByCode(address.getCityCode()));
        address.setAreaName(dicDistrictService.findNameByCode(address.getAreaCode()));
        addressService.updateAddress(uid,address);
        return new JsonResult<>(200,"更新成功");
    }

    @PostMapping("/list")
    @ResponseBody
    public JsonResult<List<Address>> checkAddress(HttpSession session){

        Integer uuidFromSession = getUuidFromSession(session);

        List<Address> address = addressService.getAddress(uuidFromSession);

        return new JsonResult<List<Address>>(200,"查询成功",address);
    }





}
