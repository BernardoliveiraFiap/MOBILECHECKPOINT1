import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#673AB7',
  },
  lightPurpleContainer: {
    backgroundColor: '#734eb7',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 530,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    color: '#ffffff',
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  darkPurpleContainer: {
    backgroundColor: '#5f3f96',
    padding: 10,
  },
  seasonTitle: {
    color: '#e6e6e6',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  episodeTitle: {
    color: '#e6e6e6',
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  episodeSummary: {
    color: '#dfdfdf',
    fontSize: 19,
    marginTop: 10,
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#b9b9b9',
    borderRadius: 10,
  },
  playImage: {
    borderWidth: 1,
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginTop: 10,
    borderRadius: 10,
  },
  middleImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 50,
    height: 50,
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  darkBackground: {
    flex: 1,
    backgroundColor: '#5f3f96',
  },
  // estilos para o rodapé
  footer: {
    backgroundColor: '#48297d',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
