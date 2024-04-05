package com.example.circle.model;

import java.util.Date;

public class Comment {
    private String commentId;
    private String topicId;
    private String parentCommentId; // 使用Integer以便允许null值，表示顶级评论
    private String username;
    private String comment;
    private Date createdAt;

    // 无参构造函数
    public Comment() {
    }

    // 带所有参数的构造函数
    public Comment(String commentId, String topicId, String parentCommentId, String username, String comment, Date createdAt) {
        this.commentId = commentId;
        this.topicId = topicId;
        this.parentCommentId = parentCommentId;
        this.username = username;
        this.comment = comment;
        this.createdAt = createdAt;
    }

    // getter和setter方法
    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public String getParentCommentId() {
        return parentCommentId;
    }

    public void setParentCommentId(String parentCommentId) {
        this.parentCommentId = parentCommentId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}