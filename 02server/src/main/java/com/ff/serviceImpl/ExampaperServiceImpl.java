package com.ff.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.ff.dao.ExampaperInfoMapper;
import com.ff.dao.ExampaperMapper;
import com.ff.pojo.Exampaper;
import com.ff.service.ExampaperService;
@Service
public class ExampaperServiceImpl implements ExampaperService{

	@Autowired
	private ExampaperMapper exampaperMapper;
	@Autowired
	ExampaperInfoMapper exampaperInfoMapper;
	@Override
	public int selectCount(Exampaper e) {
		// TODO Auto-generated method stub
		return exampaperMapper.selectCount(e);
	}

	@Override
	public List<Exampaper> selectExampaper(Exampaper e) {
		// TODO Auto-generated method stub
		return exampaperMapper.selectExampaper(e);
	}

	@Override
	public int insertExampaper(Exampaper record) {
		// TODO Auto-generated method stub
		return exampaperMapper.insertExampaper(record);
	}

	@Override
	public int deleteByPrimaryKey(Integer eId) {
		// TODO Auto-generated method stub
		return exampaperMapper.deleteByPrimaryKey(eId);
	}

	@Override
	public Exampaper selectByEtitle(String eTitle) {
		// TODO Auto-generated method stub
		return exampaperMapper.selectByEtitle(eTitle);
	}
	
	@Transactional(isolation = Isolation.REPEATABLE_READ)
	@Override
	public int delBatchExampaper(List<String> list) {
		// TODO Auto-generated method stub
		int r1 = exampaperInfoMapper.deleteByEid(list);
		int r2 = exampaperMapper.delBatchExampaper(list);
		if (r1>0&&r2>0) {
			return 1;
		}else {
			return 0;
			}
	}

	@Override
	public List<Exampaper> selectAllExampaper(Exampaper e) {
		// TODO Auto-generated method stub
		return exampaperMapper.selectAllExampaper(e);
	}
}
