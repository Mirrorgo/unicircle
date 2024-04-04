package com.example.circle.service;

import com.example.circle.model.Topic;
import com.example.circle.util.Result;

import java.util.List;

public interface TopicService {
    Result<List<Topic>> getAllTopicsBySubjectNumber(String subjectNumber);
    Result<List<Topic>> getTopicsBySubjectNumberAndTag(String subjectNumber, String tag);
}