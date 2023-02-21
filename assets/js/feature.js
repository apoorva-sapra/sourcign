const linkedInSearchString = 'site:linkedin.com inurl:in OR inurl:pub -inurl:dir ';

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    console.log("not logged in");
    alert("Please sign in.");
    window.location.replace("login/login_page.html");
  }
});

// const keywordInputBox = document.getElementById('keyword-input-box');
// const addKeywordBtn = document.querySelector('.add-keyword-btn');
// const keywordList = document.getElementById('keyword-list');
// let keywords = [];

// addKeywordBtn.addEventListener('click', function() {
//   const keyword = keywordInputBox.value.trim();
//   if (keyword && keywords.length < 50) {
//     keywords.push(keyword);
//     const keywordListItem = document.createElement('li');
//     keywordListItem.textContent = keyword;
//     keywordList.appendChild(keywordListItem);
//     keywordInputBox.value = '';
//   }
// });

var currentPage = 1;

document.getElementById("submitSearchForm").onclick = function () {

  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;
  var jobTitle = document.getElementById("jobTitle").value;
  var keywords = document.getElementById("keywords").value;

  if (city === "" || country === "" || jobTitle === "" || keywords === "") {
    alert("All fields are required");
    return false;
  }

  const searchQuery = linkedInSearchString.concat(jobTitle, ' AND ', '("', keywords, '")', ' AND ', '"', city, '"', ' AND ', '"', country, '"');

  console.log(searchQuery);

  $('#lds-default').show();

  function refreshTable(){
  axios.get('http://localhost:3000/', {
    params: {
      q: searchQuery,
      page: currentPage
    }
  })
    .then(response => {
      $("#table-container").empty();
      var organic_results = response.data;
      console.log('response: ', response.data);

      // Create the table element
      var table = $('<table>');
      table.addClass('table');

      // Create the table header
      var thead = $('<thead>');
      var tr = $('<tr>');
      tr.append($('<th>').text('Candidate'));
      tr.append($('<th>').text('Profile Url'));
      tr.append($('<th>').text('Description'));
      thead.append(tr);
      table.append(thead);

      // Create the table body
      var tbody = $('<tbody>');

      // Populate the table with the data from the JSON response
      organic_results.forEach(function (result) {
        var tr = $('<tr>');
        tr.append($('<td>').html('<img src="assets/images/avatar.jfif" width="50px" height="50px">' + result.title));
        tr.append($('<td>').html('<a href="' + result.link + '"  target="_blank">' + '<img src="assets/images/linkSymbol.png" width="50px" height="50px" alt="Linked In Profile Url"></img>' + '</a>'));
        tr.append($('<td>').text(result.snippet));
        tbody.append(tr);
      });

      table.append(tbody);

      // Append the table to an existing element on the page
      $('#table-container').empty().append(table);

      // Add next and previous buttons
      var buttons = $('<div>').addClass('pagination-buttons');
      buttons.append($('<button>').text('Previous').prop('disabled', currentPage === 1).on('click', function () {
        currentPage--;
        refreshTable();
      }));
      buttons.append($('<button>').text('Next').prop('disabled', organic_results.length === 0).on('click', function () {
        currentPage++;
        refreshTable();
      }));
      $('#table-container').append(buttons);

      $('#lds-default').hide();
    })
    .catch(error => {
      console.log("front end error", error);
    });
  }
  refreshTable();
}



// // var query='site:linkedin.com inurl:in OR inurl:pub -inurl:dir (“PaaS” OR “SaaS” OR “IaaS” OR “Openstack” OR “Terraform” OR “Cloudformation” OR “Ansible” OR “Chef” OR “Puppet” OR “Azure” OR “AWS” OR "automation" OR "CICD" OR “EC2” OR “RDS” OR “S3” OR “Cloudwatch” OR “Cloudfront” OR “Openshift” OR “Git) - "DevOps principal or lead" AND "Australia"';
// var linkedInSearchString = 'site:linkedin.com inurl:in OR inurl:pub -inurl:dir ';
// var API_KEY = 'edd810614e735a47788c08851cde0ed812a3430be55e270a78c50eedb7a92b9b';
// const API_KEY2 = '76a666bccd3b622d2d5118638f5d0709';

// // var url= 'http://api.serpstack.com/search?access_key=' + API_KEY2 + '&type=web&query=' + 'site:linkedin.com inurl:in OR inurl:pub -inurl:dir (“selenium” OR “appium” OR “postman” OR “java” OR test*) - "automation OR test OR engineer" AND "gold coast" OR "Queensland"';

// // console.log(url1)
// // console.log(url)

// document.getElementById("submitSearchForm").onclick = function () {
//     createSearchString()
// };


// function createSearchString() {
//     var location = document.getElementById("location").value;
//     var jobTitle = document.getElementById("jobTitle").value;
//     var keywords = document.getElementById("keywords").value;

//     searchQuery = linkedInSearchString.concat('(', keywords, ')', ' - ', jobTitle, ' AND ', location);
//     return searchQuery;
// }

//     console.log(searchQuery);

//     var resultArray = [];

//     var url1 = 'https://serpapi.com/search.json?engine=google&q=' + searchQuery + '&api_key=' + API_KEY;
//     if (location && jobTitle && keywords) {
//         $.get(url1, function (data) {
//             resultArray = data;
//             console.log(resultArray);
//             buildResultTable(resultArray);
//         })
//     }

//     function buildResultTable(resultArray) {
//         var table = document.getElementById('resultTable');
//         console.log("length of res" & resultArray.organic_results[length]);
//         var lengthOfResults = resultArray.organic_results.length;

//         for (var i = 0; i < lengthOfResults; i++) {
//             var row = `<tr class>
//                         <td> ${resultArray.organic_results[i].title} </td>
//                         <td> table.href= </td>
//                     </tr>`
//             table.innerHTML += row

//         }
//     }

// };


// fetch api
// fetch(url1);