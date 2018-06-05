function theBeatlesPlay(musicians, instruments) {
  const arr = [];
  
  for(let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return arr;
  
}

function johnLennonFacts(array) {
  const facts = [];
  let i = 0;
  
  while (i < array.length) {
    facts.push(`${array[i]}!!!`);
    i += 1;
  }
  
  return facts;
}

function iLoveTheBeatles(number) {
  var empty = [];
  do {
    empty.push("I Love the Beatles!");
    number++;
  } while (number < 15);
  return empty;
}

/*function iLoveTheBeatles(number) {
  var empty = []
  do {
    empty.push("I love the Beatles!")
    number++
  } while (number < 15)
  return empty
}*/