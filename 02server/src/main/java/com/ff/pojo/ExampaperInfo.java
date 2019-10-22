package com.ff.pojo;

import java.util.List;

public class ExampaperInfo {
    private Integer id;

    private Integer eId;

    private Integer qId;

    private Integer score;
    
    
    private List<Exampaper> exampapersList;

    public List<Exampaper> getExampapersList() {
		return exampapersList;
	}
    
	public ExampaperInfo(Integer eId, Integer qId, Integer score) {
		super();
		this.eId = eId;
		this.qId = qId;
		this.score = score;
	}

	public ExampaperInfo(Integer eId, Integer qId, Integer score, List<Exampaper> exampapersList) {
		super();
		this.eId = eId;
		this.qId = qId;
		this.score = score;
		this.exampapersList = exampapersList;
	}

	public ExampaperInfo() {
		super();
	}

	public void setExampapersList(List<Exampaper> exampapersList) {
		this.exampapersList = exampapersList;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer geteId() {
        return eId;
    }

    public void seteId(Integer eId) {
        this.eId = eId;
    }

    public Integer getqId() {
        return qId;
    }

    public void setqId(Integer qId) {
        this.qId = qId;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }
}