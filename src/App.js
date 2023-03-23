import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import GaugeChart from './lib'

const App = () => {
  const [currentPercent, setCurrentPercent] = useState();
  const [arcs, setArcs] = useState([0.5, 0.3, 0.2])

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
  //     setCurrentPercent(Math.random());
  //     setArcs([0.1, 0.5, 0.4])
	// 	}, 3000);

	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// });

	const chartStyle = {
		height: 250,
	}

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={{ offset: 2, span: 8 }}>
            <h1>React Gauge Chart Demo</h1>
          </Col>
        </Row>
        <Row>
          {/* <Col xs={12} lg={6}>
            <h6>GaugeChart with default props</h6>
            <GaugeChart percent={0.3} 
              percent2={0.65}  style={chartStyle} />
          </Col> */}
          <Col xs={12} lg={12}>
            <h6>GaugeChart with 20 levels</h6>
            <GaugeChart
							id="gauge-chart1" 
              nrOfLevels={1000} 
              arcPadding={0}
              cornerRadius={0} 
              colors={["#059266", "#BF941A", "#FF9500", "#FC8309", "#E8193C"]} 
              percent={0.5} 
              percent2={0.75} 
              needleColor={'#727293'}
              needleBaseColor={'#D9D9D9'}
              needle2Color={'#000000'}
              needle2BaseColor={'#D9D9D9'}
              hideText={true}
              style={{height: '175px'}}
						/>
          </Col>
        </Row>
        {/* <Row>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with custom colors</h6>
            <GaugeChart
							style={chartStyle}
              nrOfLevels={30}
              colors={['#FF5F6D', '#FFC371']}
              arcWidth={0.3}
              percent={0.37}
            />
          </Col>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with larger padding between elements</h6>
            <GaugeChart
							id="gauge-chart4"
							style={chartStyle}
							nrOfLevels={10}
							arcPadding={0.1}
							cornerRadius={3}
							percent={0.6}
						/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with custom arcs width</h6>
            <GaugeChart
              id="gauge-chart5"
							style={chartStyle}
              nrOfLevels={420}
              arcsLength={[0.3, 0.5, 0.2]}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={0.37}
              arcPadding={0.02}
            />
          </Col>
          <Col xs={12} lg={6}>
            <h6>GaugeChart without animation</h6>
            <GaugeChart
              id="gauge-chart6"
							style={chartStyle}
              animate={false}
              nrOfLevels={15}
              percent={0.56}
              needleColor="#345243"
            />
          </Col>
        </Row>
				<Row>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with live updates</h6>
            <GaugeChart
							id="gauge-chart7"
							style={chartStyle}
              percent={currentPercent}
              animDelay={0}
            />
          </Col>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with formatted text</h6>
            <GaugeChart
              id="gauge-chart8"
              style={chartStyle}
              nrOfLevels={30}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              arcWidth={0.3}
              percent={0.37}
              formatTextValue={value => value + 'kbit/s'}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with arcs update</h6>
            <GaugeChart
              id="gauge-chart9"
							style={chartStyle}
              nrOfLevels={420}
              arcsLength={arcs}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={0.37}
              arcPadding={0.02}
            />
          </Col>
        </Row>           */}
      </Container>
    </>
  )
};

export default App
