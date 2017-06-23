import React from 'react';

const getClassName = (message) =>
    message.from_id === 1 ? 'self' : 'other';

const Message = ({message}) => <li className={getClassName(message)}><div className="message"><p>{message.body}</p></div></li>;

export default Message