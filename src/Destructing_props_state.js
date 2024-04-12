import react, {Component} from "react";

class Destructing extends Component {
    render(){

        const {name, food} = this.props
        return(
            <h1>Welcome mr {name}  your fav food {food}  is correct</h1>
        )
    }
}

export default Destructing