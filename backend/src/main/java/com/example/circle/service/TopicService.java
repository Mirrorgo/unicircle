package com.example.circle.service;

import com.example.circle.dto.TopicCreateRequest;
import com.example.circle.dto.TopicDetailDto;
import com.example.circle.dto.TopicInfoDto;
import com.example.circle.model.Topic;
import com.example.circle.util.Result;

import java.util.List;

public interface TopicService {

    Result<List<Topic>> getAllTopicsBySubjectNumber(String subjectNumber);
    Result<List<Topic>> getTopicsBySubjectNumberAndTypeId(String subjectNumber, String typeId);
    Result<Topic> createTopic(TopicCreateRequest request);
    Result<List<TopicDetailDto>> getTopicDetailsBySubjectNumberAndTypeId(String subjectNumber, String typeId);

    Result<TopicInfoDto> getTopicById(String topicId);
}