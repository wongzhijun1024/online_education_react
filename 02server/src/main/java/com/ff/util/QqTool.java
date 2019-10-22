package com.ff.util;

import java.util.Calendar;

public class QqTool {

	public QqTool() {

	}

	private void getName(String oldFileName) {
		String eName = oldFileName.substring(oldFileName.lastIndexOf("."));
		Calendar cal = Calendar.getInstance();
		int year = cal.get(Calendar.YEAR);
		int month = cal.get(Calendar.MONTH);
		int day = cal.get(Calendar.DATE);
	}

}
