package com.example.computersshop.entity;
/*
 *项目名: ComputersShop
 *文件名: Base
 *创建者: superYan
 *创建时间:2022/3/12 17:14
 */


import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class Base implements Serializable {
    private String createdUser;
    private Date createdTime;
    private String modifiedUser;
    private Date modifiedTime;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Base)) return false;

        Base base = (Base) o;

        if (getCreatedUser() != null ? !getCreatedUser().equals(base.getCreatedUser()) : base.getCreatedUser() != null)
            return false;
        if (getCreatedTime() != null ? !getCreatedTime().equals(base.getCreatedTime()) : base.getCreatedTime() != null)
            return false;
        if (getModifiedUser() != null ? !getModifiedUser().equals(base.getModifiedUser()) : base.getModifiedUser() != null)
            return false;
        return getModifiedTime() != null ? getModifiedTime().equals(base.getModifiedTime()) : base.getModifiedTime() == null;
    }

    @Override
    public String toString() {
        return "Base{" +
                "createdUser='" + createdUser + '\'' +
                ", createdTime=" + createdTime +
                ", modifiedUser='" + modifiedUser + '\'' +
                ", modifiedTime=" + modifiedTime +
                '}';
    }

    @Override
    public int hashCode() {
        int result = getCreatedUser() != null ? getCreatedUser().hashCode() : 0;
        result = 31 * result + (getCreatedTime() != null ? getCreatedTime().hashCode() : 0);
        result = 31 * result + (getModifiedUser() != null ? getModifiedUser().hashCode() : 0);
        result = 31 * result + (getModifiedTime() != null ? getModifiedTime().hashCode() : 0);
        return result;
    }
}
