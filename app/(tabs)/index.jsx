import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import BookCard from '../../components/BookCard.js';

const PopularBooks = [
  { 
    id: '1', 
    title: 'Fashionopolis' , 
    author: 'Dana Thomas', 
    image: require('../../assets/img/app course - book app (android)/img_book_fashinopolis.png') 
  },
  { 
    id: '2', 
    title: 'Chanel', 
    author: 'Patrick Mauriès', 
    image: require('../../assets/img/app course - book app (android)-2/img_book_chanel.png') 
  },
  { 
    id: '3', 
    title: 'Calligraphy', 
    author: 'June & Lucy', 
    image: require('../../assets/img/app course - book app (android)-3/img_book_calligraphy.png') 
  },
];

const NewestBooks = [
  {
    id: '1',
    image: require('../../assets/img/app course - book app (android)-4/img_book_ysl.png'),
    title: 'Yves Saint Laurent',
    author: 'Suzy Menkes',
    rating: 4,
    description: "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
  },
  {
    id: '2',
    image: require('../../assets/img/app course - book app (android)-5/img_book_tbos.png'),
    title: 'The Book of Signs',
    author: 'Rudolf Koch',
    rating: 4,
    description: "A comprehensive collection of symbols and their meanings, exploring the rich tapestry of human communication through signs and symbols.",
  },
  {
    id: '3',
    image: require('../../assets/img/app course - book app (android)-6/img_book_stitchedup.png'),
    title: 'Stitched Up',
    author: 'Tansy E. Hoskins',
    rating: 4,
    description: "A critical examination of the fashion industry, revealing the hidden costs of fast fashion and advocating for a more sustainable and ethical approach to clothing production and consumption.",
  },
];

export default function HomeScreen() {
  const router = useRouter();

   const renderbookcard = ({ item }) => {
    return <BookCard book={item} />;
  };
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Popular Books</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.popularList}
        >
          {PopularBooks.map((item) => (
            <Pressable 
              key={item.id} 
              style={styles.popularCard}
              onPress={() => router.push({
                pathname: `/(tabs)/books/${item.id}`,
                params: { ...item }
              })}
            >
              <Image source={item.image} style={styles.popularImage} />
              <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
            </Pressable>
          ))}
        </ScrollView>

      <Text style={styles.sectionTitle}>Newest</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
      >
       
       {NewestBooks.map((item) => (
        <BookCard key={item.id} book={item} />
        ))}
      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  sectionTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginHorizontal: 20, 
    marginTop: 25, 
    marginBottom: 15 
  },
  popularList: { 
    paddingLeft: 20, 
    paddingBottom: 20 
  },
  popularCard: { 
    marginRight: 20, 
    width: 140,
  },
  popularImage: { 
    width: 140,  
    height: 200, 
    borderRadius: 8,
    backgroundColor: '#f0f0f0', 
  },
  
  newestList: { 
    paddingLeft: 20, 
    paddingBottom: 40 
  },
  bookTitle: { 
    fontSize: 16, 
    marginTop: 10 
  },
  bookAuthor: { 
    fontSize: 12, 
    color: 'gray' 
  }
});