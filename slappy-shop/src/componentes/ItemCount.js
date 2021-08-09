import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/estilo.css'

class ItemCount extends React.Component{
constructor(props){
    super(props);
    this.state = {inicial: 1}
}

sumProducto(){
    this.setState({inicial: this.state.inicial + 1});
}
restProducto(){
    this.setState({inicial: this.state.inicial - 1});
}



    render (){
        return(
            <div className="itemCount">
                <h4>Unidades</h4>
                <button onClick={this.restProducto.bind(this)} >-</button>
                <button onClick={this.sumProducto.bind(this)}>+</button>
                <p>{this.state.inicial}</p>
            </div>
        )
    }
}


export default ItemCount;