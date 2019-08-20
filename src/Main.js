import React from "react"


class Main extends React.Component {
    render (){
        return (
        <div className="navigation">
        {this.props.nav.map(el=> 
             <div className={el.name} >
                 <li className="items">{el.name}</li>
                 <div className="deroulant">
             {(el.submenu)&& (el.submenu.map(el=> <li className="subitem">{el.name}</li>))} 
             </div>
        

        
            
            </div>
            )}
           
            </div>
           
            
            )
    }
}
export default Main  