// Sample chart configuration for Line and Bar charts

const chartExample1 = {
    data1: {
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data 1",
          data: [10, 15, 9, 30, 12, 25, 35, 20, 22, 18, 16, 25],
          borderColor: "#1f8ef1",
          fill: false,
        },
      ],
    },
    data2: {
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data 2",
          data: [15, 20, 10, 25, 17, 30, 40, 25, 18, 20, 15, 22],
          borderColor: "#f96332",
          fill: false,
        },
      ],
    },
    data3: {
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data 3",
          data: [20, 25, 15, 35, 22, 40, 50, 30, 35, 28, 30, 40],
          borderColor: "#00d6b4",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };
  
  const chartExample2 = {
    data: {
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Shipments",
          data: [20, 35, 30, 50, 55, 60, 40, 45, 30, 25, 20, 15],
          borderColor: "#1f8ef1",
          fill: true,
          backgroundColor: "rgba(29,140,248,0.2)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };
  
  const chartExample3 = {
    data: {
      labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
      datasets: [
        {
          label: "Daily Sales",
          data: [50, 30, 40, 60, 25, 45],
          backgroundColor: "#f96332",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };
  
  const chartExample4 = {
    data: {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Completed Tasks",
          data: [70, 80, 75, 90, 85, 95],
          borderColor: "#00d6b4",
          fill: true,
          backgroundColor: "rgba(72,72,176,0.2)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };
  
  export { chartExample1, chartExample2, chartExample3, chartExample4 };
  