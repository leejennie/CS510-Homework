// Enter your code below




function get_data() {

var donut_chart = document.getElementById("myChart");
var b = 0;
var y = 0;
var r = 0;
var t = 0;
var p = 0;
var o = 0;
var u = 0;

  for(var i = 1; i < 10 ; i++) {
     const url = 'https://swapi.dev/api/people/?page=' + i;

      let fetchData = (url) => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.results.forEach((item) => {

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
                      b,
                      y,
                      r,
                      t,
                      p,
                      o,
                      u,
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

            if(item.eye_color == "blue") {
              b = b+1;
            }
            if(item.eye_color == "yellow") {
              y = y+1;
            }
            if(item.eye_color == "red") {
              r = r+1;
            }  

            if(item.eye_color == "teal") {
              t = t+1;
            }
            if(item.eye_color == "purple") {
              p = p+1;
            }
            if(item.eye_color == "orange") {
              o = o+1;
            } 
            if(item.eye_color == "unknown") {
              u = u+1;
            } 

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
  

          });
        })
        .catch((error) => {
          console.log(error);
          results.append();
        })
      };
    fetchData(url);
  }
}
get_data();

/*
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
