import React from 'react';
import auth from '../../auth/Auth';
import {Row, Col, Card} from "antd";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={{span: 8, push: 8}}>
                        <Card title={"Welcome User"}>
                            <p>User Dashboard</p>
                            <button onClick={() => {
                                auth.logout(() => {
                                    this.props.history.push('/login');
                                })
                            }}>Logout
                            </button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
