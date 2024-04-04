package com.example.circle.controller;

import com.example.circle.model.Topic;
import com.example.circle.service.TopicService;
import com.example.circle.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/topics")
public class TopicController {

    private final TopicService topicService;

    @Autowired
    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @GetMapping("/getAllTopicsBySubjectNumber/{subjectNumber}")
    public ResponseEntity<Result<List<Topic>>> getAllTopicsBySubjectNumber(@PathVariable String subjectNumber) {
        Result<List<Topic>> result = topicService.getAllTopicsBySubjectNumber(subjectNumber);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/getTopicsBySubjectNumberAndTag/{subjectNumber}/{tag}")
    public ResponseEntity<Result<List<Topic>>> getTopicsBySubjectNumberAndTag(@PathVariable String subjectNumber, @PathVariable String tag) {
        Result<List<Topic>> result = topicService.getTopicsBySubjectNumberAndTag(subjectNumber, tag);
        return ResponseEntity.ok(result);
    }
}