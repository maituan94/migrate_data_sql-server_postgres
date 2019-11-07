export const GET_LIST_DATA_REQUEST = 'GET_LIST_DATA_REQUEST';
export const GET_LIST_DATA_SUCCESS = 'GET_LIST_DATA_SUCCESS';
export const GET_LIST_DATA_ERROR = 'GET_LIST_DATA_ERROR';

export const CREATE_JIRA_ISSUE_REQUEST = 'CREATE_JIRA_ISSUE_REQUEST';
export const CREATE_JIRA_ISSUE_SUCCESS = 'CREATE_JIRA_ISSUE_SUCCESS';
export const CREATE_JIRA_ISSUE_ERROR = 'CREATE_JIRA_ISSUE_ERROR';
export const RESET_CREATE = 'RESET_CREATE';

export const getListData = (data) => ({
  type: GET_LIST_DATA_REQUEST,
  payload:data
});

export const createJiraIssue = (input) => ({
  type: CREATE_JIRA_ISSUE_REQUEST,
  payload: input,
});

export const resetCreate = () => ({
  type: RESET_CREATE,
});
export default {};
