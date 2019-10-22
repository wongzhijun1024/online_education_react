package com.ff.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.ff.pojo.Topic;

@Mapper
public interface TopicMapper {
	/**
	 * 查询所有科目
	 * @return 返回所有的科目
	 */
    List<Topic> selectTopics();
    
    /**
     *  插入新科目
     * @param topic  插入新科目
     * @return 是否插入成功
     */
    int insert(Topic topic);
    
    /**
     *  删除科目
     * @param topic  删除的科目
     * @return  是否删除成功
     */
     int delTopic(Topic topic);
     
     /**
 	 * 查询指定科目
 	 * @return 科目对象
 	 */
     Topic selectTopic(String name);
}