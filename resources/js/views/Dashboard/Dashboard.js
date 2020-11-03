import React from 'react';
import auth from '../../auth/Auth';
import {Row, Col, Card, Button} from "antd";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{paddingTop:'80px'}}>
                <Row>
                    <Col md={{span: 8, push: 8}}>
                        <Card title={"Welcome User"} bordered={false}>
                            <p>User Dashboard</p>
                            <Button onClick={() => {
                                auth.logout(() => {
                                    this.props.history.push('/login');
                                })
                            }}>Logout
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
