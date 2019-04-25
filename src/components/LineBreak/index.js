import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';

const LineBreak = (props) => {
  return (
    (props.vertical) ? (
      <div className="col-md-2">
        <div className="vl"></div>
        <div className="p-2">{props.label}</div>
        <div className="vl"></div>
      </div>
    ) : (
      <div>
        <div className="vl"></div>
        <div className="p-2">{props.label}</div>
        <div className="vl"></div>
      </div>
    )
  )
};

export default withStyles(s)(LineBreak);