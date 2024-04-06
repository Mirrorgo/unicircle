package com.example.circle.dto;

import java.util.Date;

public class TopicDetailDto {
    private String topicId;
    // todo
    private String userId;
    //todo
    private String typeId;
    //todo
    private String subjectId;
    private String title;
    private String body;
    private String imageUrl;
    private Date createdAt;
    private Date updatedAt;
    private String username;
    private int commentNumber;
    private String typeName;

    public TopicDetailDto() {

    }
    public TopicDetailDto(String topicId, String userId, String typeId, String subjectId, String title, String body, String imageUrl, Date createdAt, Date updatedAt, String username, int commentNumber, String typeName) {
        this.topicId = topicId;
        this.userId = userId;
        this.typeId = typeId;
        //todo
        this.subjectId = subjectId;
        this.title = title;
        this.body = body;
        this.imageUrl = imageUrl;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.username = username;
        this.commentNumber = commentNumber;
        this.typeName = typeName;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getCommentNumber() {
        return commentNumber;
    }

    public void setCommentNumber(int commentNumber) {
        this.commentNumber = commentNumber;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(String subjectId) {
        this.subjectId = subjectId;
    }

    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }
}