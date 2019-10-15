package com.ff.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ff.dao.ExampaperInfoMapper;
import com.ff.pojo.ExampaperInfo;
import com.ff.service.ExampaperInfoService;

@Service
public class ExampaperInfoServiceImpl implements ExampaperInfoService{
	@Autowired
	ExampaperInfoMapper eMapper;
	@Override
	public int insertExampaperInfo(ExampaperInfo record) {
		// TODO Auto-generated method stub
		return eMapper.insertExampaperInfo(record);
	}
}
