package com.ff.pojo;

import java.util.List;

public class Question {
    private Integer qId;

    private String question;

    private String qCourse;

    private String qType;

    private String qHard;

    private String a;

    private String b;

    private String c;

    private String d;

    private Integer qScore;

    private String answer;
    
    private Integer row;
    
    private Integer page;
    
    private ExampaperInfo exampaperInfo;
    
    public ExampaperInfo getExampaperInfo() {
		return exampaperInfo;
	}

	public void setExampaperInfo(ExampaperInfo exampaperInfo) {
		this.exampaperInfo = exampaperInfo;
	}

	private List<Exampaper> exampaper;

    public List<Exampaper> getExampaper() {
		return exampaper;
	}

	public void setExampaper(List<Exampaper> exampaper) {
		this.exampaper = exampaper;
	}

	@Override
	public String toString() {
		return "Question [qId=" + qId + ", question=" + question + ", qCourse=" + qCourse + ", qType=" + qType
				+ ", qHard=" + qHard + ", a=" + a + ", b=" + b + ", c=" + c + ", d=" + d + ", qScore=" + qScore
				+ ", answer=" + answer + ", row=" + row + ", page=" + page + "]";
	}

	public Integer getRow() {
		return row;
	}

	public void setRow(Integer row) {
		this.row = row;
	}

	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getqId() {
        return qId;
    }

    public void setqId(Integer qId) {
        this.qId = qId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getqCourse() {
        return qCourse;
    }

    public void setqCourse(String qCourse) {
        this.qCourse = qCourse;
    }

    public String getqType() {
        return qType;
    }

    public void setqType(String qType) {
        this.qType = qType;
    }

    public String getqHard() {
        return qHard;
    }

    public void setqHard(String qHard) {
        this.qHard = qHard;
    }

    public String getA() {
        return a;
    }

    public void setA(String a) {
        this.a = a;
    }

    public String getB() {
        return b;
    }

    public void setB(String b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }

    public String getD() {
        return d;
    }

    public void setD(String d) {
        this.d = d;
    }

    public Integer getqScore() {
        return qScore;
    }

    public void setqScore(Integer qScore) {
        this.qScore = qScore;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}