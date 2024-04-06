package com.example.circle.service.impl;

import com.example.circle.mapper.PostMapper;
import com.example.circle.model.Post;
import com.example.circle.service.PostService;
import com.example.circle.util.Result;
import com.example.circle.util.ResultUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.UUID;

@Service
public class PostServiceImpl implements PostService {

    private final PostMapper postMapper;

    public PostServiceImpl(PostMapper postMapper) {
        this.postMapper = postMapper;
    }

    @Override
    @Transactional
    public Result<Post> createPost(Post post) {
        try {
            // 生成 UUID 作为 postId 并设置
            post.setPostId(UUID.randomUUID().toString());
            postMapper.insertPost(post);
            // 假设 ResultUtil.success() 是你用来封装成功响应的工具方法
            return ResultUtil.success(post);
        } catch (Exception e) {
            // 假设 ResultUtil.error() 是你用来封装错误响应的工具方法
            return ResultUtil.error("Failed to create post: " + e.getMessage());
        }
    }
}
