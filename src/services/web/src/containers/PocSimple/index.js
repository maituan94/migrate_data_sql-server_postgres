import React, { useEffect } from 'react';
// import Data from './data.json';
import { connect } from 'react-redux';
import * as selector from './state/selector';
import { getListData } from './state/action';
const { Table } = require('antd');

const columns = [
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Replacement test in progress',
    dataIndex: 'testProcess',
    key: 'testProcess',
    render:(value)=>{
      if(value){
        return <span className="green-text">Yes</span>
      }
      return <span>No</span>
    }
  },
  {
    title:"Status",
    dataIndex: 'status',
    key:'status',
    render:(value)=>{
      if(value==='IA'){
        return <span className="grey-text">Inactive</span>
      }
      if(value==='IU'){
        return <span className="green-text">In use</span>
      }
      return <span className="orange-text">Not in Use</span>
    }
  },
  {
    title:"",
    key:'action',
    render:(record)=>{
      return(
        <div className="action-col">
          <img className="action-item" alt="" src="/icon/ic-edit.svg" />
          <img className="action-item"  alt="" src="/icon/ic-view-details.svg" />
          {record.status === "IA"?<span className="action-item green-text" >Active</span>:<span className="action-item" >Deactive</span>}
        </div>
      )
    }
      
  }
];

const PocSimple = ({ loadData, list }) => {
  useEffect(() => {
    loadData()
  },[]);
  return (
    <div className="poc-simple">
      <Table pagination={{ pageSize: 10 }} columns={columns} dataSource={list.list} bordered={true} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: selector.selectList(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(getListData())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PocSimple);