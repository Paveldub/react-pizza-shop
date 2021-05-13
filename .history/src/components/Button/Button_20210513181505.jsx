import React from 'react';
import classNames from 'classnames';

export const Button = (props) => {
  return (
    <>
      <button className={classNames('button')}>{props.children}</button>
    </>
  );
}

