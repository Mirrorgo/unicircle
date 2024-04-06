package com.example.circle.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;

public class TopicInfoDto {
    private String body;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss.SSS", timezone = "UTC")
    private Date createdAt;
    private String imageUrl;
    private String subjectNumber;
    private String title;
    private String typeName;
    private String username;

    public TopicInfoDto() {
    }

    public TopicInfoDto(String body, Date createdAt, String imageUrl, String subjectNumber, String title, String typeName, String username) {
        this.body = body;
        this.createdAt = createdAt;
        this.imageUrl = imageUrl;
        this.subjectNumber = subjectNumber;
        this.title = title;
        this.typeName = typeName;
        this.username = username;
    }

    // Getters
    public String getBody() {
        return body;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getSubjectNumber() {
        return subjectNumber;
    }

    public String getTitle() {
        return title;
    }

    public String getTypeName() {
        return typeName;
    }

    public String getUsername() {
        return username;
    }

    // Setters
    public void setBody(String body) {
        this.body = body;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setSubjectNumber(String subjectNumber) {
        this.subjectNumber = subjectNumber;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}