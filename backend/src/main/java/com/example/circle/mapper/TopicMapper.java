package com.example.circle.mapper;

import com.example.circle.dto.TopicDetailDto;
import com.example.circle.dto.TopicInfoDto;
import com.example.circle.model.Topic;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface TopicMapper {
    @Select("SELECT * FROM topic WHERE subject_number = #{subjectNumber}")
    List<Topic> getAllTopicsBySubjectNumber(@Param("subjectNumber") String subjectNumber);

    @Select("SELECT * FROM topic WHERE subject_number = #{subjectNumber} AND type_id = #{typeId}")
    List<Topic> getTopicsBySubjectNumberAndTypeId(@Param("subjectNumber") String subjectNumber, @Param("typeId") String typeId);

    @Insert("INSERT INTO topic (topic_id, user_id, subject_number, title, body, image_url, type_id, created_at, updated_at) VALUES (#{topicId}, #{userId}, #{subjectNumber}, #{title}, #{body}, #{imageUrl}, #{typeId}, #{createdAt}, #{updatedAt})")
    void insertTopic(Topic topic);

    @Select("<script>" +
            "SELECT " +
            "t.topic_id, t.title, t.body, t.image_url, t.created_at, t.updated_at, t.user_id, t.type_id, t.subject_id, " +
            "u.username, ty.type_name, " +
            "(SELECT COUNT(*) FROM comments c WHERE c.topic_id = t.topic_id) AS commentNumber " +
            "FROM topic t " +
            "LEFT JOIN users u ON t.user_id = u.user_id " +
            "LEFT JOIN type ty ON t.type_id = ty.type_id " +
            "WHERE t.subject_number = #{subjectNumber} " +
            "<if test='typeId != null and !\"\".equals(typeId)'>" +
            "AND t.type_id = #{typeId} " +
            "</if>" +
            "</script>")
    @Results({
            @Result(property = "topicId", column = "topic_id"),
            @Result(property = "userId", column = "user_id"),
            @Result(property = "typeId", column = "type_id"),
            @Result(property = "subjectId", column = "subject_id"),
            @Result(property = "title", column = "title"),
            @Result(property = "body", column = "body"),
            @Result(property = "imageUrl", column = "image_url"),
            @Result(property = "createdAt", column = "created_at"),
            @Result(property = "updatedAt", column = "updated_at"),
            @Result(property = "username", column = "username"),
            @Result(property = "typeName", column = "type_name"),
            @Result(property = "commentNumber", column = "commentNumber")
    })
    List<TopicDetailDto> getTopicDetailsBySubjectNumberAndTypeId(@Param("subjectNumber") String subjectNumber, @Param("typeId") String typeId);

    @Select("SELECT t.body, t.created_at, t.image_url, t.subject_number, t.title, ty.type_name, u.username " +
            "FROM topic t " +
            "JOIN type ty ON t.type_id = ty.type_id " +
            "JOIN users u ON t.user_id = u.user_id " +
            "WHERE t.topic_id = #{topicId}")
    @Results({
            @Result(property = "body", column = "body"),
            @Result(property = "createdAt", column = "created_at"),
            @Result(property = "imageUrl", column = "image_url"),
            @Result(property = "subjectNumber", column = "subject_number"),
            @Result(property = "title", column = "title"),
            @Result(property = "typeName", column = "type_name"),
            @Result(property = "username", column = "username")
    })
    TopicInfoDto getTopicById(@Param("topicId") String topicId);

}
