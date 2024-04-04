package com.example.circle.model;


import java.util.Date;

public class Topic {
    private int topicId;
    private int userId;
    private String subjectNumber;
    private String title;
    private String body;
    private String imageUrl;
    private String tag;
    private Date createdAt;
    private Date updatedAt;

    public Topic(int topicId, int userId, String subjectNumber, String title, String body, String imageUrl, String tag, Date createdAt, Date updatedAt) {
        this.topicId = topicId;
        this.userId = userId;
        this.subjectNumber = subjectNumber;
        this.title = title;
        this.body = body;
        this.imageUrl = imageUrl;
        this.tag = tag;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Getter和Setter方法
    public int getTopicId() {
        return topicId;
    }

    public void setTopicId(int topicId) {
        this.topicId = topicId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
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

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
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