import React from "react";
import { Card, Col, Row } from "antd";

import "./MainStatistic.css";

const MainStatistic = (props) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const { total_cases, total_deaths, total_recovered } = props.info;
    return (
        <>
            <div className="site-card-wrapper">
                <Row gutter={10} className="stat-row">
                    <Col span={8} className="stat-item">
                        <Card
                            title="Всего заболевших"
                            bordered={true}
                            className="stat-card"
                        >
                            <span className="colored-blue">
                                {numberWithCommas(total_cases)}
                            </span>
                        </Card>
                    </Col>
                    <Col span={8} className="stat-item">
                        <Card
                            title="Смертей"
                            bordered={true}
                            className="stat-card"
                        >
                            <span className="colored-red">
                                {numberWithCommas(total_deaths)}
                            </span>
                        </Card>
                    </Col>
                    <Col span={8} className="stat-item">
                        <Card
                            title="Выздоровевших"
                            bordered={true}
                            className="stat-card"
                        >
                            <span className="colored-green">
                                {numberWithCommas(total_recovered)}
                            </span>
                        </Card>
                    </Col>
                </Row>
            </div>

            <br />

            {/* <Card title="Заболевшие сейчас" style={{ width: 300 }} className="stat-card">
                <p>
                    12000
                </p>
            </Card> */}

        </>
    );
};

export default MainStatistic;
