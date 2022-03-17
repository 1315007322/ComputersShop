package com.example.computersshop.interceptor;

import com.example.computersshop.utils.JsonResult;
import com.google.gson.Gson;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        Object uid = request.getSession().getAttribute("uid");
        if(uid == null){
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json;charset=UTF-8");
            response.getWriter().write(new Gson().toJson(new JsonResult(17020, "用户未登录", null)));
            response.getWriter().flush();
            response.getWriter().close();
            return false;
        }
        return true;
    }

}
