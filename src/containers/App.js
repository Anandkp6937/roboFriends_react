import  React ,{Component}from 'react'
import Cardlist from "../components/Cardlist"
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll'
import Errorboundary from '../components/Errorboundry'
class  App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchFeild:''
        }
    }
    componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=>res.json())
       .then(users=>this.setState({robots:users}))
       .catch(err=>console.log(err))
    }
    onSearchChange=(e)=>{
        this.setState({searchFeild:e.target.value})
       
    }
    render(){
        const filteredRobot=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchFeild.toLowerCase())
        })
        return(
            <div className="tc">
                <h1>Robo friends</h1>
                <Searchbox change={this.onSearchChange}/>
                <Scroll>
                <Errorboundary>
                <Cardlist robots={filteredRobot}/>
                </Errorboundary>
                </Scroll>
             
            </div>
        )
        }
    
}
export default App;