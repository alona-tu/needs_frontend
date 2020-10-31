import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class ReviewPieChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        labels: ['5顆星', '4顆星', '3顆星', '2顆星', '1顆星'],
        colors: [
          'rgba(115, 103, 240, 0.8)',
          'rgba(255, 159, 67, 0.8)',
          'rgba(234, 84, 85, 0.8)',
          'rgba(0, 207, 232, 0.8)',
          'rgba(40, 199, 111, 0.8)',
        ],
        legend: {
          show: false,
        },
      },
      series: [props.fiveStar, 2, 3, 4, 5],
    }
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            console.log(this.state.series)
          }}
        >
          consoleLog
        </button>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="100%"
        />
      </>
    )
  }
}

export default ReviewPieChart
