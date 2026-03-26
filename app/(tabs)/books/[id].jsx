import { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function BookDetail() {
  const book = useLocalSearchParams();
  const router = useRouter();

const [isFavorite, setIsFavorite] = useState(false);
const imageSource = typeof book.image === 'string' ? Number(book.image) : book.image;
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen 
        options={{
          headerShown: true,
          title: '',
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={{ marginLeft: 15 }}>
              <Ionicons name="chevron-back" size={28} color="black" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable 
              onPress={() => setIsFavorite(!isFavorite)} 
              style={{ marginRight: 20 }}
            >
              <Ionicons 
                // 根據狀態切換圖示名稱與顏色
                name={isFavorite ? "bookmark" : "bookmark-outline"} 
                size={26} 
                color={isFavorite ? "#6200EE" : "black"} 
              />
            </Pressable>
          ),
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
        }} 
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={book.image} style={styles.bookImage} />
        
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        
        
        <View style={styles.ratingRow}>
          {[1, 2, 3, 4].map((i) => (
            <Ionicons key={i} name="star" size={18} color="#FFD700" />
          ))}
          <Ionicons name="star" size={18} color="#ccc" />
          <Text style={styles.ratingText}> 4.0 / 5.0</Text>
        </View>

        <Text style={styles.description}>{book.description}</Text>

        <Pressable style={styles.buyButton}>
          <Text style={styles.buyButtonText}>BUY NOW FOR $46.99</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { 
    alignItems: 'center', 
    paddingHorizontal: 25,
    paddingBottom: 40 
  },
  bookImage: { 
    width: 220, 
    height: 320, 
    borderRadius: 12, 
    marginTop: 10,
    marginBottom: 20 
  },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' },
  author: { fontSize: 16, color: 'gray', marginBottom: 15 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  ratingText: { marginLeft: 10, color: 'gray', fontSize: 14 },
  description: { 
    textAlign: 'center', 
    lineHeight: 22, 
    color: '#666', 
    marginBottom: 30 
  },
  buyButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center'
  },
  buyButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});