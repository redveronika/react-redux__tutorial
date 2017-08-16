import React from 'react';
import {connect} from "react-redux";

const Messages = ({message}) => (
    message
        ? <span className="message">{message}</span>
        : null
);

export default connect(
    (state) => ({message: state.message})
)(Messages);