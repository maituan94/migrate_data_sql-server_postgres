import React from 'react';
import { Modal,Button } from 'antd';
const AddRawMaterial = (props) => {
  return (
    <Modal
      title="ADD RAW MATERIAL"
      width="60%"
      visible={props.visible}
      className='addRaw'
      onCancel={props.handleCancel}
      footer={[
        <Button className="btn-cancel" key="back" onClick={props.handleCancel}>
          CANCEL
        </Button>,
        <Button className="btn-ok" key="submit" type="primary" onClick={props.handleOk}>
          SAVE
        </Button>,
      ]}
      >
      {props.children}
    </Modal>

  );
}

export default AddRawMaterial;