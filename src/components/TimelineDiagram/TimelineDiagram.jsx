import React from "react";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    Hint,
    MarkSeries,
    VerticalBarSeries
} from 'react-vis';

const TimelineDiagram = props => {

    const { data, color } = props;

    const forgetValue = () => {
        setPoint("");
    };

    const [point, setPoint] = useState("");

    const rememberValue = (value, { event }) => {
        event.stopPropagation();
        forgetValue();
        setPoint(value);
    };

    useEffect(() => {
        forgetValue();
    }, [data]);

    return (
        <>
            <XYPlot xType="time" width={400} height={300} margin={{ left: 60, bottom: 50 }}
                onClick={forgetValue}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis tickLabelAngle={-45} />
                <YAxis />
                <VerticalBarSeries
                    color={color}
                    data={data}
                    onValueClick={rememberValue}
                    style={{ cursor: "pointer" }}
                />
                {point ?
                    <MarkSeries
                        data={[{ ...point, size: 5 }]}>
                    </MarkSeries> :
                    null}
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
    );

};

TimelineDiagram.propTypes = {
    data: PropTypes.object,
    color: PropTypes.string
};

export default TimelineDiagram;