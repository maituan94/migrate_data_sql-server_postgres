import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Form } from 'react-bootstrap';
import { PrimaryButton, SecondaryButton } from '../../../components/Button/index';
import { showSuccessToast } from '../../../services/toasterService';
import * as selector from '../state/selector';
import { createJiraIssue, resetCreate, getListData } from '../state/action';

const CreateJiraIssue = (props) => {
  const {
    show,
    onClose,
    createJiraIssueFn,
    resetCreateFn,
    loadData,
    saveSuccessfully,
  } = props;

  const [inputValues, setInputValues] = useState({
    summary: '',
    description: '',
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const {
    summary,
    description,
  } = inputValues;

  const onSubmit = () => {
    const params = {
      summary,
      description,
    };
    createJiraIssueFn(params);
  };

  useEffect(() => {    
    if (saveSuccessfully === true) {
      showSuccessToast('Issue have been created successfully');
      resetCreateFn();
      setInputValues({ ...inputValues, summary: '', description: '' });
      loadData();
      onClose();
    }
  }, [saveSuccessfully]);


  return (
    <>
      <Modal show={show} onHide={onClose} size="lg" backdrop="static" keyboard={false} centered>
        <Modal.Header className="iot-modal-header">
          <Modal.Title className="iot-modal-title">
            Create Issue
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="iot-modal-body">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Summary</Form.Label>
              <Form.Control type="text" name="summary" value={summary} onChange={handleOnChange} placeholder="Enter Summary" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" value={description} onChange={handleOnChange} placeholder="Enter Description" />
            </Form.Group>
          </Form>
          <div className="iot-modal-footer">
            <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
            <PrimaryButton onClick={onSubmit}>Save</PrimaryButton>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

CreateJiraIssue.propTypes = {
  show: PropTypes.bool.isRequired,
};
const mapStatetoProps = (state) => ({
  list: selector.selectList(state),
  saveSuccessfully: selector.selectSaveSuccessfully(state),
});

const mapDispatchToProps = (dispatch) => ({
  createJiraIssueFn: (input) => dispatch(createJiraIssue(input)),
  resetCreateFn: () => dispatch(resetCreate()),
  loadData: () => dispatch(getListData()),
});
export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(CreateJiraIssue);
