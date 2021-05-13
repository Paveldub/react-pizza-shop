import React from 'react';
import classNames from 'classnames';

function Button ({ outline, className, onClick, children }) {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames('button', className, {
          'button--outline': outline,
        })}
      >
        {children}
      </button>
    </>
  );
};
