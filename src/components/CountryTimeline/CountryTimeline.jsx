import React, { useEffect, useState } from 'react'

import { DatePicker } from 'antd'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { DiscreteColorLegend } from 'react-vis'
import '../../../node_modules/react-vis/dist/style.css'

import TimelineGraph from '../TimelineGraph'
import TimelineDiagram from '../TimelineDiagram'

import './CountryTimeline.css'
import RadialDiagram from '../RadialDiagram'

const COLORS = ['blue', 'red', 'green']
const ITEMS = ['Выявлено заболевших', 'Человек умерло', 'Человек выздоровело']

const CountryTimeline = (props) => {
  const [currentMonth, setCurrenMonth] = useState(7)
  const { info } = props

  const { id } = useParams()

  const [timeline, setTimeline] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    axios
      .get(`https://api.thevirustracker.com/free-api?countryTimeline=${id}`)
      .then((res) => {
        setTimeline(res.data.timelineitems[0])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [id])

  const onMonthChange = (date) => {
    setCurrenMonth(date ? date.month() : 0)
  }

  const total_cases = []
  const total_deaths = []
  const total_recoveries = []

  if (!isLoading) {
    Object.keys(timeline)
      .filter(
        (date) => !currentMonth || currentMonth === new Date(date).getMonth()
      )
      .forEach((date) => {
        total_cases.push({
          x: new Date(date).getTime(),
          y: timeline[date].total_cases,
        })
        total_deaths.push({
          x: new Date(date).getTime(),
          y: timeline[date].total_deaths,
        })
        total_recoveries.push({
          x: new Date(date).getTime(),
          y: timeline[date].total_recoveries,
        })
      })
  }

  return (
    <>
      <div className="timeline-stat">
        <div className="timeline-stat__graph">
          {!isLoading ? <TimelineGraph timeline={timeline} /> : null}
        </div>
        <div>
          <RadialDiagram info={info} />
        </div>
      </div>
      {!isLoading ? (
        <div className="timeline-panel">
          <DatePicker
            onChange={onMonthChange}
            picker="month"
            className="timeline-panel__date"
          />
          <DiscreteColorLegend
            className="timeline-panel__legend"
            width={500}
            items={ITEMS}
            colors={COLORS}
            orientation="horizontal"
          />
        </div>
      ) : null}
      {!isLoading ? (
        <div className="timeline-diagrams">
          <TimelineDiagram
            data={total_cases}
            color="blue"
            className="diagram"
          />
          <TimelineDiagram
            data={total_deaths}
            color="red"
            className="diagram"
          />
          <TimelineDiagram
            data={total_recoveries}
            color="green"
            className="diagram"
          />
        </div>
      ) : null}
      <br />
    </>
  )
}

CountryTimeline.propTypes = {
  info: PropTypes.object,
}

export default CountryTimeline
