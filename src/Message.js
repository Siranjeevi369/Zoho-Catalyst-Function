import React, {Component} from "react";
class Message  extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Siranjeevi'
        }
    }

    changeMessage(){
        this.setState({
            message:'Hrello Siranjeevi your winning inth match'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
            
        )
    }
} 

export default Message