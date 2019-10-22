import React from "react";
import "./Add.css";
import { Table,Upload, message,Icon, Button,Cascader } from "antd";
import net from "../../../utils/net";

// 添加数据
const options = [
  {
    value: 'C++',
    label: 'C++',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: '数据结构',
    label: '数据结构',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
  {
    value: 'Python',
    label: 'Python',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
  {
    value: 'Java',
    label: 'Java',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
function onChange(value) {
  console.log(value);
};

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      size: 'large',
      selectedRowKeys: [],
      loading: false
    };
  }

  newData() {
    for (let i = 0; i < 46; i++) {
      this.state.data.push({
        key: i,
        type: `Edward King ${i}`,
        chapter: 'bdehbchde',
      });
    }
  }
  start = () => {
    this.setState({
      loading: true
    });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };


  deletUser(id) {
    let length = this.state.data.length;
    let data = this.state.data;
    for (let i = 0; i < length; i++) {
      if (data[i].id == id) {
        data.splice(i, 1);
        data[i]=data[i-1];  
        break;
      }
    }
    this.setState({
      data: data
    });
  };


  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({
      selectedRowKeys
    });
  };

  
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  showAdd() { 
    this.refs.addBox.style.display = 'block';
  };
  closeAdd() {
    this.refs.addBox.style.display = 'none';
  };

  
  render() {
    const { size } = this.state;
    const columns = [
            {
                title: '课程ID',
                dataIndex: 'id',
                key: 'id',
                render: text => <a>{text}</a>,
            },
            {
                title: '科目',
                dataIndex: 'type',
                key: 'types',
                render: text => <a>{text}</a>,
            },
            {
                title: '章节',
                dataIndex: 'chapter',
                key: 'chapter',
            },
            {
                title: '题库文件',
                dataIndex: 'file',
                key: 'file',
            },
            {
                title: '是否删除',
                key: 'action',
                render: (text, record) => (
                    <span>
                        {/* <a>Invite {record.name}</a> */}
                        {/* <Divider type="vertical" /> */}
                        {/* //传入text的id作为实参 */}
                        <a onClick={this.deletUser.bind(this, text.id)}>删除</a>
                    </span>
                ),
            },
    ];
    
    const {
      loading,
      selectedRowKeys
    } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    
    return (
      <div className="addView">
        <div className="addExam">
          <span className="addTitle">题库添加</span>
        </div>
        <div className="btnBox">
          <Button icon="plus" className="addBtn" size={size} style={{ backgroundColor: '#32CCA8', color: 'white' }} onClick={this.showAdd.bind(this)}>
          添加
        </Button>
        <Button icon="delete" className="deleteBtn" size={size} style={{backgroundColor:'#E6BC1A',color:'white'}}>
          删除
        </Button>
        </div>
        <div className="examBox">
          <div className="listContent"><Icon type="unordered-list" />内容列表</div>
          <div className="addBox" ref='addBox'>
           <div className="add">
             <div className="addType">
                 <span>科目类型：</span>
                 <Cascader
                   defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                   options={options}
                   onChange={onChange}
                   className='typeBtn'
                 />
             </div>
            <Upload {...props} className="upBtn">
                    <Button>
                    <Icon type="upload" /> 上传试卷
                    </Button>
            </Upload>
              <Button className="savaBtn" ref="savaBtn" onClick={this.closeAdd.bind(this)}>保存</Button>
            </div>
          </div>
           <div>
        <div>
          <span>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
      </div>
        </div>
      </div>
    );
  }
}
