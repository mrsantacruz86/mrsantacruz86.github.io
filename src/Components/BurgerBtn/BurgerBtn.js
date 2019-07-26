import React from 'react';
import PropTypes from 'prop-types';
import './BurgerBtn.css';

const BurgerBtn = props => {
  const changed = !props.changed ? '' : ' change';
  return (
    <div onClick={props.onClick}>
      <svg
        className="burgerBtn"
        version="1.1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || '100px'}
        height={props.size || '100px'}
      >
        <svg version="1.1">
          <g
            fill="none"
            stroke={props.color || '#000'}
            strokeLinecap={props.linecap || 'flat'}
            strokeWidth="15"
          >
            <path className={'btnBar1' + changed} d="M10 20h80" />
            <path className={'btnBar2' + changed} d="M10 50h80" />
            <path className={'btnBar3' + changed} d="M10 80h80" />
          </g>
        </svg>
      </svg>
    </div>
  );
};

BurgerBtn.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

export default BurgerBtn;
