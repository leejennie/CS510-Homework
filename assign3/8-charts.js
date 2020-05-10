// Enter your code below

var donut_chart = document.getElementById("myChart");

var swapidata = {
    labels: [
      "blue",
      "yellow",
      "red",
      "teal",
      "purple",
      "orange",
      "unknown",
    ],
    datasets: [
        {
          data: [
            21,
            11,
            4,
            18,
            9,
            9,
            4,
          ],
          backgroundColor: [
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(199, 199, 199, 0.8)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(159, 159, 159, 1)',
          ], 
          borderWidth: 1
        }
      ],
};

var chartOptions = {
  cutoutPercentage: 50,
  legend: {
    position: 'bottom'
  },
};

var pieChart = new Chart(donut_chart, {
  type: 'doughnut',
  data: swapidata,
  options: chartOptions
});


/*
let data = {
  blue: 21,
  yellow: 11,
  red: 4,
  teal: 18,
  purple: 9,
  orange: 9,
  unknown: 4,
};*/

// Colors used :

// backgroundColor: [
//   'rgba(54, 162, 235, 0.8)',
//   'rgba(255, 206, 86, 0.8)',
//   'rgba(255, 99, 132, 0.8)',
//   'rgba(75, 192, 192, 0.8)',
//   'rgba(153, 102, 255, 0.8)',
//   'rgba(255, 159, 64, 0.8)',
//   'rgba(199, 199, 199, 0.8)',
// ]
// borderColor: [
//   'rgba(54, 162, 235, 1)',
//   'rgba(255, 206, 86, 1)',
//   'rgba(255, 99, 132, 1)',
//   'rgba(75, 192, 192, 1)',
//   'rgba(153, 102, 255, 1)',
//   'rgba(255, 159, 64, 1)',
//   'rgba(159, 159, 159, 1)',
// ]
