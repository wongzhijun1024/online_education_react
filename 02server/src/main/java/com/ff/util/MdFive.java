package com.ff.util;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.apache.commons.codec.binary.Base64;
import org.springframework.stereotype.Component;

/**
 * md5加密算法
 */
@Component
public class MdFive {

	   /** @param str 待加密的字符串
	     * @return  加密后的字符串
	     * @throws NoSuchAlgorithmException  
	     * @throws UnsupportedEncodingException  
	     */
	    public  String EncoderByMdFive(String str) throws NoSuchAlgorithmException, UnsupportedEncodingException{
	        //MessageDigest为java.security中自带的类，为应用程序提供信息摘要算法的功能，如 MD5 算法
	        MessageDigest md=MessageDigest.getInstance("MD5");
	        //更新数据
	        md.update(str.getBytes("utf-8"));
	        /**
	         * Base64是网络上最常见的用于传输8Bit字节代码的编码方式之一，
	         * 在发送电子邮件时，服务器认证的用户名和密码需要用Base64编码，
	         * 附件也需要用Base64编码
	         * 
	         * digest() 哈希计算，转换成成字节
	         * encodeBase64String()转换成字符串
	         */
	        return  Base64.encodeBase64String(md.digest());
	    }

	    /**判断用户密码是否正确
	     * @param newpasswd  用户输入的密码
	     * @param oldpasswd  数据库中存储的密码－－用户密码的摘要
	     * @return
	     * @throws NoSuchAlgorithmException
	     * @throws UnsupportedEncodingException
	     */
	    public  boolean checkpassword(String newpasswd,String oldpasswd) throws NoSuchAlgorithmException, UnsupportedEncodingException{
	        if(EncoderByMdFive(newpasswd).equals(oldpasswd))
	            return true;
	        else
	            return false;
	    }
}
