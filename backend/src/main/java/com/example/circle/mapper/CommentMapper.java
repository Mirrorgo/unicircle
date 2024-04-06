package com.example.circle.mapper;

import com.example.circle.model.Comment;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CommentMapper {
    @Select("SELECT * FROM comments WHERE topic_id = #{topicId}")
    List<Comment> getCommentsByTopicId(@Param("topicId") String topicId);

    @Insert("INSERT INTO comments(comment_id, topic_id, parent_comment_id, username, comment, created_at, user_id) VALUES(#{commentId}, #{topicId}, #{parentCommentId}, #{username}, #{comment}, #{createdAt}, #{userId})")
    void insertComment(Comment comment);
}
