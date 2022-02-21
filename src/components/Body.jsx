import react from "react";
import { Component } from "react/cjs/react.production.min";

class Body extends Component{

    constructor(props){
        super(props);
        this.state = {
            results: [],
           isPrintedHere: false
        };
    };

        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((anything) => {
                this.setState({
                    results:anything,
                   isPrintedHere:true
                });
            });
    }
   
    render() {
        const {isPrintedHere, results } = this.state;
        if (!isPrintedHere) 
        return <div>
                  <h1> Wait a damn minute... </h1>
              </div> ;
    
        return(
            <div>
                <h1>List of names</h1>
            {
                results.map((item)=>(
                    <ul>
                        <li key={item.id}>
                         { item.name }
                        </li> 
                        <img src = { item.url }></img>
                    </ul>
                ))
            }
            </div>
        )
   }
}

export default Body;