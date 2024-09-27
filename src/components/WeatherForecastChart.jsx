import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

function WeatherForecastChart({ forecastWeather }) {
  const [maxTemp] = useState(
    forecastWeather.map(({ day: { maxtemp_c } }) => maxtemp_c)
  );
  const [minTemp] = useState(
    forecastWeather.map(({ day: { mintemp_c } }) => mintemp_c)
  );
  const [precip] = useState(
    forecastWeather.map(({ day: { totalprecip_mm } }) => totalprecip_mm)
  );

  function formatterXAxisLabel(value) {
    const date = new Date(value);
    console.log(forecastWeather.map(({ day: { maxtemp_c } }) => maxtemp_c));
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
  }

  return (
    <section className="chart__box">
      <ReactECharts
        option={{
          legend: {
            data: ["Max_Temperature", "Min_Temperature", "Precipitation"],
            right: "10%",
            bottom: "centre",
            textStyle: {
              fontSize: 12,
              color: "white",
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: forecastWeather.map(({ date }) => date),
            axisLabel: {
              formatter: formatterXAxisLabel,
              fontSize: 12,
              color: "white",
            },
            axisPointer: {
              type: "shadow",
            },
          },
          yAxis: [
            {
              type: "value",
              name: "Temperature",
              max: Math.round(Math.max(...maxTemp) * 1.1),
              interval: 5,
              axisLabel: {
                formatter: "{value} °C",
                fontSize: 12,
                color: "white",
              },
              nameTextStyle: {
                color: "white",
              },
              splitLine: {
                show: false,
              },
              position: "left",
              offset: 20,
            },
            {
              type: "value",
              name: "Precipitation",
              nameTextStyle: {
                color: "white",
              },
              min: 0,
              max: Math.round(Math.max(...precip) * 1.3),
              interval: 2,
              axisLabel: {
                formatter: "{value} mm",
                fontSize: 12,
                color: "white",
              },
              splitLine: {
                show: false,
              },
              position: "right",
              offset: 20,
            },
          ],
          series: [
            {
              name: "Max_Temperature",
              data: maxTemp,
              type: "line",
              smooth: true,
              lineStyle: {
                color: "red",
                width: 2,
              },
              itemStyle: {
                color: "red",
              },
              tooltip: {
                valueFormatter: function (value) {
                  return value + " °C";
                },
              },
              yAxisIndex: 0,
            },
            {
              name: "Min_Temperature",
              data: minTemp,
              type: "line",
              smooth: true,
              lineStyle: {
                color: "lightblue",
                width: 2,
              },
              itemStyle: {
                color: "lightblue",
              },
              yAxisIndex: 0,
            },
            {
              name: "Precipitation",
              data: precip,
              type: "bar",
              barWidth: "10%",
              itemStyle: {
                color: "blue",
              },
              tooltip: {
                valueFormatter: function (value) {
                  return value + " mm";
                },
              },
              yAxisIndex: 1,
            },
          ],
        }}
      />
    </section>
  );
}

export default WeatherForecastChart;
