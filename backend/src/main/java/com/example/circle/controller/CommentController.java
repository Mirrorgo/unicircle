package com.example.circle.controller;

import com.example.circle.model.Comment;
import com.example.circle.service.CommentService;
import com.example.circle.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/list")
    public ResponseEntity<Result<List<Comment>>> getCommentsByTopicId(@RequestParam String topicId) {
        Result<List<Comment>> result = commentService.getCommentsByTopicId(topicId);
        return ResponseEntity.ok(result);
    }
}