package com.example.circle.mapper;

import com.example.circle.model.Comment;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CommentMapper {
    @Select("SELECT * FROM comments WHERE topic_id = #{topicId}")
    List<Comment> getCommentsByTopicId(@Param("topicId") String topicId);
}
