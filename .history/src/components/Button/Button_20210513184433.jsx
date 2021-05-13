import React from 'react';
import classNames from 'classnames';

export const Button = ({ outline, className }) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={classNames('button', className, {
          'button--outline': outline,
        })}
      >
        {props.children}
      </button>
    </>
  );
};

