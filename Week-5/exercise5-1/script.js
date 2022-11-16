function doTask1(x,sec) {
  console.log('inside doTask1 func');
  return new Promise(resolve => {
  console.log('Start task 1: ' + x);
    setTimeout(() => {
        console.log('End task 1: ' + x);
      resolve(x);
    }, sec *1000);
  });
}

function doTask2(x,sec) {
  console.log('inside doTask2 func');
  return new Promise(resolve => {
  console.log('Start task 2: ' + x);
    setTimeout(() => {
        console.log('End task 2: ' + x);
      resolve(x);
    }, sec *1000);
  });
}

function doTask3(x,sec) {
  console.log('inside doTask3 func');
  return new Promise(resolve => {
  console.log('Start task 3: ' + x);
    setTimeout(() => {
        console.log('End task 3: ' + x);
      resolve(x);
    }, sec *1000);
  });
}

async function SequentialTasksRun(){
  await doTask1(1,1);
  await doTask2(2,2);
  await doTask3(3,3);
}
   
SequentialTasksRun();
