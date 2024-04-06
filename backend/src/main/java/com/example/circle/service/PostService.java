package com.example.circle.service;

import com.example.circle.model.Post;
import com.example.circle.util.Result;

public interface PostService {
    Result<Post> createPost(Post post);
}