import React from "react";
import "./CourseBank.css";
import net from "../../../../utils/net";
import { Table, Input, Button, Icon, Select,TreeSelect,Radio} from "antd";
import E from 'wangeditor';
const { Option } = Select;
const columns = [
  {
    title: '题干',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '类型',
    dataIndex: 'age',
  },
  {
    title: '最后更新',
    dataIndex: 'address',
  },
  {
    title: '操作',
    dataIndex: 'action',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    action:'Delete',
  },
  
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};


function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

export default class CourseBank extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      fileList: [],
      searchText: "",
      value: undefined,
      treeData: [
        { id: 1, pId: 0, value: '1', title: '本课程' , isLeaf: true },
        { id: 2, pId: 0, value: '2', title: '其他课程', isLeaf: true  },
      ],
      editorContent:''
    };
  }

  
 
  oneSelect() {
    console.log("点击弹出页面");
    this.refs.selectPage.style.display = "block";
    this.refs.AddTitlepage.style.display = "block";
  }
  saveButtonpage=()=>{
    console.log("点击页面消失");
    this.refs.selectPage.style.display = "none";
    this.refs.AddTitlepage.style.display = "none";
  }

  genTreeNode = (parentId, isLeaf = false) => {
    const random = Math.random()
      .toString(36)
      .substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    };
  };

  onLoadData = treeNode =>
    new Promise(resolve => {
      const { id } = treeNode.props;
      setTimeout(() => {
        this.setState({
          treeData: this.state.treeData.concat([
            this.genTreeNode(id, false),
            this.genTreeNode(id, true),
          ]),
        });
        resolve();
      }, 300);
    });

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };
  componentDidMount() {
    const elemMenu = this.refs.editorElemMenu;
    const elemBody = this.refs.editorElemBody;
    const editor = new E(elemMenu,elemBody)
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
        console.log(editor.txt.html())
        this.setState({
            // editorContent: editor.txt.text()
            editorContent: editor.txt.html()
        })
    }
    editor.customConfig.menus = [
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'list',  // 列表
        'justify',  // 对齐方式
        'quote',  // 引用
        'emoticon',  // 表情
        'image',  // 插入图片
        'table',  // 表格
        'video',  // 插入视频
        'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
    ]
    editor.customConfig.uploadImgShowBase64 = true
    editor.create()

};

  render() {
    
    const { treeData } = this.state;
    return (
      <div className="coursesBank-1">
        <div className="addCourseList">
          <div className="addCourseTitle">
            <span>课程题库</span>
            <Button
              type="primary"
              style={{ background: "#278BF5" }}
              onClick={this.oneSelect.bind(this)}
            >
              +单选题
            </Button>
          </div>

          <div className="courseBankSelect">
            <Select
              showSearch
              style={{ width: 130 }}
              placeholder="--按题型--"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="单选">单选题</Option>
              <Option value="多选">多选题</Option>
              <Option value="问答">问答题</Option>
            </Select>
            <Select
              showSearch
              style={{ width: 130 }}
              placeholder="按课程"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="语文">语文</Option>
              <Option value="数学">数学</Option>
              <Option value="英语">英语</Option>
            </Select>
            <Input
              placeholder="关键字"
              allowClear
              onChange={onChange}
              style={{ width: 200 }}
            />
            ,
            <Button
              value="small"
              type="primary"
              style={{ background: "#43BB60" }}
              className="selectOne"
            >
              搜索
            </Button>
            <Button
              value="small"
              type="primary"
              style={{ background: "#43BB60" }}
            >
              导出题目
            </Button>
          </div>

          <div className="BankTable">
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
          </div>
          <div className="BlankTableDel">
          <Radio className="b-butten">全选</Radio>
          <Button type="primary" style={{ background: "#ECECEC" }}>删除</Button>
          </div>
          {/* 单选框弹出页面 */}
          <div className="RadioPage" ref="selectPage"></div>
          <div className="AddTitle" ref="AddTitlepage">
            <div className="BankpageTop">
            <p>课程题库 / 添加题目 / 单选框</p>
            </div>
           {/* 弹出页面内容 */}
           <div className="BankPageContent">
             <div className="blankSelect bankPublic">
             <div className="bankline">从属 </div>
             <TreeSelect
        treeDataSimpleMode
        style={{ width: 200 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="请选择课程"
        onChange={this.onChange}
        loadData={this.onLoadData}
        treeData={treeData}
      />
             </div>
           <div className="BankPageradio bankPublic">
             <div className="bankline2">难度 </div>
    <Radio.Group name="radiogroup" defaultValue={1}>
      <Radio value={1}>简单</Radio>
      <Radio value={2}>一般</Radio>
      <Radio value={3}>困难</Radio>
    </Radio.Group>
           </div>
           
           <div className="BanktxtShop">
           <div className="bankline3">题干 </div>
                <div className="text-area" >
                    <div ref="editorElemMenu"
                         style={{backgroundColor:'#f1f1f1',border:"1px solid #ccc"}}
                         className="editorElem-menu">

                    </div>
                    <div
                        style={{
                            padding:"0 10px",
                            overflowY:"scroll",
                            height:300,
                            border:"1px solid #ccc",
                            borderTop:"none"
                        }}
                        ref="editorElemBody" className="editorElem-body">

                    </div>
                </div>
            </div>

           </div>

            <div className="savebutton">
              <Button type="primary" onClick={this.saveButtonpage} style={{ background: "#43BB60" }}>保存并继续添加</Button>
              <Button type="primary" onClick={this.saveButtonpage} style={{ background: "#43BB60" }} className="BankButtonCenter">保存</Button>
              <Button type="link" onClick={this.saveButtonpage} style={{ color: "black" }}>返回</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
