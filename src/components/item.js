import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Itens extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={styles.item}>
                <View style={styles.foto}>
                    <Image style={{height:100, width:100}} source={{ uri:this.props.item.foto }}/>
                </View>
                <View style={styles.detalhes.view}>
                    <Text style={styles.detalhes.titulo}>{this.props.item.titulo}</Text>
                    <Text style={styles.detalhes.valor}>R$ {this.props.item.valor}</Text>
                    <Text style={styles.detalhes.desc}>Local: {this.props.item.local_anuncio}</Text>
                    <Text style={styles.detalhes.desc}>Data: {this.props.item.data_publicacao}</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    item:{
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row'
    },
    foto:{
        width: 100,
        height: 100
    },
    detalhes:{
        view:{
            marginLeft: 10,
            flex: 1
        },
        titulo:{
            fontSize: 18,
            color:'#bd0000',
            marginBottom: 5
        },
        valor:{
            fontSize:16,
            fontWeight: 'bold'
        },
        desc:{
            fontSize:14,
        }
    }
};