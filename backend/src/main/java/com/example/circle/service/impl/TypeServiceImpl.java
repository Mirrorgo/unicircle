package com.example.circle.service.impl;

import com.example.circle.mapper.TypeMapper;
import com.example.circle.model.Type;
import com.example.circle.service.TypeService;
import com.example.circle.util.Result;
import com.example.circle.util.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class TypeServiceImpl implements TypeService {

    private final TypeMapper typeMapper;

    @Autowired
    public TypeServiceImpl(TypeMapper typeMapper) {
        this.typeMapper = typeMapper;
    }

    @Override
    @Transactional(readOnly = true)
    public Result<List<Type>> getAllTypesBySubjectNumber(String subjectNumber) {
        try {
            List<Type> types = typeMapper.findAllBySubjectNumber(subjectNumber);
            if (types.isEmpty()) {
                return ResultUtil.error("No types found for the given subject number.");
            }
            return ResultUtil.success(types);
        } catch (Exception e) {
            return ResultUtil.error("Failed to retrieve types: " + e.getMessage());
        }
    }
}