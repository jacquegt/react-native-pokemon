import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'pokemonList': [],
    };
  }
  
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json())
    .then(responseJson => this.setState({pokemonList: responseJson.results}));
  }

  getPokemonData() {
    const {textForSearch} = this.props;
    const {pokemonList} = this.state;

    if (!textForSearch.length) {
      return pokemonList;
    }

    const listFiltered = pokemonList.filter((item) => item.name.toLowerCase().includes(textForSearch.toLowerCase()));
    return listFiltered;
  }
  render() {
    return(
      <View>
        <FlatList data={this.getPokemonData()} renderItem={({item}) => {
          const urlImageSplit = item.url.slice(0, -1).split('/');
          const pokemonId = urlImageSplit.pop();
          const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
          return (
            <View style={{backgroundColor: '#ccc', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
              <Image source={{uri: urlImage}} style={{width: 50, height: 50}}/>
              <Text>{`#${pokemonId}`}</Text>
              <Text>{item.name}</Text>
            </View>
          );
        }}/>
      </View>
    );
  }
}

export default PokemonList;