package com.example.circle.service.impl;

import com.example.circle.mapper.CommentMapper;
import com.example.circle.model.Comment;
import com.example.circle.service.CommentService;
import com.example.circle.util.Result;
import com.example.circle.util.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentMapper commentMapper;

    @Autowired
    public CommentServiceImpl(CommentMapper commentMapper) {
        this.commentMapper = commentMapper;
    }

    @Override
    @Transactional(readOnly = true)
    public Result<List<Comment>> getCommentsByTopicId(String topicId) {
        try {
            List<Comment> comments = commentMapper.getCommentsByTopicId(topicId);
            return ResultUtil.success(comments);
        } catch (Exception e) {
            return ResultUtil.error("Failed to retrieve comments: " + e.getMessage());
        }
    }

    @Override
    @Transactional
    public Result<Comment> createComment(Comment comment) {
        try {
            // 为comment生成一个唯一的UUID作为commentId
            String uniqueID = UUID.randomUUID().toString();
            comment.setCommentId(uniqueID); // 设置comment的commentId
            comment.setCreatedAt(new Date()); // 设置当前时间为createdAt
            commentMapper.insertComment(comment); // 插入评论到数据库
            return ResultUtil.success(comment);
        } catch (Exception e) {
            return ResultUtil.error("Failed to create comment: " + e.getMessage());
        }
    }
}