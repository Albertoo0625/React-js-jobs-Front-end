import React, { Component } from 'react'

const ContextProviderFunction=React.createContext();

class ContextProvider extends Component {
    state={
        testValue:'test value'
}
async componentDidMount(){
    
    const resetstate=()=>{this.setState(()=>{
        return{testValue:'contextTest'}   
    })}
    setTimeout(resetstate,2000)
}
  render() {
    return(
        <ContextProviderFunction.Provider value={{
            ...this.state,
        }}>
            {this.props.children}
        </ContextProviderFunction.Provider>
    )
  }
}

const ContextConsumer=ContextProviderFunction.Consumer;
export {ContextProvider,ContextConsumer}