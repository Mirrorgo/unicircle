package com.example.circle.mapper;

import com.example.circle.model.Type;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import java.util.List;

@Mapper
public interface TypeMapper {
    @Select("SELECT * FROM type WHERE subject_number = #{subjectNumber}")
    List<Type> findAllBySubjectNumber(@Param("subjectNumber") String subjectNumber);
}