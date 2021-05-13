import React from 'react';
import classNames from 'classnames';

export const Button = (props) => {
  console.log(props);

  return (
    <>
      <button
        onClick={props.onClick}
        className={classNames('button', props.className, {
          'button--outline': props.outline
        })}>

        {props.children}
      </button>
    </>
  );
}

