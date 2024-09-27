import React from "react";
import ReactECharts from "echarts-for-react";

function WeatherForecastChart({ forecastWeather }) {
  function formatterXAxisLabel(value, index) {
    const date = new Date(value);
    console.log(forecastWeather.map(({ day: { maxtemp_c } }) => maxtemp_c));
    return `${date.getUTCDate()} / ${date.getUTCMonth() + 1}`;
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
    <div>
      <ReactECharts
        option={{
          legend: {
            data: ["Max_Temperature", "Min_Temperature", "Precipitation"],
            right: "10%",
            bottom: "centre",
            textStyle: {
              fontSize: 14,
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
              }
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
              }
            },
          ],
          series: [
            {
              name: "Max_Temperature",
              data: maxTemperatureData,
              type: "bar",
              barWidth: "20%",
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
              type: "bar",
              barWidth: "20%",
              yAxisIndex: 0,
            },
            {
              name: "Precipitation",
              data: precipitationData,
              type: "line",
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
    </div>
  );
}

export default WeatherForecastChart;
