let newArray = [];

let timerValues = (inputValues) => {

  for (let i = 2; i < inputValues.length; i++) {
    if (isNaN(inputValues[i])) {
      continue;
    } else if (inputValues[i] < 0) {
      continue;
    } else {
      newArray.push(Number(inputValues[i]));
    }
  }
};

const compareNumbers = (a, b) => {
  return a - b;
};

const sortArray = (givenArray) => {

  givenArray.sort(compareNumbers);
};

const timer = (givenArray) => {
  for (let char of givenArray) {
    setTimeout(() => {
      process.stdout.write("Beep");

    }, (char * 1000));
  }
};

timerValues(process.argv);
sortArray(newArray);
timer(newArray);

