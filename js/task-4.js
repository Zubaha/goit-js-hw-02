function normalizeInput(input, to) {
    if (to == "upper"){
     return input.toUpperCase();
    }
     else {
      return input.toLowerCase();
     }
  }

  console.log(normalizeInput("This ISN'T SpaM", "lower"));