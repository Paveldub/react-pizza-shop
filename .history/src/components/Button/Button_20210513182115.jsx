import React from 'react';
import classNames from 'classnames';

export const Button = (props) => {
  
  return (
    <>
      <button
        onClick={props.onClick}
        className={classNames('button', {
        'button--outline': props.outline
      })}>{props.children}</button>
    </>
  );
}

