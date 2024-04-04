package com.example.circle.model;

import java.util.Date;
import java.time.LocalDateTime;
public class Subject {
    private int subjectId;
    private String subjectName;
    private String subjectDescription;


    private String subjectNumber;

    // 构造函数

    public Subject(int subjectId, String subjectName, String subjectDescription, LocalDateTime createdAt, String subjectNumber) {
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.subjectDescription = subjectDescription;
        this.subjectNumber = subjectNumber;
    }

    // Getter和Setter方法
    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getSubjectDescription() {
        return subjectDescription;
    }

    public void setSubjectDescription(String subjectDescription) {
        this.subjectDescription = subjectDescription;
    }


    public String getSubjectNumber() {
        return subjectNumber;
    }

    public void setSubjectNumber(String subjectNumber) {
        this.subjectNumber = subjectNumber;
    }
}