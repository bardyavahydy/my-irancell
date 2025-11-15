import initChart from "./chart.js";

const $ = document
const ctx = $.getElementById("my-chart").getContext("2d")

initChart(['7/1', '7/2', '7/17', '7/25', '7/28'], ['500', '1000', '2200', '2600', '1700'], ctx)