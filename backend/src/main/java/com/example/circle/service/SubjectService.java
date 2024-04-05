package com.example.circle.service;



import com.example.circle.model.Subject;
import com.example.circle.util.Result;
import java.util.List;

public interface SubjectService {
    Result<Subject> getSubjectById(String subjectId);
    Result<Void> insertSubject(Subject subject);
    Result<Void> updateSubject(Subject subject);
    Result<Void> deleteSubject(String subjectId);
    Result<List<Subject>> getAllSubjects();
    Result<Subject> getSubjectByNumber(String subjectNumber);
}