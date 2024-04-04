package com.example.circle.mapper;


import com.example.circle.model.Subject;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface SubjectMapper {
    @Select("SELECT * FROM subject WHERE subject_id = #{subjectId}")
    Subject getSubjectById(@Param("subjectId") int subjectId);

    @Insert("INSERT INTO subject(subject_name, subject_description, created_at, subject_number) VALUES(#{subjectName}, #{subjectDescription}, #{createdAt}, #{subjectNumber})")
    @Options(useGeneratedKeys = true, keyProperty = "subjectId")
    void insertSubject(Subject subject);

    @Update("UPDATE subject SET subject_name = #{subjectName}, subject_description = #{subjectDescription}, created_at = #{createdAt}, subject_number = #{subjectNumber} WHERE subject_id = #{subjectId}")
    int updateSubject(Subject subject);

    @Delete("DELETE FROM subject WHERE subject_id = #{subjectId}")
    int deleteSubject(@Param("subjectId") int subjectId);

    @Select("SELECT * FROM subject")
    List<Subject> getAllSubjects();

    @Select("SELECT * FROM subject WHERE subject_number = #{subjectNumber}")
    Subject getSubjectByNumber(@Param("subjectNumber") String subjectNumber);
}