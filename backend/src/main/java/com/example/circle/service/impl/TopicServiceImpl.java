package com.example.circle.service.impl;

import com.example.circle.dto.TopicCreateRequest;
import com.example.circle.dto.TopicDetailDto;
import com.example.circle.dto.TopicInfoDto;
import com.example.circle.mapper.TopicMapper;
import com.example.circle.model.Topic;
import com.example.circle.service.TopicService;
import com.example.circle.util.Result;
import com.example.circle.util.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class TopicServiceImpl implements TopicService {

    private final TopicMapper topicMapper;

    @Autowired
    public TopicServiceImpl(TopicMapper topicMapper) {
        this.topicMapper = topicMapper;
    }

    // 现有方法

    @Override
    @Transactional(readOnly = true)
    public Result<List<Topic>> getAllTopicsBySubjectNumber(String subjectNumber) {
        try {
            List<Topic> topics = topicMapper.getAllTopicsBySubjectNumber(subjectNumber);
            if (topics.isEmpty()) {
                return ResultUtil.error("No topics found for the given subject number.");
            }
            return ResultUtil.success(topics);
        } catch (Exception e) {
            return ResultUtil.error("Failed to retrieve topics: " + e.getMessage());
        }
    }

    @Override
    @Transactional(readOnly = true)
    public Result<List<Topic>> getTopicsBySubjectNumberAndTypeId(String subjectNumber, String typeId) {
        try {
            List<Topic> topics = topicMapper.getTopicsBySubjectNumberAndTypeId(subjectNumber, typeId);
            if (topics.isEmpty()) {
                return ResultUtil.error("No topics found for the given subject number and type ID.");
            }
            return ResultUtil.success(topics);
        } catch (Exception e) {
            return ResultUtil.error("Failed to retrieve topics by type ID: " + e.getMessage());
        }
    }

    @Override
    public Result<List<TopicDetailDto>> getTopicDetailsBySubjectNumberAndTypeId(String subjectNumber, String typeId) {
        List<TopicDetailDto> topics = topicMapper.getTopicDetailsBySubjectNumberAndTypeId(subjectNumber, typeId);
        if (topics.isEmpty()) {
            return ResultUtil.error("No topics found.");
        }
        return ResultUtil.success(topics);
    }
    @Override
    @Transactional
    public Result<Topic> createTopic(TopicCreateRequest request) {
        Topic topic = new Topic();
        topic.setTopicId(UUID.randomUUID().toString());
        topic.setUserId(request.getUserId());
        topic.setSubjectNumber(request.getSubjectNumber());
        topic.setTitle(request.getTitle());
        topic.setBody(request.getBody());
        topic.setTypeId(request.getTypeId());
        topic.setImageUrl(request.getImageUrl());
        topic.setCreatedAt(new Date());
        topic.setUpdatedAt(new Date()); // 根据需要设置
        topicMapper.insertTopic(topic);
        return ResultUtil.success(topic);
    }

    @Override
    public Result<TopicInfoDto> getTopicById(String topicId) {
        try {
            TopicInfoDto topicInfo = topicMapper.getTopicById(topicId);
            if (topicInfo == null) {
                return ResultUtil.error("No topic found with the given ID.");
            }
            return ResultUtil.success(topicInfo);
        } catch (Exception e) {
            return ResultUtil.error("Failed to retrieve topic: " + e.getMessage());
        }
    }
}