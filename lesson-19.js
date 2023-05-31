// API calls - make network requests to a backend and do something with the data

// JavaScript Object
const course = {
  title: 'JavaScript',
  tutor: 'Ishaya',
  student: 'Favour',
};

console.log(`Tutor - ${course.tutor}`);

// JSON - JavaScript Object Notation
const courseJSON = JSON.stringify(course);
console.log(courseJSON);

const courseJS = JSON.parse(courseJSON);

console.log(courseJSON);

console.log(typeof courseJS);
console.log(typeof courseJSON);

const saveData = () => {
  sessionStorage.setItem('course', JSON.stringify(course));
  localStorage.setItem('course', JSON.stringify(course));
};

console.log('title', JSON.parse(localStorage.getItem('course')).title);

// asynchronous code
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = [1, 2, 3];
      resolve(items);
    }, 3000);
  });
};

// .then() syntax
fetchData().then((data) => {
  console.log(data[1]);
});

// async/await syntax
const fetchData2 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = [1, 2, 3];
      resolve(items);
    }, 3000);
  });
};

const printValue = async () => {
  const item = await fetchData2();
  console.log(item);
};

printValue()
