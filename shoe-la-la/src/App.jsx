import Header from './Header.jsx';
import storeName, { employeeNames, favNum } from './employee.js';

const App = () => {
  console.log(employeeNames);

  return (
    <>
      <h1>{storeName} {favNum}</h1>
      <Header />
    </>
  )
}

export default App


// const person = {
//   name: `Sammy`,
//   age: 65,
//   height: 160,
//   weight: 140,
//   spouse: {
//     name: `Teresa`,
//     age: 60
//   }
// }


// const { spouse } = person;
// const { age } = spouse;
// console.log(age);