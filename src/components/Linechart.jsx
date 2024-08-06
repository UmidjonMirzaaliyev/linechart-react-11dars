import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import "chart.js/auto";

const LineChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Ma'lumotlarni kerakli formatga o'zgartirish
    const labels = data.map((item) => new Date(item.time).toLocaleDateString());
    const values = data.map((item) => item.value);

    const formattedData = {
      labels: labels,
      datasets: [
        {
          label: `Exchange Rate (${data[0].source} to ${data[0].target})`,
          data: values,
          fill: false,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };

    setChartData(formattedData);
  }, [data]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ width: "100%", height: "400px" }}>
      <Line data={chartData} />
    </Box>
  );
};

export default LineChart;
