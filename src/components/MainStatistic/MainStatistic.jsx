import React from "react";
import { Card, Col, Row } from "antd";

import "./MainStatistic.css";

const MainStatistic = (props) => {

    const {total_cases, total_deaths, total_recovered} = props.info;
    return (
        <>
            <div className="site-card-wrapper">
                <Row gutter={10} className="stat-row">
                    <Col span={8} className="stat-item">
                        <Card
                            title="Заболевших"
                            bordered={true}
                            className="stat-card"
                        >
                            {total_cases}
                        </Card>
                    </Col>
                    <Col span={8} className="stat-item">
                        <Card
                            title="Смертей"
                            bordered={true}
                            className="stat-card"
                        >
                            {total_deaths}
                        </Card>
                    </Col>
                    <Col span={8} className="stat-item">
                        <Card
                            title="Выздоровевших"
                            bordered={true}
                            className="stat-card"
                        >
                            {total_recovered}
                        </Card>
                    </Col>
                </Row>
            </div>

            <br/>
        </>
    );
};

export default MainStatistic;
