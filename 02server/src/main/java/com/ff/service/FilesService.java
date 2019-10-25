package com.ff.service;

import java.util.List;

import com.ff.pojo.MyFile;

public interface FilesService {

	/**
	 * 
	 * @param 文件对象
	 * @return 是否成功插入的标志
	 */
	int insertFile(MyFile file);

	/**
	 * 
	 * @param file
	 * @return
	 */
	List<MyFile> selectFileById(MyFile file);

}
