package com.ff.pojo;

public class Score {
    private Integer scId;

    private String studentName;

    private Integer score;

    private String eTitle;
    
    private int page;
    
    private int row;

    public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getRow() {
		return row;
	}

	public void setRow(int row) {
		this.row = row;
	}

	public Score(String studentName, String eTitle) {
		super();
		this.studentName = studentName;
		this.eTitle = eTitle;
	}

	public Score(String studentName, Integer score, String eTitle) {
		super();
		this.studentName = studentName;
		this.score = score;
		this.eTitle = eTitle;
	}

	public Score() {
		super();
	}

	@Override
	public String toString() {
		return "Score [scId=" + scId + ", studentName=" + studentName + ", score=" + score + ", eTitle=" + eTitle + "]";
	}

	public Integer getScId() {
        return scId;
    }

    public void setScId(Integer scId) {
        this.scId = scId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String geteTitle() {
        return eTitle;
    }

    public void seteTitle(String eTitle) {
        this.eTitle = eTitle;
    }
}