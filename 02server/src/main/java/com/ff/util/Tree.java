package com.ff.util;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSON;
import com.ff.pojo.Node;


/**
 * 采用递归的方式生成树形数据结构
 * 作者： 伍军
 * 功能描述：
 */
@Component
public class Tree {
	/**
	 * 生成树
	 * @param list 需要的转换的数据
	 * @return 返回转换成功的树形数据
	 */
	public  List<Node> createTree(LinkedList<Node> list){
		//poll方法检索并移除此列表的头元素并且返回列表的头元素
		Node n = list.poll();
		//创建一个新的集合来加载树形数据
		LinkedList<Node> newList = new LinkedList<Node>();
		
		/**
		 * 遍历集合，如果此节点有子节点，就添加到他的子节点集合里
		 */
		for(Node node:list){
			if(node.getParentId()==n.getId()){
				n.getChildren().add(node);
			}
		}
		
		//把节点添加到新集合中去
		newList.add(n);
		//如果集合中还有数据，就采用递归调用，否则结束递归
		if(list.size()>0){
			createTree(list);
		}
		
		return newList;
	
	}
	
	public static void main(String args[]){
	/*	LinkedList<Node> list = new LinkedList<Node>();
		Node one = new Node();
		one.setId(0);
		one.setParentId(null);
		one.setText("根");
		list.add(one);
		
		Node two = new Node();
		two.setId(1);
		two.setParentId(0);
		two.setText("one");
		list.add(two);
		
		Node three = new Node();
		three.setId(2);
		three.setParentId(0);
		three.setText("two");
		list.add(three);
		
		List<Node> ll =createTree(list);
		
		System.out.println(JSON.toJSONString(ll));*/
	}
	
}
