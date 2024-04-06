package com.example.circle.model;

public class Type {
    private String typeId;
    private String typeName;
    private String subjectNumber;

    // 构造函数
    public Type(String typeId, String typeName, String subjectNumber) {
        this.typeId = typeId;
        this.typeName = typeName;
        this.subjectNumber = subjectNumber;
    }

    // Getter和Setter
    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getSubjectNumber() {
        return subjectNumber;
    }

    public void setSubjectNumber(String subjectNumber) {
        this.subjectNumber = subjectNumber;
    }
}