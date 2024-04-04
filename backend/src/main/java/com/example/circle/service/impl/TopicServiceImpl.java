package com.example.circle.service.impl;

import com.example.circle.mapper.TopicMapper;
import com.example.circle.model.Topic;
import com.example.circle.service.TopicService;
import com.example.circle.util.Result;
import com.example.circle.util.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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
            return ResultUtil.success(topics);
        } catch (Exception e) {
            return ResultUtil.error("Failed to retrieve topics: " + e.getMessage());
        }
    }

    @Override
    @Transactional(readOnly = true)
    public Result<List<Topic>> getTopicsBySubjectNumberAndTag(String subjectNumber, String tag) {
        try {
            List<Topic> topics = topicMapper.getTopicsBySubjectNumberAndTag(subjectNumber, tag);
            return ResultUtil.success(topics);
        } catch (Exception e) {
            return ResultUtil.error("Failed to retrieve topics by tag: " + e.getMessage());
        }
    }
}