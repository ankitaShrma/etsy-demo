import React from "react"
import { Button } from '@material-ui/core';

const EachProduct = (props)=>{
  console.log(props)
return <h1>{props.name} {props.user} {props.price}</h1>
}
const data = [{
  name: "data1",
  user:"user1",
  price:1
},
{
  name: "data2",
  user:"user2",
  price:2
},
{
  name: "data3",
  user:"user3",
  price:3
},
{
  name: "data4",
  user:"user4",
  price:4
}]
class Product extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isloading:true,
      data:[]
    }
  }
  componentDidMount(){
    // api call >> state update
    setTimeout(() => {      
      this.setState({isloading:false, data: data})
    }, 3000);
  }  


  render(){
    
    if(!this.state.isloading){
      return (
        <ul>
          {this.state.data.map((value) => {
            return <EachProduct name={value.name} user={value.user} price={value.price}/>
          })}
        </ul>
      )
    }
    return <EachProduct name="hi"/>
    
  }
}

export default Product