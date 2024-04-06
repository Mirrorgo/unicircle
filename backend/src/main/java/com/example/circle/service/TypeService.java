package com.example.circle.service;

import com.example.circle.model.Type;
import com.example.circle.util.Result;
import java.util.List;

public interface TypeService {
    Result<List<Type>> getAllTypesBySubjectNumber(String subjectNumber);
}