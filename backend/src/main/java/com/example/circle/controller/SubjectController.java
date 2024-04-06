package com.example.circle.controller;

import com.example.circle.model.Subject;
import com.example.circle.service.SubjectService;
import com.example.circle.util.Result;
import com.example.circle.util.ResultCode;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/subjects")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SubjectController {

    private final SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @GetMapping("/getSubjectById/{subjectId}")
    public ResponseEntity<Result<Subject>> getSubjectById(@PathVariable String subjectId) {
        Result<Subject> result = subjectService.getSubjectById(subjectId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Result<Void>> createSubject(@RequestBody Subject subject) {
        Result<Void> result = subjectService.insertSubject(subject);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

//    @GetMapping("/getAllSubject")
//    public ResponseEntity<Result<List<Subject>>> getAllSubjects() {
//        Result<List<Subject>> result = subjectService.getAllSubjects();
//        return new ResponseEntity<>(result, HttpStatus.OK);
//    }

    @PutMapping("/updateSubject/{subjectId}")
    public ResponseEntity<Result<Void>> updateSubject(@PathVariable String subjectId, @RequestBody Subject subject) {
        subject.setSubjectId(subjectId); // Ensure the subject ID is set correctly from the path variable
        Result<Void> result = subjectService.updateSubject(subject);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @DeleteMapping("/deleteSubject/{subjectId}")
    public ResponseEntity<Result<Void>> deleteSubject(@PathVariable String subjectId) {
        Result<Void> result = subjectService.deleteSubject(subjectId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

//    @GetMapping("/getByNumber/{subjectNumber}")
//    public ResponseEntity<Result<Subject>> getSubjectByNumber(@PathVariable String subjectNumber) {
//        Result<Subject> result = subjectService.getSubjectByNumber(subjectNumber);
//        return new ResponseEntity<>(result, HttpStatus.OK);
//    }

    @GetMapping("list")
    public ResponseEntity<Result<List<Subject>>> getSubjects(@RequestParam(required = false) String subjectNumber) {
        if (subjectNumber == null || subjectNumber.isEmpty()) {
            Result<List<Subject>> result = subjectService.getAllSubjects();
            return new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            Result<Subject> singleResult = subjectService.getSubjectByNumber(subjectNumber);
            // 检查单个结果是否成功并且数据不为空，然后将其包装为列表
            List<Subject> resultList = singleResult.getCode().equals(ResultCode.SUCCESS.getCode()) && singleResult.getData() != null
                    ? Collections.singletonList(singleResult.getData())
                    : Collections.emptyList();
            // 将单个结果包装后的列表作为数据返回
            Result<List<Subject>> result = new Result<>(singleResult.getCode(), singleResult.getMsg(), resultList);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
}