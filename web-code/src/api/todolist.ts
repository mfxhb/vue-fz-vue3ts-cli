/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 15:51:45
 * @LastEditTime: 2022-08-24 15:53:06
 * @Description:
 */
import request from "@/axios/index";

export const TestApi = () => {
  return request({
    method: "GET",
    url: "/testApi",
  });
};
