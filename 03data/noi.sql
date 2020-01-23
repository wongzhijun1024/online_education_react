/*
Navicat MySQL Data Transfer

Source Server         : sky
Source Server Version : 50718
Source Host           : cdb-8ve1tr5a.cd.tencentcdb.com:10007
Source Database       : noi

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2020-01-22 20:56:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ad_topic
-- ----------------------------
DROP TABLE IF EXISTS `ad_topic`;
CREATE TABLE `ad_topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '视频主题id',
  `at_name` varchar(255) DEFAULT NULL COMMENT '视频名字',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ad_topic
-- ----------------------------

-- ----------------------------
-- Table structure for ad_video
-- ----------------------------
DROP TABLE IF EXISTS `ad_video`;
CREATE TABLE `ad_video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `av_url` varchar(255) DEFAULT NULL,
  `av_name` varchar(255) DEFAULT NULL,
  `ad_topic_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ad_video
-- ----------------------------

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `type` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'admin', 'admin', '0');

-- ----------------------------
-- Table structure for chapters
-- ----------------------------
DROP TABLE IF EXISTS `chapters`;
CREATE TABLE `chapters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '课程的章节',
  `course_id` int(11) NOT NULL,
  `c_order` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chapters
-- ----------------------------
INSERT INTO `chapters` VALUES ('13', '基础教程', '1', '0');
INSERT INTO `chapters` VALUES ('14', '控制语句', '1', '2');
INSERT INTO `chapters` VALUES ('15', '函数', '1', '2');
INSERT INTO `chapters` VALUES ('16', '数组', '1', '2');
INSERT INTO `chapters` VALUES ('17', '指针', '1', '2');
INSERT INTO `chapters` VALUES ('18', '对象类', '1', '0');
INSERT INTO `chapters` VALUES ('19', '继承', '1', '0');
INSERT INTO `chapters` VALUES ('20', '多态', '1', '0');
INSERT INTO `chapters` VALUES ('21', '数据结构算法基础', '2', '0');
INSERT INTO `chapters` VALUES ('22', '数组', '2', '0');
INSERT INTO `chapters` VALUES ('23', '哈希表', '2', '0');
INSERT INTO `chapters` VALUES ('24', '链表', '2', '0');
INSERT INTO `chapters` VALUES ('25', '堆栈', '2', '0');
INSERT INTO `chapters` VALUES ('26', '队列', '2', '0');

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '0：未发布；1：更新中；2：完结',
  `name` varchar(255) NOT NULL,
  `introduce` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `ctype` int(11) NOT NULL DEFAULT '0' COMMENT '0，免费；1，普通会员；2，超级会员；',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of courses
-- ----------------------------
INSERT INTO `courses` VALUES ('1', '0', 'C++', '一个面向对象的编程语言', 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg', '1', '0');
INSERT INTO `courses` VALUES ('2', '0', '数据结构', '一个面向对象语言', '/noi/image/2019-9-22-908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg', '0', '0');
INSERT INTO `courses` VALUES ('3', '0', 'Java', '一个面向对象语言', '/noi/image/2019-9-22-908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg', '0', '0');
INSERT INTO `courses` VALUES ('9', '0', 'python', 'python是一个好课程', '/noi/image/2019-9-31-b151f8198618367aa7f3cc7424738bd4b31ce525.jpg', '0', '1');
INSERT INTO `courses` VALUES ('10', '1', 'JavaScript', '这是一个客户端语言', '/noi/image/2019-9-31-20180106092947462.png', '2', '1');
INSERT INTO `courses` VALUES ('11', '2', '我是语文', '这是一门前端语言', '/noi/image/2019-10-23-1.png', '6', '1');

-- ----------------------------
-- Table structure for exam_chapter
-- ----------------------------
DROP TABLE IF EXISTS `exam_chapter`;
CREATE TABLE `exam_chapter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chapter_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of exam_chapter
-- ----------------------------
INSERT INTO `exam_chapter` VALUES ('68', '14', '5');
INSERT INTO `exam_chapter` VALUES ('69', '13', '1');
INSERT INTO `exam_chapter` VALUES ('70', '13', '2');
INSERT INTO `exam_chapter` VALUES ('71', '13', '3');
INSERT INTO `exam_chapter` VALUES ('72', '13', '4');
INSERT INTO `exam_chapter` VALUES ('73', '13', '1');
INSERT INTO `exam_chapter` VALUES ('74', '13', '2');
INSERT INTO `exam_chapter` VALUES ('75', '13', '3');
INSERT INTO `exam_chapter` VALUES ('76', '13', '4');
INSERT INTO `exam_chapter` VALUES ('77', '13', '1');
INSERT INTO `exam_chapter` VALUES ('78', '13', '2');
INSERT INTO `exam_chapter` VALUES ('79', '13', '3');
INSERT INTO `exam_chapter` VALUES ('80', '13', '4');
INSERT INTO `exam_chapter` VALUES ('81', '18', '5');
INSERT INTO `exam_chapter` VALUES ('82', '18', '6');
INSERT INTO `exam_chapter` VALUES ('83', '18', '5');
INSERT INTO `exam_chapter` VALUES ('84', '18', '6');
INSERT INTO `exam_chapter` VALUES ('85', '13', '1');
INSERT INTO `exam_chapter` VALUES ('86', '13', '2');
INSERT INTO `exam_chapter` VALUES ('87', '13', '3');
INSERT INTO `exam_chapter` VALUES ('88', '13', '4');
INSERT INTO `exam_chapter` VALUES ('89', '13', '1');
INSERT INTO `exam_chapter` VALUES ('90', '13', '2');
INSERT INTO `exam_chapter` VALUES ('91', '13', '3');
INSERT INTO `exam_chapter` VALUES ('92', '13', '4');
INSERT INTO `exam_chapter` VALUES ('93', '13', '1');
INSERT INTO `exam_chapter` VALUES ('94', '13', '2');
INSERT INTO `exam_chapter` VALUES ('95', '13', '3');
INSERT INTO `exam_chapter` VALUES ('96', '13', '4');
INSERT INTO `exam_chapter` VALUES ('97', '13', '1');
INSERT INTO `exam_chapter` VALUES ('98', '13', '2');
INSERT INTO `exam_chapter` VALUES ('99', '13', '3');
INSERT INTO `exam_chapter` VALUES ('100', '13', '4');
INSERT INTO `exam_chapter` VALUES ('101', '13', '1');
INSERT INTO `exam_chapter` VALUES ('102', '13', '2');
INSERT INTO `exam_chapter` VALUES ('103', '13', '3');
INSERT INTO `exam_chapter` VALUES ('104', '13', '4');

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `fileId` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of files
-- ----------------------------
INSERT INTO `files` VALUES ('1', '1570761655988.jpg', 'teacher1');
INSERT INTO `files` VALUES ('2', '123', 'vedio123');
INSERT INTO `files` VALUES ('3', '123', 'vedio123');
INSERT INTO `files` VALUES ('4', '123', 'vedio123');
INSERT INTO `files` VALUES ('5', '123', 'vedio123');

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `chapter_id` int(11) NOT NULL,
  `textA` varchar(255) NOT NULL COMMENT '正确答案',
  `textB` varchar(255) NOT NULL,
  `textC` varchar(255) NOT NULL,
  `textD` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of questions
-- ----------------------------
INSERT INTO `questions` VALUES ('1', '第一个选择题', '13', '第一个选项', '第二个选项', '第三个选项', '第四个选项', 'textA');
INSERT INTO `questions` VALUES ('2', '第二个选择题', '13', '第一个选项', '第二个选项', '第三个选项', '第四个选项', 'textA');
INSERT INTO `questions` VALUES ('3', '第三个选择题', '13', '第一个选项', '第二个选项', '第三个选项', '第四个选项', 'textA');
INSERT INTO `questions` VALUES ('4', '第四个选择题', '13', '第一个选项', '第二个选项', '第三个选项', '第四个选项', 'textA');
INSERT INTO `questions` VALUES ('5', '第一个选择题', '18', '第一个选项', '第二个选项', '第三个选项', '第四个选项', 'textB');
INSERT INTO `questions` VALUES ('6', '第二个选择题', '18', '我是A', '我是B', '我是C', '我是D', 'textB');
INSERT INTO `questions` VALUES ('7', '第4个选择题', '2', '第一个选项', '第二个选项', '第三个选项', '第四个选项', 'textA');
INSERT INTO `questions` VALUES ('8', '第4个选择题', '2', '第一个选项', '第二个选项', '第三个选项', '第四个选项', 'textA');
INSERT INTO `questions` VALUES ('9', '第4个选择题', '2', '第一个选项', '第二个选项', '第三个选项', '第四个选项', 'textA');
INSERT INTO `questions` VALUES ('10', '第4个选择题', '2', '第一个选项', '第二个选项', '第三个选项', '第四个选项', 'textA');
INSERT INTO `questions` VALUES ('11', '第4个选择题', '2', '第一个选项', '第二个选项', '第三个选项', '第四个选项', 'textA');

-- ----------------------------
-- Table structure for teachers
-- ----------------------------
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `tkey` varchar(255) NOT NULL,
  `introduce` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teachers
-- ----------------------------
INSERT INTO `teachers` VALUES ('6', '王老师', '/noi/image/2020-0-13-IMG_0350.JPG', '很好');
INSERT INTO `teachers` VALUES ('7', '黄老师', '/noi/image/2020-0-13-IMG_0350.JPG', '黄老师');
INSERT INTO `teachers` VALUES ('8', '你好老师', '/noi/image/2020-0-13-IMG_0350.JPG', '这是一个java老师');
INSERT INTO `teachers` VALUES ('9', '舒老师', '/noi/image/2020-0-13-IMG_0350.JPG', '这是一个JavaScript老师老师');
INSERT INTO `teachers` VALUES ('10', '何老师', '/noi/image/2020-0-13-IMG_0350.JPG', '这是一个PHP老师');
INSERT INTO `teachers` VALUES ('11', '向日葵', '/noi/image/2020-0-13-IMG_0350.JPG', '这是一个Python老师');

-- ----------------------------
-- Table structure for videos
-- ----------------------------
DROP TABLE IF EXISTS `videos`;
CREATE TABLE `videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `chapter_id` int(11) NOT NULL,
  `v_order` varchar(255) NOT NULL DEFAULT '0' COMMENT '排序',
  `url` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of videos
-- ----------------------------
INSERT INTO `videos` VALUES ('1', '第一个程序', '13', '0', '/noi/video/2019-10-1-02渲染.mp4');
INSERT INTO `videos` VALUES ('2', '输入输出', '13', '0', '/noi/video/2019-10-1-02demo.mp4');
INSERT INTO `videos` VALUES ('3', '关键字', '13', '0', '/noi/video/2019-10-1-02demo.mp4');
INSERT INTO `videos` VALUES ('4', '运算符', '13', '0', '/noi/video/2019-10-4-ajax_post.mp4');
INSERT INTO `videos` VALUES ('5', 'if/else语句', '14', '0', '/noi/video/2019-10-4-01express.mp4');
INSERT INTO `videos` VALUES ('6', 'switch', '14', '0', '0');
INSERT INTO `videos` VALUES ('7', 'for循环', '14', '0', '0');
INSERT INTO `videos` VALUES ('8', 'while循环', '14', '4', '0');
INSERT INTO `videos` VALUES ('9', 'do-while循环', '14', '5', '0');
INSERT INTO `videos` VALUES ('10', 'break语句', '14', '6', '0');
INSERT INTO `videos` VALUES ('11', '函数', '15', '0', '0');
INSERT INTO `videos` VALUES ('12', '通过值调用和引用调用', '15', '1', '0');
INSERT INTO `videos` VALUES ('13', '函数递归', '15', '2', '0');
INSERT INTO `videos` VALUES ('14', '数组', '16', '0', '/noi/video/2019-10-1-ajax_post.mp4');
INSERT INTO `videos` VALUES ('15', '将数组传递到函数', '16', '0', '/noi/video/2019-10-1-02路由.mp4');
INSERT INTO `videos` VALUES ('16', '多维数组', '16', '3', '0');
INSERT INTO `videos` VALUES ('17', '数据结构渐近分析', '21', '0', '0');
INSERT INTO `videos` VALUES ('18', '数据结构基本概念', '21', '0', '0');
INSERT INTO `videos` VALUES ('19', '数组基本概念', '22', '0', '0');
INSERT INTO `videos` VALUES ('20', '数组基本操作', '22', '1', '0');
INSERT INTO `videos` VALUES ('21', '哈希', '23', '0', '0');
INSERT INTO `videos` VALUES ('22', '线性探测', '23', '0', '0');
INSERT INTO `videos` VALUES ('23', '基本操作', '23', '0', '0');
INSERT INTO `videos` VALUES ('24', '链表基本概念', '24', '0', '/noi/video/2020-0-9-QQ图片20191212132457.jpg');
INSERT INTO `videos` VALUES ('25', '双向链表', '24', '2', '0');
INSERT INTO `videos` VALUES ('26', '循环链表', '24', '3', '0');
