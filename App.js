import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function LesserafimApp() {

  const openYoutubeLink = (youtubeLink) => {
    Linking.openURL(youtubeLink);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/e1/61/12/e16112c96ce2d501feef3ba13bbbd6e8.jpg' }}
        style={styles.groupPhoto}
      />
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/fe/50/a7/fe50a7778fcb76c814b511c186012ae4.jpg' }}
          style={styles.logo}
        />
        <Text style={styles.logoText}>Lesserafim</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Lesserafim</Text>
        <Text style={styles.description}>
        LE SSERAFIM Fandom Name: FEARNOT (피어나){'\n'}
        LE SSERAFIM Fandom Color: Fearless Blue
        </Text>
      </View>
      <View style={styles.albumContainer}>
        <Text style={styles.sectionTitle}>Albums</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => openYoutubeLink('https://youtu.be/4vbDFu0PUew?si=dcTwSHwT_7K3E1pM')}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/99/ea/1a/99ea1ac4bdc62d18231cdd56960d4ebe.jpg' }}
              style={styles.albumCover}
            />
              <Text style={styles.albumTitle}>Fearless</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openYoutubeLink('https://youtu.be/pyf8cbqyfPs?si=PTq1xOM0-t9JGEDz')}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/bc/78/b5/bc78b595a1d3875083c4046906887b16.jpg' }}
              style={styles.albumCover}
            />
             <Text style={styles.albumTitle}>Antifragile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openYoutubeLink('https://youtu.be/oA8QPRqdVYA?si=1GcuOKBaaM1Y7eo7')}>
            <Image
              source={{ uri: 'https://i.pinimg.com/736x/51/87/ad/5187ad42aa562de3b771124c7f636e07.jpg' }}
              style={styles.albumCover}
            />
             <Text style={styles.albumTitle}>Unforgiven</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openYoutubeLink('https://youtu.be/hLvWy2b857I?si=XtLhqzbFFuBm1reP')}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/61/ab/d6/61abd61c7885eccc5632636515f814af.jpg' }}
              style={styles.albumCover}
            />
             <Text style={styles.albumTitle}>Perfect Night</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.albumContainer}>
        <Text style={styles.sectionTitle}>Songs</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => openYoutubeLink('https://youtu.be/V9Wsm0hlLUI?si=6seteas-qP9BOlv-')}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/0e/4f/ae/0e4fae9d234394116606f9930cf8d414.jpg' }}
              style={styles.albumCover}
            />
             <Text style={styles.albumTitle}>Sour Grapes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openYoutubeLink('https://youtu.be/dd3tlEL9Cmg?si=oJWwGpdR4GgLIM6g')}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/70/2f/06/702f06654b71a796dd0059a5728bfa95.jpg' }}
              style={styles.albumCover}
            />
            <Text style={styles.albumTitle}>Impurities</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openYoutubeLink('https://www.youtube.com/watch?v=your_video_id3')}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/73/38/e4/7338e42882e9f85e83d3fc06d43c64ae.jpg' }}
              style={styles.albumCover}
            />
            <Text style={styles.albumTitle}>FEARNOT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openYoutubeLink('https://youtu.be/Uf4nGafC-zw?si=6FBalU6JztCofxJS')}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/5e/f8/b9/5ef8b9b331d7e7b8c167989ff67d090a.jpg' }}
              style={styles.albumCover}
            />
            <Text style={styles.albumTitle}>Perfect Night</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.membersContainer}>
        <Text style={styles.sectionTitle}>Lesserafim Members</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.memberItem}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/9d/67/2a/9d672a34f678d94e173879df1021f333.jpg' }}
              style={styles.memberImage}
            />
            <Text style={styles.memberName}>Kim Chae Won (김채원)</Text>
            <Text style={styles.memberPosition}> Leader, Vocalist, Dancer</Text>
          </View>
          <View style={styles.memberItem}>
            <Image
              source={{ uri: 'https://i.pinimg.com/736x/fb/02/8e/fb028e801b90f9fcb1ef7e0c3f43d4ae.jpg' }}
              style={styles.memberImage}
            />
            <Text style={styles.memberName}>Miyawaki Sakura (사쿠라)</Text>
            <Text style={styles.memberPosition}>Vocalist, Rapper, Dancer</Text>
          </View>
          <View style={styles.memberItem}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/f8/3c/4b/f83c4b65902a6d4b5d4860b66877c6eb.jpg' }}
              style={styles.memberImage}
            />
            <Text style={styles.memberName}>Huh Yunjin (허윤진)</Text>
            <Text style={styles.memberPosition}>Vocalist, Rapper</Text>
          </View>
          <View style={styles.memberItem}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/60/64/36/606436d5b122ef77f98c3c42525d8c0d.jpg' }}
              style={styles.memberImage}
            />
            <Text style={styles.memberName}>Kazuha (카즈하)</Text>
            <Text style={styles.memberPosition}>Sub-Vocalist, Rapper, Dancer</Text>
          </View>
          <View style={styles.memberItem}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/57/3d/a2/573da27354c727ba234f06c316885823.jpg' }}
              style={styles.memberImage}
            />
            <Text style={styles.memberName}>Hong Eunchae (홍은채)</Text>
            <Text style={styles.memberPosition}>Vocalist, Lead Dancer, Maknae</Text>
          </View>   
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Arlene Joy Nacion. All rights reserved.</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   groupPhotoContainer: {
    marginTop: 20,
    position: 'absolute',
  },
  groupPhoto: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    opacity: 0.9,
    marginTop: 90,
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 70,
    resizeMode: 'cover',
    zIndex: 1,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
  infoContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', 
  },
  description: {
    top: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  albumContainer: {
    marginTop: 20,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black', 
  },
  albumCover: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginHorizontal: 5,
  },
  albumTitle: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
    textAlign: 'center', 
  },
  membersContainer: {
    marginTop: 20,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
  },
  memberItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  memberImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  memberPosition: {
    fontSize: 16,
    color: '#555',
  },
  footer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#555',
  },
});
