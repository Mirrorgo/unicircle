package com.example.circle.service.impl;

import com.example.circle.mapper.CommentMapper;
import com.example.circle.model.Comment;
import com.example.circle.service.CommentService;
import com.example.circle.util.Result;
import com.example.circle.util.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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
}