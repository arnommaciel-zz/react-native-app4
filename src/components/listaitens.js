import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

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
            <View>
                <Text>Component</Text>
            </View>
        );
    }
}

