package com.example.circle.controller;

import com.example.circle.model.Post;
import com.example.circle.service.PostService;
import com.example.circle.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/newpost")
    public ResponseEntity<Result<Post>> createPost(@RequestBody Post post) {
        Result<Post> result = postService.createPost(post);
        return ResponseEntity.ok(result);
    }
}