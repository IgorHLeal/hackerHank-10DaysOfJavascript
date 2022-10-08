function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];

  for(let vogals of s) {
      if(vowels.includes(vogals))
          console.log(vogals);
  }
  
  for(let vogals of s) {
      if(!vowels.includes(vogals))
          console.log(vogals);
  }
}

vowelsAndConsonants('javascriptloops');