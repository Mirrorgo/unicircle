package com.example.circle.mapper;

import com.example.circle.model.Topic;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface TopicMapper {
    @Select("SELECT * FROM topic WHERE subject_number = #{subjectNumber}")
    List<Topic> getAllTopicsBySubjectNumber(@Param("subjectNumber") String subjectNumber);

    @Select("SELECT * FROM topic WHERE subject_number = #{subjectNumber} AND tag = #{tag}")
    List<Topic> getTopicsBySubjectNumberAndTag(@Param("subjectNumber") String subjectNumber, @Param("tag") String tag);
}