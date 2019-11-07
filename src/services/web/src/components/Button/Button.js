import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Icon, { IconSize, iconSizes, iconList } from '../Icon/Icon';
import './button.scss';

// const btnIcon = ({
//   icon, iconSize, color, text,
// }) => (
//   <>
//     { icon ? <IconSize size={iconSize} icon={icon} color={color} /> : null }
//     {text}
//   </>
// );

function ZoiButton(props) {
  const {
    styles, children, loading,
    disabled, iconSize, text, ...rest
  } = props;

  const { icon } = props;
  const classWithIcon = classNames({ 'btn-with-icon': icon });
  const disableFlag = !!disabled || loading;
  return (
    <Button className={`btn-zoi ${classWithIcon} ${styles}`} { ...rest } disabled={disableFlag}>
      {/* {loading && <Icon customclass="icon-spinner-spin" icon={iconList.reload} size={16} />} */}
      {
       children || text
      }
    </Button>
  );
}

ZoiButton.propTypes = {
  icon: PropTypes.any,
  //   iconSize: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  styles: PropTypes.string,
  variant: PropTypes.string,
  loading: PropTypes.bool,
};

ZoiButton.defaultProps = {
  icon: null,
  //   iconSize: iconSizes.MEDIUM,
  color: '',
  text: '',
  styles: '',
  variant: 'zoi-default',
  loading: false,
};

export default ZoiButton;
