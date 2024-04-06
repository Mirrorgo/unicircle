import axios from "axios";
import { requestUrl } from "@/service/requestUtils";

interface Author {
    name: string;
    avatar: string;
}

interface PostContentData {
    title: string;
    description: string;
    tag: string;
    location: string;
    detailedAddress: string;
    price?: string; // 价格是可选的，因为并不是所有帖子都会有价格
}
interface CommentAuthor {
    name: string;
    avatar: string;
}
  
interface Comment {
    id: number;
    author: CommentAuthor;
    content: string;
}
  
interface Post {
    id: number;
    author: Author;
    images: string[];
    content: PostContentData;
    comments: Comment[];
}

interface BaseResponse<T> {
  code: number;
  msg: string;
  data: T;
}

export async function queryPostsList(params: object) {
  return axios.get<BaseResponse<Post[]>>(
    requestUrl("/posts/list", true),
    {
      params,
    }
  );
}
export async function queryPostDetail(postId: string) {
  return axios.get<BaseResponse<Post>>(
    requestUrl(`/posts/${postId}`, true) // Adjust the URL path according to your actual API endpoint
  );
}
  
export type { Post, Comment, PostContentData };
  