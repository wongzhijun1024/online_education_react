package com.ff.pojo;

public class Student {
    private Integer sId;

    private String sName;

    private String sPwd;
    
    private int row;
    
    private int page;
    
    private String valCode;
    
    
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

	public String getValCode() {
		return valCode;
	}

	public void setValCode(String valCode) {
		this.valCode = valCode;
	}

    @Override
	public String toString() {
		return "Student [sId=" + sId + ", sName=" + sName + ", sPwd=" + sPwd + "]";
	}

	public Integer getsId() {
        return sId;
    }

    public void setsId(Integer sId) {
        this.sId = sId;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public String getsPwd() {
        return sPwd;
    }

    public void setsPwd(String sPwd) {
        this.sPwd = sPwd;
    }
}