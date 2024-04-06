package com.example.circle.controller;

import com.example.circle.dto.TopicCreateRequest;
import com.example.circle.dto.TopicInfoDto;
import com.example.circle.model.Topic;
import com.example.circle.service.TopicService;
import com.example.circle.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subjects/topics")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TopicController {

    private final TopicService topicService;

    @Autowired
    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @GetMapping("/list1")
    public ResponseEntity<?> getAllTopicsBySubjectNumberAndTypeId(
            @RequestParam String subjectNumber,
            @RequestParam(required = false) String typeId) {
        if (typeId == null || typeId.isEmpty()) {
            // 只按subjectNumber获取
            return new ResponseEntity<>(topicService.getAllTopicsBySubjectNumber(subjectNumber), HttpStatus.OK);
        } else {
            // 同时按subjectNumber和typeId获取
            return new ResponseEntity<>(topicService.getTopicsBySubjectNumberAndTypeId(subjectNumber, typeId), HttpStatus.OK);
        }
    }
    @PostMapping("/create")
    public ResponseEntity<Result<Topic>> createTopic(
            @RequestBody TopicCreateRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED).body(topicService.createTopic(request));
    }
//    @GetMapping("/getTopicsBySubjectNumberAndTag/{subjectNumber}/{tag}")
//    public ResponseEntity<Result<List<Topic>>> getTopicsBySubjectNumberAndTag(@PathVariable String subjectNumber, @PathVariable String tag) {
//        Result<List<Topic>> result = topicService.getTopicsBySubjectNumberAndTag(subjectNumber, tag);
//        return ResponseEntity.ok(result);
//    }

    @GetMapping("/list")
    public ResponseEntity<?> getDetailedTopicsBySubjectNumberAndTypeId(
            @RequestParam String subjectNumber,
            @RequestParam(required = false) String typeId) {
        return ResponseEntity.ok(topicService.getTopicDetailsBySubjectNumberAndTypeId(subjectNumber, typeId));
    }

    @GetMapping("/get")
    public ResponseEntity<Result<TopicInfoDto>> getTopicById(@RequestParam String topicId) {
        return ResponseEntity.ok(topicService.getTopicById(topicId));
    }
}