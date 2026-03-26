import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router'; // 引入 Stack 控制標題 [cite: 719]
import { Ionicons } from '@expo/vector-icons';

export default function BookDetail() {
   
  const { title, author, image, description, rating } = useLocalSearchParams(); 

  
  const renderStars = () => {
    let stars = [];
    const currentRating = parseFloat(rating) || 0; 
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= currentRating;
      stars.push(
        <Ionicons 
          key={i} 
          name={isFilled ? "star" : "star-outline"} 
          color={isFilled ? "#FFD700" : "#ccc"} 
          size={18} 
        />
      );
    }
    return stars;
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Screen options={{ title: 'Book Info', headerBackTitle: 'Back' }} />

      <ScrollView contentContainerStyle={styles.container}>

        <Image source={image} style={styles.cover} />
        
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        
        <View style={styles.ratingRow}>
            <View style={styles.stars}>{renderStars()}</View>
            <Text style={styles.ratingText}> {rating}.0 / 5.0</Text>
        </View>

        <Text style={styles.description}>
          {description}
        </Text>

        <Pressable 
          style={({ pressed }) => [
            styles.buyButton,
            { opacity: pressed ? 0.8 : 1 }
          ]}
          onPress={() => alert('Added to cart!')}
        >
          <Text style={styles.buyText}>BUY NOW FOR $46.99</Text>
        </Pressable>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    padding: 20 
  },

  cover: { 
    width: 210, 
    height: 300, 
    borderRadius: 12, 
    marginTop: 10 
  },

  title: { 
    fontSize: 24,
    fontWeight: 'bold', 
    marginTop: 20, 
    textAlign: 'center' 
  },

  author: { 
    fontSize: 16, 
    color: 'gray', 
    marginVertical: 5 
  },

  ratingRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 10 
  },

  stars: { flexDirection: 'row' },

  ratingText: { 
    fontSize: 16, 
    color: '#666', 
    marginLeft: 8 
  },

  description: { 
    textAlign: 'center', 
    color: '#444', 
    lineHeight: 24, 
    marginVertical: 20, 
    paddingHorizontal: 10 },
  
  buyButton: { 
    backgroundColor: '#6200EE', 
    paddingVertical: 16, 
    paddingHorizontal: 60, 
    borderRadius: 30,
    marginTop: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  buyText: { color: 'white', fontWeight: 'bold', fontSize: 18 }
});