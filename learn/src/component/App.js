import React from 'react'
import Product from './product/product'
import './App.css'

class App extends React.Component{
    state = {
        products:[
            {id:1, title:'book 1', price: 85},
            {id:2, title:'book 2',price: 75},
            {id:3, title:'book 3',price: 65}
        ],
        showProducts : false
    }

    showHideHandler = () => {
        const show = this.state.showProducts
        this.setState( {showProducts : !show} )
    }


    render(){

        let Products = null

        if (this.state.showProducts) {
            Products = (
                <div>
                    {
                        this.state.products.map((item) => {
                            return <Product title = {item.title} price = {item.price} />  
                        })
                    }
                </div>
            )
        }

        return (
            <div id='main' className='container'>
                <h1>react App</h1>
                <button onClick={this.showHideHandler} className='button'>show/hide product</button>
                {Products}
                </div>
        )
    } 
}

export default App