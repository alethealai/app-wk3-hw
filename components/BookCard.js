import React from "react";
import { Pressable, Text, Image, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function BookCard({ book }) {
    const router = useRouter();

    const renderStars = () => {
        let stars = [];
        const currentRating = parseFloat(book.rating) || 0;
        for (let i = 1; i <= 5; i++) {
            const isFilled = i <= currentRating;
            stars.push(
                <Ionicons 
                    key={i} 
                    name={isFilled ? "star" : "star-outline"} 
                    color={isFilled ? "#FFD700" : "#ccc"} 
                    size={14} 
                />
            );
        }
        return stars;
    };

    return (
        <Pressable
            style={({ pressed }) => [
                styles.card,
                { opacity: pressed ? 0.7 : 1 }
            ]}
            onPress={() => {
                router.push({
                    pathname: `/books/${book.id}`, 
                    params: { 
                        title: book.title, 
                        author: book.author, 
                        image: book.image, 
                        description: book.description,
                        rating: book.rating 
                    } 
                });
            }}
        >
            
            <Image source={book.image} style={styles.img} />

           
            <View style={styles.ratingRow}>
                {renderStars()}
            </View>
                
            <Text style={styles.title} numberOfLines={1}>
                {book.title}
            </Text>

            <Text style={styles.author}>
                {book.author}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: { 
        width: 140,         
        marginRight: 25,    
        marginBottom: 20     
    }, 

    img: { 
        width: 140, 
        height: 200, 
        // borderRadius: 8     
    },

    title: { 
        fontSize: 16, 
        fontWeight: 'bold',
        marginTop: 4  
    },

    author: { 
        fontSize: 12, 
        color: 'gray'
    },

    ratingRow: { 
        flexDirection: 'row', 
        marginTop: 8,
        marginBottom: 4 
    },
});