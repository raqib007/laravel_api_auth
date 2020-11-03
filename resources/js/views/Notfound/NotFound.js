import React from 'react';
import {Card, Col, Row} from "antd";

const style={
    paddingTop:'80px',
    textAlign:'center'
};

export const NotFound = () => (
    <div style={style}>
        <Row><Col md={{span:8,push:8}}><Card><h4>404 NOT FOUND!</h4></Card></Col></Row>
    </div>
);
