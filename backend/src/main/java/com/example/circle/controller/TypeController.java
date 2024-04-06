package com.example.circle.controller;

import com.example.circle.model.Type;
import com.example.circle.service.TypeService;
import com.example.circle.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subjects/types")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TypeController {

    private final TypeService typeService;

    @Autowired
    public TypeController(TypeService typeService) {
        this.typeService = typeService;
    }

    @GetMapping("/list")
    public ResponseEntity<Result<List<Type>>> getAllTypesBySubjectNumber(@RequestParam String subjectNumber) {
        return ResponseEntity.ok(typeService.getAllTypesBySubjectNumber(subjectNumber));
    }
}