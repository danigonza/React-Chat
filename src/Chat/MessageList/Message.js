import React from 'react';

const getClassName = (message) =>
    message.from_id === 1 ? 'message message--is-own' : 'message';

export default ({message}) => <li className={getClassName(message)}>{message.body}</li>
