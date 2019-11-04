package com.ff.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.ff.pojo.MyFile;

@Mapper
public interface FilesMapper {
	/**
	 * 
	 * @param 文件对象
	 * @return 是否成功插入的标志
	 */
	int insert(MyFile file);

	/**
	 * 
	 * @param file
	 * @return 文件列表
	 */
	List<MyFile> selectFileById(MyFile file);

}