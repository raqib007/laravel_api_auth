import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Form, Input, Button, Checkbox, Row, Col, Card} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import auth from '../../auth/Auth';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className={"pt-8"}><Row>
                <Col md={{span:8,push:8}} sm={{span:20,push:2}} xs={{span:20,push:2}}>
                    <Card title={"Login"} bordered={false}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                        onClick={()=>{
                                            auth.login(()=>{
                                                this.props.history.push("/dashboard");
                                            })
                                        }}
                                >
                                    Log in
                                </Button>
                                 &nbsp;&nbsp;Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row></div>
        );
    }
}

export default withRouter(Login);
