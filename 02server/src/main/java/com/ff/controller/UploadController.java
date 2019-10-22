package com.ff.controller;

import com.ff.pojo.UploadMsg;
import com.ff.util.CosTool;
import com.qcloud.cos.COSClient;
import com.qcloud.cos.ClientConfig;
import com.qcloud.cos.auth.BasicCOSCredentials;
import com.qcloud.cos.auth.COSCredentials;
import com.qcloud.cos.model.PutObjectRequest;
import com.qcloud.cos.model.PutObjectResult;
import com.qcloud.cos.region.Region;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.Calendar;
import java.util.UUID;

@CrossOrigin(origins = { "http://localhost:3000", "null" })
@Controller
@RequestMapping("/noi")
public class UploadController {

	// @Value("${spring.tengxun.accessKey}")
	// private String accessKey;
	//
	// @Value("${spring.tengxun.secretKey}")
	// private String secretKey;
	// @Value("${spring.tengxun.bucket}")
	// private String bucket;
	// @Value("${spring.tengxun.Region}")
	// private String Region;
	// @Value("${spring.tengxun.path}")
	// private String path;
	// @Value("${spring.tengxun.tengxun}")
	// private String tengxun;

	/**
	 * 上传到腾讯云服务器（https://cloud.tencent.com/document/product/436/10199）
	 * 
	 * @return
	 */

	@RequestMapping(value = "/image", method = RequestMethod.POST)
	@ResponseBody
	public Object UploadImage(@RequestParam(value = "file") MultipartFile file, HttpSession session) {

		CosTool cosTool = new CosTool();

		return null;
	}

	@RequestMapping(value = "/video", method = RequestMethod.POST)
	@ResponseBody
	public Object UploadVideo(@RequestParam(value = "file") MultipartFile file, HttpSession session) {

		CosTool cosTool = new CosTool();

		// UploadMsg msg = cosTool.uploadFile(CosTool.VIDEO_FOLDER, file);
		return null;

	}

}
