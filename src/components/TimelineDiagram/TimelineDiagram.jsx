import React from "react";
import { useState, useEffect } from "react";

import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    Hint,
    MarkSeries,
    VerticalBarSeries,
} from 'react-vis';

const TimelineDiagram = (props) => {

    const { data, color, month } = props;

    const _forgetValue = () => {
        console.log("qoehlqhl")
        setPoint("");
    };

    const [point, setPoint] = useState("");

    const _rememberValue = (value, { event }) => {
        event.stopPropagation();
        _forgetValue();
        setPoint(value);
    };

    useEffect(() => {
        _forgetValue();
    }, [month])

    return (
        <>
            <XYPlot xType="time" width={400} height={300} margin={{ left: 60, bottom: 50 }}
                onClick={_forgetValue}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis tickLabelAngle={-45} />
                <YAxis />
                <VerticalBarSeries
                    color={color}
                    data={data}
                    onValueClick={_rememberValue}
                    style={{ "cursor": "pointer" }}
                />
                {point ?
                    <MarkSeries
                        data={[{ ...point, size: 5 }]}>
                    </MarkSeries>
                    : null}
                {point ? (
                    <Hint
                        value={point}
                        align={{ horizontal: Hint.ALIGN.AUTO, vertical: Hint.ALIGN.AUTO }}
                    >
                        <div className="rv-hint__content">{`${new Date(point.x).toDateString()}, ${point.y} чел.`}</div>
                    </Hint>
                ) : null}
            </XYPlot>
        </>
    )

}

export default TimelineDiagram;