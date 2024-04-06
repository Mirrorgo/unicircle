import axios from "axios";
import { requestUrl } from "./requestUtils";
export interface BaseResponse<T> {
    code: number;
    msg: string;
    data: T;
  }

export interface PostItem {
    userId: string;
    description: string;
    location: string;
    label: string;
    price: string;
    address: string;
  }
  
  export async function createPost(postData: PostItem) {
    return axios.post<BaseResponse<PostItem[]>>(
        requestUrl("/posts/newpost", false),
        {
          postData,
        }
      );
    }
     
