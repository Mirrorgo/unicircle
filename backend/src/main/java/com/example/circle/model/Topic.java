package com.example.circle.model;


import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class Topic {
    private String topicId;
    private String userId;
    private String subjectNumber;
    private String title;
    private String body;
    private String imageUrl;
    private String typeId;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss.SSS", timezone = "UTC")
    private Date createdAt;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss.SSS", timezone = "UTC")
    private Date updatedAt;

    public Topic(String topicId, String userId, String subjectNumber, String title, String body, String imageUrl, String typeId, Date createdAt, Date updatedAt) {
        this.topicId = topicId;
        this.userId = userId;
        this.subjectNumber = subjectNumber;
        this.title = title;
        this.body = body;
        this.imageUrl = imageUrl;
        this.typeId = typeId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Topic() {

    }

    // Getter和Setter方法
    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
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

    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
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

    public String getSubjectNumber() {
        return subjectNumber;
    }

    public void setSubjectNumber(String subjectNumber) {
        this.subjectNumber = subjectNumber;
    }
}