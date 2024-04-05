// types.ts

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
  
export type { Post, Comment, PostContentData };
  