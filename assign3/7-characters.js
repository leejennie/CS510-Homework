// Enter your code here

function get_data() {

    for(var i = 1; i < 10 ; i++) {
       const url = 'https://swapi.dev/api/people/?page=' + i;
       let results = document.querySelector('#results');

        let mod_page = (element, item) => {
          let li = document.createElement(element);
          li.innerText = `${item.name} - ${item.birth_year}`;
          results.append(li);
        };

        let fetchData = (url) => {
          fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            data.results.forEach((item) => {
                mod_page('li', item);
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

//It reads each page out of order? I don't know why. But for the most part it works. 