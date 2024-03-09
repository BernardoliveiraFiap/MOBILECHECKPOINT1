import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
  SafeAreaView,
} from 'react-native';
import styles from './styles/styles';

const HomeScreen = () => {
  const handlePlayButtonPress = () => {
    Linking.openURL('https://www.youtube.com/watch?v=dn9_U-50U_E&t=62s');
  };

  return (
    <SafeAreaView style={styles.darkBackground}>
      <StatusBar backgroundColor="#6a0080" barStyle="light-content" />

      <ScrollView>
        {/* Light Purple Background with Episode Description */}
        <View style={styles.lightPurpleContainer}>
          <Image source={require('./assets/images/image1.jpg')} style={styles.image} />
          <Text style={styles.description}>When You Are Lost in the Darkness</Text>
        </View>

        {/* Dark Purple Background with Season Title */}
        <View style={styles.darkPurpleContainer}>
          <Text style={styles.seasonTitle}>Temporada 1, EP 1 - Trailer</Text>
          <Text style={styles.episodeTitle}>When You Are Lost in the Darkness</Text>
          <Text style={styles.episodeSummary}>Tudo começa em 2003 diferente do jogo, lá
           o prólogo se passa em 2013, nele vamos conhecer a família Miller, Joel, o 
           pai interpretado pelo incrível Pedro Pascal, Sarah, sua única filha 
           interpretada pela até então pouco conhecida Nico Parker e Tommy, seu  irmão caçula interpretado por Gabriel Luna de Agents Of Shield. Eles 
           vivem em Austin, Texas e podemos ver como eram suas vidas antes do surto do fungo Cordyceps. esse fungo realmente existe e é capaz de 
           transformar insetos em zumbis! Confira o Trailer abaixo :
          </Text>

          {/* Image with Play Button */}
          <TouchableOpacity onPress={handlePlayButtonPress}>
            <Image source={require('./assets/images/image3.jpg')} style={styles.playImage} />
            <Image source={require('./assets/images/image.png')} style={styles.middleImage} />
          </TouchableOpacity>
        </View>

        {/* FooterNames */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Enzo Oliveira 551356</Text>
          <Text style={styles.footerText}>Matheus Colossal 99572</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
