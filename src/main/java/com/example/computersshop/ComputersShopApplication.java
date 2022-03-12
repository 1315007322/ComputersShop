package com.example.computersshop;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.computersshop.mapper")
public class ComputersShopApplication {

    public static void main(String[] args) {
        SpringApplication.run(ComputersShopApplication.class, args);
    }

}
