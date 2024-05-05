import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Line } from "react-chartjs-2";

//components from chart.js library
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"; 

//Define LineChart
const LineChart = () => {
  const [chartData, setChartData] = useState<any>({});

  // useEffect hook to fetch data and set up the chart
  useEffect(() => {
    // Fetching data and set chart data
    const callToSetLineData = async () => {
      const response = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      const resData = await response.json();
      if (response.ok === true) {
        //check response is successful
        const newChartData = {
          // Creating chart data object
          labels: Object.keys(resData.cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(resData.cases),
              fill: false,
              borderColor: "#f4544c",
              tension: 0.2,
            },
          ],
        };
        // set chart data state
        setChartData(newChartData);
      }
    };

    callToSetLineData(); // Calling function to fetch data and set chart data

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []); // Dependency array to ensure useEffect runs only once

  // Rendering the LineChart component
  return (
    <div className="w-full p-10">
      <h1 className="text-2xl font-bold mb-5 text-[#140808]">
        Corona Cases Chart
      </h1>
      <div className=" border w-full  m-auto 10 auto 10 md:h-[450px] md:flex md:justify-center">
        {chartData.datasets ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-[#f4544c] m-5 ">Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default LineChart;
