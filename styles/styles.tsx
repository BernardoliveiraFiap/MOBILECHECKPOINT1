// styles/styles.tsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#673AB7', // Altere para a cor roxa escura desejada
  },
  lightPurpleContainer: {
    backgroundColor: '#734eb7', // Altere para a cor roxa clara desejada
    padding: 10,
  },
  image: {
    width: '100%', // Ajuste a largura da primeira imagem aqui
    height: 530, // Ajuste a altura da primeira imagem aqui
    resizeMode: 'cover',
    borderRadius: 10, // Adicione bordas arredondadas à primeira imagem aqui
  },
  description: {
    color: '#ffffff',
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold', // Coloque em negrito
    textAlign: 'center', // Centralize o texto
  },
  darkPurpleContainer: {
    backgroundColor: '#5f3f96', // Altere para a cor roxa escura desejada
    padding: 10,
  },
  seasonTitle: {
    color: '#e6e6e6',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Centralize o texto
  },
  episodeTitle: {
    color: '#e6e6e6',
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold', // Coloque em negrito7
    textAlign: 'center', // Centralize o texto
  },
  episodeSummary: {
    color: '#dfdfdf',
    fontSize: 19,
    marginTop: 10,
    textAlign: 'center', // Centralize o texto
    padding: 10, // Adicione algum preenchimento
    borderWidth: 1, // Adicione uma borda
    borderColor: '#b9b9b9', // Faça a borda ser branca
    borderRadius: 10, // Adicione bordas arredondadas
  },
  playImage: {
    borderWidth: 1, // Adicione uma borda
    width: '100%', // Ajuste a largura da segunda imagem aqui
    height: 250, // Ajuste a altura da segunda imagem aqui
    resizeMode: 'cover',
    marginTop: 10,
    borderRadius: 10, // Adicione bordas arredondadas à primeira imagem aqui
  },
  middleImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 50, // Ajuste a largura da imagem do meio aqui
    height: 50, // Ajuste a altura da imagem do meio aqui
    transform: [{ translateX: -25 }, { translateY: -25 }], // Ajuste a posição da imagem do meio aqui
  },
  darkBackground: {
    flex: 1,
    backgroundColor: '#5f3f96', // Altere para a cor roxa escura desejada
  },
});

export default styles;
