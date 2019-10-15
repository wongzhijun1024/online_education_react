package com.ff.util;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.multipart.MultipartFile;

import com.ff.pojo.UploadMsg;
import com.qcloud.cos.COSClient;
import com.qcloud.cos.ClientConfig;
import com.qcloud.cos.auth.BasicCOSCredentials;
import com.qcloud.cos.auth.COSCredentials;
import com.qcloud.cos.http.HttpMethodName;
import com.qcloud.cos.model.GeneratePresignedUrlRequest;
import com.qcloud.cos.model.PutObjectRequest;
import com.qcloud.cos.model.PutObjectResult;
import com.qcloud.cos.region.Region;

public class CosTool {

	private final String accessKey = "AKID8A1hUmP2wfDc2HBDwTp0OejeOyNdHbJq";

	private final String secretKey = "LZbTBmCbrwqY8Xk6JJ9nMl7M3ZxACXns";

	private final String bucket = "chengd-1253990303";
	private final String Region = "ap-chengdu";
	private final String path = "LZbTBmCbrwqY8Xk6JJ9nMl7M3ZxACXns";
	private final String tengxun = "noi";

	private final String videoFolder = "video";// 1

	private final String imageFolder = "image";// 2

	public static final int VIDEO_FOLDER = 0;// video 0
	public static final int IMAGE_FOLDER = VIDEO_FOLDER + 1;// image 1

	COSClient cosclient = null;

	public CosTool() {

	}

	public COSClient getCosclient() {
		if (cosclient != null)
			return cosclient;
		// 1 初始化用户身份信息(accessKey, secretKey)
		COSCredentials cred = new BasicCOSCredentials(this.accessKey, this.secretKey);
		// 2 设置bucket的区域, COS地域的简称请参照
		// https://cloud.tencent.com/document/product/436/6224
		ClientConfig clientConfig = new ClientConfig(new Region(this.Region));
		// 3 生成cos客户端
		COSClient cosclient = new COSClient(cred, clientConfig);
		return cosclient;

	}

	public UploadMsg uploadFile(int type, MultipartFile file) {
		if (file == null) {
			return new UploadMsg(0, "文件为空", "", null);
		}
		String oldFileName = file.getOriginalFilename();
		String name = oldFileName.substring(0, oldFileName.lastIndexOf("."));
		Calendar cal = Calendar.getInstance();
		int year = cal.get(Calendar.YEAR);
		int month = cal.get(Calendar.MONTH);
		int day = cal.get(Calendar.DATE);

		// 简单文件上传, 最大支持 5 GB, 适用于小文件上传, 建议 20 M 以下的文件使用该接口
		// 大文件上传请参照 API 文档高级 API 上传
		File localFile = null;

		String fileType = "";
		switch (type) {
		case VIDEO_FOLDER:
			fileType = videoFolder;
			break;
		case IMAGE_FOLDER:
			fileType = imageFolder;
			break;
		}

		try {
			localFile = File.createTempFile("temp", null);
			file.transferTo(localFile);
			// 指定要上传到 COS 上的路径
			String key = "/" + this.tengxun + "/" + fileType + "/" + year + "-" + month + "-" + day + "-" + oldFileName;
			PutObjectRequest putObjectRequest = new PutObjectRequest(this.bucket, key, localFile);
			PutObjectResult putObjectResult = getCosclient().putObject(putObjectRequest);
			return new UploadMsg(1, "上传成功", name, putObjectRequest.getKey());
		} catch (IOException e) {
			return new UploadMsg(-1, e.getMessage(), "", null);
		} finally {
			// 关闭客户端(关闭后台线程)
			destroy();
		}
	}

	public String getUrl(String key) {
		GeneratePresignedUrlRequest req = new GeneratePresignedUrlRequest(bucket, key, HttpMethodName.GET);
		// 设置签名过期时间(可选), 若未进行设置, 则默认使用 ClientConfig 中的签名过期时间(1小时)
		// 这里设置签名在半个小时后过期
		Date expirationDate = new Date(System.currentTimeMillis() + 60L * 60L * 1000L);
		req.setExpiration(expirationDate);
		URL downloadUrl = getCosclient().generatePresignedUrl(req);
		String downloadUrlStr = downloadUrl.toString();
		return downloadUrlStr;
	}

	public void destroy() {
		if (cosclient != null) {
			cosclient.shutdown();
			cosclient = null;
		}

	}

	// public URL picCOS(String key) throws Exception {
	//
	// Date expiration = new Date(new Date().getTime() + 5 * 60 * 10000);
	// URL url = cosClient.generatePresignedUrl(this.bucket, key, expiration);
	// return url;
	// }

}
