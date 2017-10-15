import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Itens from './item';

export default class ListaItens extends Component {
    constructor(props) {
        super(props);
        this.state = { listaItens: [] };
    }
    componentWillMount() {
        //faus.com.br/recursos/c/dmairr/api/itens.html
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => { this.setState({ listaItens:response.data }) })
            .catch((e) => {alert(e)});
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#f0f0f0'}}>
                { this.state.listaItens.map(item => { 
                    return (
                        <Itens key={item.titulo} item={item}/>)}
                    ) 
                }
            </ScrollView>
        );
    }
}

