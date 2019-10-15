package com.ff.pojo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
/**
 * 树形节点pojo(easyui树形)
 * 作者： 伍军
 * 功能描述：
 */
@Component
public class Node {
	
	//节点的 id
	private Integer id;
	//显示的节点文字。
	private String text;
	//节点状态， 'open' 或 'closed'，默认是 'open'
	private String state;

	//指示节点是否被选中
	private boolean checked;
	//定义了一些子节点的节点数组
	private List<Node> children;
	//父节点
	private Integer parentId;
	
	/**
	 * 注意：需要在构造函数创建子节点对象
	 */
	public Node(){
		this.children = new ArrayList<Node>(); 
	}
	public Integer getParentId() {
		return parentId;
	}
	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}

	public boolean isChecked() {
		return checked;
	}
	public void setChecked(boolean checked) {
		this.checked = checked;
	}
	public List<Node> getChildren() {
		return children;
	}
	public void setChildren(List<Node> children) {
		this.children = children;
	}
}
