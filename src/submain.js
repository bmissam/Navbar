import React from "react"


class SubMain extends React.Component {
    render (){
        return ( <div>
            {this.props.subMain.map(el=> <div>
                <li>{el.name}</li>
                </div>
                )}
                </div>
           
            
            )
    }
}
export default SubMain  