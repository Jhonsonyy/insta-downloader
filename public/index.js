
    let download_Btn = document.getElementById('download-Btn');
    let loader = document.querySelector('.loader');
    let input_url = document.getElementById("url-input");
  
    download_Btn.addEventListener("click", function(){
      let Url = input_url.value; // Move this line inside the click event listener
      const postData = {
  key: Url
};
      if (Url.length !== 0 && Url.includes("instagram")) {
        fetch('https://www.instagrabx.com/downloadpage', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Other headers if needed
  },
  body: JSON.stringify(postData), // Convert JavaScript object to JSON string
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Handle the JSON response
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Fetch error:', error);
  });
        window.location.href = 'dload.html'
        console.log("true");
        loader.style.display = "block";
        setTimeout(() => {
          loader.style.display = "none";
        }, 7000);
      }
    });
