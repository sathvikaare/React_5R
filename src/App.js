// import logo from './logo.svg';
import './App.css';
import CustomList from './components/customlist/customlist';

import { recipeData } from './components/javascript/recepiedata';
// import CardExample from './components/cards/cards';
// import CircleCom from './components/circle/circle';
// import PropEx from './components/props/props';
// import ArrayList from './components/arrayListBraces';
// import { Card } from './components/card';
// import { Form } from './components/form/form';
// import { Table } from './components/table/table';
// import { ListItems } from './components/iplArrayListItems/ipListItems';
// import { IplListItems } from './components/iplArrayListItems/ipListItems';
import { Img } from './components/image';
// import { FakeData } from './components/javascript/fakestoreData';
import { Heading1, Heading3, Heading6 } from './components/heading';
// import { Btn } from './components/button';


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
function App(){
 
  return(
    <>
    <CustomList list={["apple","banana","mango"]} />
    <CustomList list={["srh","rcb","mi"]} />
    <CustomList list={["dog","cat","fish"]} />
    <CustomList list={[ "In a glass, muddle lime wedges with granulated sugar to release the juice.",
        "Fill the glass with ice cubes.",
        "Pour cachaça over the ice and stir well.",
        "Sip and enjoy the refreshing taste of the Brazilian Caipirinha!",
        "Adjust sugar and lime to suit your taste preferences.",]} />
        {
          recipeData.map(eachrecepie=>{
            const{name,image,ingredients,instructions}=eachrecepie;
            return(
              <>
              <Heading1 title={name}/>
              <Img src={image} width={100} height={100} alt={name} />
              <Heading1 title={"Ingredients to prepare"}/>
              <CustomList list={ingredients}/>
              <Heading1 title={"Instructions to prepare"}/>
              <CustomList list={instructions}/>
              </>
            )
          })
        }

    </>
    
  )}
export default App;
