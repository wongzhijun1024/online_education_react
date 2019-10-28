package com.ff.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ff.dao.FilesMapper;
import com.ff.pojo.MyFile;
import com.ff.service.FilesService;

@Service
public class FilesServiceImpl implements FilesService {

	@Autowired
	private FilesMapper filesMapper;

	@Override
	public int insertFile(MyFile file) {
		return filesMapper.insert(file);
	}

	@Override
	public List<MyFile> selectFileById(MyFile file) {
		return filesMapper.selectFileById(file);
	}

}
