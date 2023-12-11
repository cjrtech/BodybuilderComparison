document.addEventListener("DOMContentLoaded", function() {
    const bodybuilderSelect = document.getElementById("bodybuilderSelect");
  
    bodybuilderSelect.addEventListener("change", function() {
      const selectedOption = bodybuilderSelect.value;
  
      // Define redirection URLs for different options
      const redirectionURLs = {
        home: "index.html",
        frontlatspread: "frontlatspread.html",
        frontdoublebiceps: "frontdoublebiceps.html", // Replace with your desired page URL
        sidechest: "sidechest.html", // Replace with your desired page URL
        rearlatspread: "rearlatspread.html",
        reardoublebiceps: "reardoublebiceps.html",
        sidetriceps: "sidetriceps.html",
        abdominalandthigh: "abdominalandthigh.html",
        mostmuscular: "mostmuscular.html", // Replace with your desired page URL
        // Add more redirection URLs
      };
  
      // Get the selected redirection URL
      const selectedURL = redirectionURLs[selectedOption];
  
      // Redirect to the selected URL
      if (selectedURL) {
        window.location.href = selectedURL;
      }
    });
  });
  
  