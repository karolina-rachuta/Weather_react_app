import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

function WeatherForecastChart({ forecastWeather }) {
  const [maxTemp, setMaxTemp] = useState(
    forecastWeather.map(({ day: { maxtemp_c } }) => maxtemp_c)
  );
  const [minTemp, setMinTemp] = useState(
    forecastWeather.map(({ day: { mintemp_c } }) => mintemp_c)
  );
  const [precip, setPrecip] = useState(
    forecastWeather.map(({ day: { totalprecip_mm } }) => totalprecip_mm)
  );

  useEffect(() => {
    setMaxTemp(forecastWeather.map(({ day: { maxtemp_c } }) => maxtemp_c));
    setMinTemp(forecastWeather.map(({ day: { mintemp_c } }) => mintemp_c));
    setPrecip(forecastWeather.map(({ day: { totalprecip_mm } }) => totalprecip_mm));
  }, [forecastWeather]);

  function formatterXAxisLabel(value) {
    const date = new Date(value);
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
  }

  return (
    <section className="chart__box">
      <ReactECharts
        option={{
          legend: {
            data: ["Max_Temp", "Min_Temp", "Rain"],
            left: "center",
            top: "0%",
            textStyle: {
              fontSize: 10,
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
              name: "Temp, °C",
              max: Math.round(Math.max(...maxTemp) * 1.1),
              interval: 5,
              axisLabel: {
                fontSize: 12,
                color: "white",
              },
              nameTextStyle: {
                color: "white",
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#ffffff",
                  width: 0.1,
                  type: "solid",
                },
              },
              position: "left",
              offset: 0,
            },

            {
              type: "value",
              name: "Rain, mm",
              nameTextStyle: {
                color: "white",
              },
              min: 0,
              max: Math.round(Math.max(...precip) * 1.3),
              interval: 2,
              axisLabel: {
                fontSize: 12,
                color: "white",
              },
              splitLine: {
                show: false,
              },
              position: "right",
              offset: 0,
            },
          ],
          series: [
            {
              name: "Max_Temp",
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
              yAxisIndex: 0,
            },
            {
              name: "Min_Temp",
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
              name: "Rain",
              data: precip,
              type: "bar",
              barWidth: "10%",
              itemStyle: {
                color: "blue",
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
