import { Component } from "react";




class Props_class extends Component{
    constructor(){
        super()
    
    }
    render(){
        return(
            <h2>Sample1 {this.props.color}{this.props.width}</h2>
        )
    }
}

export default Props_class 