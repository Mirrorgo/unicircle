package com.example.circle.mapper;

import com.example.circle.model.Post;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PostMapper {
    @Insert("INSERT INTO post(post_id, user_id, description, label, location, price, address) VALUES(#{post.postId}, #{post.userId}, #{post.description}, #{post.label}, #{post.location}, #{post.price}, #{post.address})")
    void insertPost(@Param("post") Post post);
}