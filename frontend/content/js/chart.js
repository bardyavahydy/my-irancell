const initChart = (labels, data, initElm) => {
  const config = {
    type: 'line',
    data: {
      labels: [...labels],
      datasets: [
        {
          backgroundColor: '#fffcef',
          borderColor: '#fdc816',
          data: [...data],
          tension: 0.45,
          borderWidth: 3,
          fill: true,
          pointRadius: 0,
        },
      ],
    },
    options: {
      plugins: {
        legend: false,
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  };

  return new Chart(initElm, config)
};

export default initChart ;