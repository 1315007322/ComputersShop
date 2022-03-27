package com.example.computersshop.mapper;
/*
 *项目名: ComputersShop
 *文件名: UserMaperTests
 *创建者: superYan
 *创建时间:2022/3/12 21:13
 */

import com.example.computersshop.entity.Address;
import com.example.computersshop.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Component;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

@SpringBootTest
//表示启动这个单元测试类，需要传 springruner 实例的运行类型
@RunWith(SpringRunner.class)
public class UserMapperTests {

    @Autowired
    private UserMap userMap;

    @Autowired
    private AddressMap addressMap;


    @Autowired
    private DictDistrictMap districtMap;

    /**
     * 必须被@Test注解修饰
     * 返回 void
     * 入参 不能指定类型
     * 方法 指定为public
     */
    @Test
    public void insert(){
        User user = new User();
        user.setUsername("yhf");
        user.setPassword("123");
        Integer insert = userMap.insert(user);
        System.out.println(insert);

    }

    @Test
    public void findByName(){
        User yhf = userMap.findByUsername("abc");
        System.out.println(yhf);
    }

    @Test
    public void updatePasswordByUid(){
        Integer isModify = userMap.updatePasswordByUid(19, "222222", "yhtt", new Date());
    }

    @Test
    public void findByUid(){
        User byUid = userMap.findByUid(19);
        System.out.println(byUid);
    }

//    @Test
//    public void updateInFoByUid(){
//        User user = new User();
//        user.setUid(22);
//        user.setPhone("15751490322");
//        user.setEmail("1315007322@qq.com");
//        user.setGender(1);
//        user.setModifiedTime(new Date());
//        user.setModifiedUser("test");
//        Integer integer = userMap.updateInFoByUid(user);
//        System.out.println(integer);
//    }

    @Test
    public void insertAddress(){
        Address address = new Address();
        address.setUid(24);
        addressMap.insert(address);
    }

    @Test
    public void findCountByUid(){
        Integer countByUid = addressMap.findCountByUid(24);
        System.out.println(countByUid);
    }

    @Test
    public void findAddressByUid(){
        List<Address> addressByUid = addressMap.findAddressByUid(22);
        for (Address item:
             addressByUid) {
            System.out.println(item.toString());
        }
    }

    @Test
    public void findNameByCode(){
        String nameByCode = districtMap.findNameByCode("330601");
        System.out.println(nameByCode);
    }
}
