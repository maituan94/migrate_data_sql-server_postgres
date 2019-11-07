import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table } from '../../components';
import * as selector from './state/selector';
import Create from './Create';
import { PrimaryButton } from '../../components/Button/index';
import { getListData } from './state/action';
//Add Data
import Data from './data'

// const dataSources = require('./data.json');

const listColumns = () => [
  {
    accessor: 'key',
    Header: 'key',
  },
  {
    accessor: 'self',
    Header: 'Self',
  },
  {
    accessor: 'summary',
    Header: 'Summary',
  },
];

function Dashboard({
  loadData,
  list,
}) {
  const [show, setShow] = useState(false);

  const handleClickOpen = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };

  useEffect(() => {

    loadData();
  }, Data);
  // console.log("Dữ liệu sau khi lấy là: ", Data);
  console.log("Dữ liệu list khi lấy là: ", list);

  return (
    <div className="list-data-container">
      <div className="iot-header-container">
        <PrimaryButton
          // icon={iconList.xoAdd}
          size={20}
          color="primary"
          text="Add new"
          onClick={handleClickOpen}
        />
      </div>

      <div>
        {/* <div className="content-title">
          <h3 className="xo-sub-title">{('cleaning-object.label.title')}</h3>
        </div> */}
        {/* <div className="xo-multi-table">
          <Table
            // loading={isLoading}
            data={list}
            total={list.total}
            columns={listColumns()}
            showPagination
            noDataText=""
            // onPagingFn={loadCleaningObject}
            // SubComponent={props => <SubComponent original={props.original} />}
          />
        </div> */}
        <table className="table">
          <thead>
            <tr>
              <th>Key</th>
              <th>Self</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {list.map((value, key) => {
              return(
                <tr key={key}>
                <td >{value.key}</td>
                <td >{value.self}</td>
                <td >{value.summary}</td>
              </tr>
              );

            })}

          </tbody>
        </table>

        <Create show={show} onClose={onClose} />
      </div>
    </div>

  );
}
const mapStatetoProps = (state) => ({
  list: selector.selectList(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(getListData()),
});
export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(Dashboard);
