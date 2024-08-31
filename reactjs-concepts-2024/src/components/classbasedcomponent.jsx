import { Component } from 'react';

class ClassBasedComponent extends Component {
    //state management 
    state= {
        showText : false,
        changeColor : false,
        count : 0,
        changeCountStyle : false,
    };

    
    handleClick = () => {
        this.setState(
            {
                showText: !this.state.showText,
                changeColor : !this.state.changeColor
            }
        );
    }

    

    //componentDidMount
    //componentDidUpdate
    //componentWillUnmount

    componentDidMount(){
        console.log("this is called first time on page load");
        this.setState(
            {
                showText: !this.state.showText,
                changeColor : !this.state.changeColor
            }
        );
    }

    handleCount = () => {
       this.setState({
        ...this.state,
        count: this.state.count + 1
       })
    }

    componentDidUpdate(prevProps, prevState) {
       if(prevState && prevState.count !== this.state.count && this.state.count == 10){
        this.setState({
            ...this.state,
            changeCountStyle :  true
        })
       }
    }

    componentWillUnmount(){
        console.log("component is getting unmounted");
    }



    render(){
        const {showText, changeColor, count, changeCountStyle} = this.state;
        
        return (
            <div>
                {showText ? <h1 style={{color :changeColor ? 'red' : 'green' }}>I am from class based component!</h1> : null}
                
                <button onClick={this.handleClick}>Toggle Class</button>
                <button onClick={this.handleCount}>Increase Count Value</button>
                <h3 style={{color : changeCountStyle ? 'blue' : 'black',
                            fontSize : changeCountStyle ? '30px': '12px'}}>Count is {count}</h3>
            </div>
        )
    }

}

export default ClassBasedComponent;