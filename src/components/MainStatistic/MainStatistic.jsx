import React from "react";
import { Card, Col, Row } from "antd";

import "./MainStatistic.css";

const KEYS = [
    "cases",
    "death",
    "recovered"
]

const MainStatistic = (props) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const handleParentClicked = (e) => {
        e.persist();
        const { key } = e.target.offsetParent.dataset;
        switch (key) {
            case KEYS[0]:
                alert("Был кликнут - заболевшие, ключ - "+ KEYS[0])
                break;
            case KEYS[1]:
                alert("Был кликнут - смерть, ключ - "+ KEYS[1])
                break;
            case KEYS[2]:
                alert("Был кликнут - выздоровевшие, ключ - "+ KEYS[2])
                break;
            default:
                break;
        }
    }

    const { total_cases, total_deaths, total_recovered } = props.info;
    return (
        <>
            <div className="site-card-wrapper">
                <h1 className="text-centered">За все время</h1>
                <Row gutter={10} className="stat-row" onClick={handleParentClicked}>
                    <Col span={8} className="stat-item">
                        <Card
                            title="Заболевших"
                            bordered={true}
                            className="stat-card"
                            data-key={KEYS[0]}
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
                            data-key={KEYS[1]}
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
                            data-key={KEYS[2]}
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
