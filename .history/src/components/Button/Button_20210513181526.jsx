import React from 'react';
import classNames from 'classnames';

export const Button = (props) => {
  return (
    <>
      <button className={classNames('button', {
        'button--outline': outline
      })}>{props.children}</button>
    </>
  );
}

