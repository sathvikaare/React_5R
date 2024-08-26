import './App.css';
import SearchUser from './components/Batch_c_Tasks.js/searchFunctionality';
import ParentClassEx from './components/classComponent/parentClass';
import SearchCountry from './components/countryDetails/countrysearch';
import Countriestack from './components/countryDetails/stackcounties';
import CounterExample from './components/CustomHooks/counterExample';
import DataFetch from './components/CustomHooks/dataFetchExample';
import ReactMemoEx from './components/reactMemo';
import RecepiesApp from './components/ReactPojects/RecepieApp';
import RecepieSearchData from './components/recepiesApp/RecipeSearchData';
import RecepieStack from './components/recepiesApp/recepieStack';
import FakeStoreFetch from './components/revison_React/fakestoreTable';
import IndiaDataFetch from './components/revison_React/indiaInfo';
import CatDataFetch from './components/revison_React/randomCat';
import WhetherApp from './components/revison_React/WhetherApp';
import CurrencyConverter from './components/countryDetails/currencyconverter';
import TaskManagement from './components/recepiesApp/TaskManagement';
import { Pagination } from 'react-bootstrap';
import PaginationCom from './components/Batch_c_Tasks.js/pagination';
import OddEven from './components/oddEven';
// import logo from './logo.svg';
// import { AppBar } from '@mui/material';
// import { Stack } from 'react-bootstrap';
// import Navbar from './components/navBar/navbar';
// import Reducerbooking from './components/useReducer_hook/useReducer_booking';
// import TheContext from './components/useContextApi/TheContext';
// import LoginSignup from './components/revison_React/login_signup';
// import DigitalClock from './components/revison_React/DigitalClock';
// import UseEffectExample33 from './useEffect/useEffectExample33';
// import ControlledForm from './components/formsCon_UnCon/controlled_Forms';
// import FormUncontrolled from './components/formsCon_UnCon/uncontrolled';
// import FormUncontrolled from './components/formsCon_UnCon/uncontrolled';
// import FunTodo from './components/useState/funTodo';
// import { ButtonComp } from './components/class-components/button';
// import ProductListing from './components/class-components/productlisting/productlisting';
// import Counter1 from './components/useState/usestate';
// import ExampleArrays from './components/useState/usestateArray';
// import MountingPhase from './components/mounting';
// import TodoComponent from './components/class-components/todo/todo';
// import CustomList from './components/customlist/customlist';c
// import { recipeData } from './components/javascript/recepiedata';
// import CardExample from './components/cards/cards';
// import CircleCom from './components/circle/circle';
// import PropEx from './components/props/props';
// import ArrayList from './components/arrayListBraces';
// import { Card } from './components/card';
// import { Form } from './components/form/form';
// import { Table } from './components/table/table';
// import { ListItems } from './components/iplArrayListItems/ipListItems';
// import { IplListItems } from './components/iplArrayListItems/ipListItems';
// import { AppBar } from '@mui/material';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <h1>helloworld</h1>
//                     Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App(){
//   return(
//     <>
//     <Card/>
//     </>
//   );
// }
// function App(){
//   const obj={"roll":"19wj1a","branch":"Cse"}
//   return(
//     <>
//     {/* <IplListItems/> */}
//     {/* <ListItems/>
//     <ArrayList/>
//     <Card></Card>
//     <Form/>
//     <Table/> */}
//     <PropEx name="sathvika" age="21" details={obj} />
//     <CircleCom/>
//     <CardExample/>
//     </>
//   );
// }

// function App(){
//   return(
//     <>
//     {
//       FakeData.map((eachproduct)=>{
//         return(
//           <>
//           <Heading1 title={eachproduct.title}/>
//           <Heading3 title={eachproduct.description}/>
//           <Img src={eachproduct.image} width={100} height={100} alt={eachproduct.title} />
//           <Btn text={` $. ${eachproduct.price}`} bgcolor={"darkgray"} height={30} width={100} onpress={()=>{}} />
//           <Heading6>hello ram</Heading6>
//           </>
//         )
//       })
//     }
//     </>
//   );
// }
// function App(){
 
//   return(
//     <>
//     <CustomList list={["apple","banana","mango"]} />
//     <CustomList list={["srh","rcb","mi"]} />
//     <CustomList list={["dog","cat","fish"]} />
//     <CustomList list={[ "In a glass, muddle lime wedges with granulated sugar to release the juice.",
//         "Fill the glass with ice cubes.",
//         "Pour cachaça over the ice and stir well.",
//         "Sip and enjoy the refreshing taste of the Brazilian Caipirinha!",
//         "Adjust sugar and lime to suit your taste preferences.",]} />
//         {
//           recipeData.map(eachrecepie=>{
//             const{name,image,ingredients,instructions}=eachrecepie;
//             return(
//               <>
//               <Heading1 title={name}/>
//               <Img src={image} width={100} height={100} alt={name} />
//               <Heading1 title={"Ingredients to prepare"}/>
//               <CustomList list={ingredients}/>
//               <Heading1 title={"Instructions to prepare"}/>
//               <CustomList list={instructions}/>
//               </>
//             )
//           })
//         }
//     </>
//   )}

//   function App(){
//     return(
//       <>
//       {/* <ButtonComp/>
//       <TodoComponent /> */}
//       {/* <ProductListing/> */}
//        {/* <MountingPhase favcolor={"red"} /> */}
//       </>
//     );
//   }

// export default App;

// function App(){

//   return(
//     <>
//     <Counter1/>
//     <ExampleArrays/>
//     <FunTodo/>

// <FormUncontrolled/> 
//     </>
//   );
// }

// import Stack from './Navigations/stack';



// import UseEffectExample2 from './useEffect/use_effect2';
// import UserForm from './form_Table/formreact';
// import TableReact from './React_BootStrap/Bootstrap_Tbale';
// import DemoCarousel from './React_BootStrap/caurosal';
// import FormReact from './React_BootStrap/form_table';
// import DigitalClock from './components/revison_React/DigitalClock';
// import WhetherApp from './components/revison_React/WhetherApp';

export default function App() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>

    <>
    {/* <ControlledForm/> */}
    {/* <FormUncontrolled/> */}
    {/* <Stack/> */}
    {/* <ReactMemoApp/> */}
  {/* <CounterExample/> */}
{/* <DataFetch/> */}
    {/* <Navbar/> */}
    {/* <UserForm/> */}
    {/* <DemoCarousel/> */}
    {/* <FormReact/>
    <TableReact/> */}
    {/* <UseEffectExample2/> */}
    {/* <UseEffectExample33/> */}
    {/* <RecepieTable/> */}
    {/* <DigitalClock/> */}
    {/* <WhetherApp/> */}
     {/* <LoginSignup/> */}
   {/* context api example */}
   {/* <TheContext/> */}
{/* <Reducerbooking/> */}
{/* <IndiaDataFetch/> */}
{/* <RecepiesApp/> */}
{/* <ReactMemoEx/> */}
{/* <CatDataFetch/> */}
   {/* <FakeStoreFetch/> */}
{/* <ParentClassEx/> */}
{/* <SearchCountry/> */}
{/* <WhetherApp/> */}
{/* <Countriestack/>  */}
{/* <PaginationCom/> */}
   {/* <SearchUser/> */}
   {/* <RecepieSearchData/> */}
 {/* <RecepieStack/> */}
 {/* <CurrencyConverter/> */}
 <OddEven/>
    </>
  )
}
