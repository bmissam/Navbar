import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main.js' ;
import SubMain from './submain.js'

 
const navmenu =[
  {
    name : 'Home'
  },
  {
    name : 'Services' ,
    submenu :[
      {
        name : 'For Entrepreneurs'
      },
      {
        name : 'For students'
     
      },
      {
        name : 'For hobbysists '
       
      }
    ]
 
  },
 
  {
    name : 'Contact '
   
  }
]

class App extends React.Component{
    
  constructor (props) {
  super (props)

 } 
 render (){
  return (
    <div className="App">
        <div >
          
          <ul className="navmenu" >
          <Main nav={navmenu}/>
        
           
        
                    </ul>
      
        </div>
    </div>
  )
}
}

export default App;
