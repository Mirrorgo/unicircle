package com.example.circle.service;

import com.example.circle.model.Comment;
import com.example.circle.util.Result;

import java.util.List;

public interface CommentService {
    Result<List<Comment>> getCommentsByTopicId(String topicId);

    Result<Comment> createComment(Comment comment);
}