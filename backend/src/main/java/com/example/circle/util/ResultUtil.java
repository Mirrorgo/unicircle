package com.example.circle.util;

import java.util.Map;
public class ResultUtil {
    /**
     * 成功且带数据
     **/
    public static Result success(Object object) {
        Result result = new Result();
        result.setCode(ResultCode.SUCCESS.getCode());
        result.setMsg(ResultCode.SUCCESS.getMsg());
        result.setData(object);
        return result;
    }
    /**
     * 成功但不带数据
     **/
    public static Result success() {
        return success(null);
    }

    /**
     * 成功且带有自定义数据和消息
     **/
    public static Result<Map<String, Object>> success(Map<String, Object> data, String msg) {
        Result<Map<String, Object>> result = new Result<>();
        result.setCode(ResultCode.SUCCESS.getCode());
        result.setMsg(msg);
        result.setData(data);
        return result;
    }
    /**
     * 失败
     **/
    public static Result error(Object object) {
        Result result = new Result();
        result.setCode(ResultCode.ERROR.getCode());
        result.setMsg(ResultCode.ERROR.getMsg());
        result.setData(object);
        return result;
    }
}