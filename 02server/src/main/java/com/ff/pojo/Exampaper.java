package com.ff.pojo;

import java.util.List;

public class Exampaper {
    private Integer eId;

    private String eTitle;

    private String creattime;

    private Integer validatetime;

    private String validity;

    private Integer fulscore;

    private Integer courseId;
    
    private String courseName;
    
    private int row; 
    
    private int page;
    
    
    @Override
	public String toString() {
		return "Exampaper [eId=" + eId + ", eTitle=" + eTitle + ", creattime=" + creattime + ", validatetime="
				+ validatetime + ", validity=" + validity + ", fulscore=" + fulscore + ", courseId=" + courseId
				+ ", courseName=" + courseName + "]";
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	private List<Question> question;
    
 
    

    public Exampaper() {
		super();
	}

	public Exampaper(String eTitle, String creattime, Integer validatetime, String validity, Integer fulscore,
			String courseName) {
		super();
		this.eTitle = eTitle;
		this.creattime = creattime;
		this.validatetime = validatetime;
		this.validity = validity;
		this.fulscore = fulscore;
		this.courseName = courseName;
	}

	public int getRow() {
		return row;
	}

	public void setRow(int row) {
		this.row = row;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public List<Question> getQuestion() {
		return question;
	}

	public void setQuestion(List<Question> question) {
		this.question = question;
	}

	public Integer geteId() {
        return eId;
    }

    public void seteId(Integer eId) {
        this.eId = eId;
    }

    public String geteTitle() {
        return eTitle;
    }

    public void seteTitle(String eTitle) {
        this.eTitle = eTitle;
    }

    public String getCreattime() {
        return creattime;
    }

    public void setCreattime(String creattime) {
        this.creattime = creattime;
    }

    public Integer getValidatetime() {
        return validatetime;
    }

    public void setValidatetime(Integer validatetime) {
        this.validatetime = validatetime;
    }

    public String getValidity() {
        return validity;
    }

    public void setValidity(String validity) {
        this.validity = validity;
    }

    public Integer getFulscore() {
        return fulscore;
    }

    public void setFulscore(Integer fulscore) {
        this.fulscore = fulscore;
    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }
}