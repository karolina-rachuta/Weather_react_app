import React from "react";
import ReactECharts from "echarts-for-react";

function WeatherForecastChart({ forecastWeather }) {
  function formatterXAxisLabel(value) {
    const date = new Date(value);
    console.log(forecastWeather.map(({ day: { maxtemp_c } }) => maxtemp_c));
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
  }

  const maxTemperatureData = forecastWeather.map(
    ({ day: { maxtemp_c } }) => maxtemp_c
  );

  const minTemperatureData = forecastWeather.map(
    ({ day: { mintemp_c } }) => mintemp_c
  );

  const precipitationData = forecastWeather.map(
    ({ day: { totalprecip_mm } }) => totalprecip_mm
  );
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
              min: 0,
              max: Math.round(Math.max(...maxTemperatureData) * 1.1),
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
              max: Math.round(Math.max(...precipitationData) * 1.3),
              interval: 1,
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
              data: maxTemperatureData,
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
              data: minTemperatureData,
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
              data: precipitationData,
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
