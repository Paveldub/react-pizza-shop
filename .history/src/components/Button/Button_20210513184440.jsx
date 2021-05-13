import React from 'react';
import classNames from 'classnames';

export const Button = ({ outline, className, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames('button', className, {
          'button--outline': outline,
        })}
      >
        {props.children}
      </button>
    </>
  );
};

