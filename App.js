// App.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Post from './components/post';
const App = () => {
  const posts = [
    {
      user: { name: 'Hoang Pham', avatar: 'https://a.omappapi.com/users/db5a333aac98/images/48472ded696a1710164792-v3.jpg?width=1320' },
      content: 'Khao Sok National Park In Thailand',
      image: 'https://theworldtravelguy.com/wp-content/uploads/2024/09/DJI_0757-3.jpg',
      likes: 0,
      comments: 0,
      shares: 0,
    },
    {
      user: { name: 'Hoang Nguyen', avatar: 'https://theworldtravelguy.com/wp-content/uploads/2021/12/Img_7718.jpg' },
      content: 'Ancient Corinth On A Day Trip From Athens',
      image: 'https://theworldtravelguy.com/wp-content/uploads/2024/09/DSCF2468.jpg',
      likes: 0,
      comments: 0,
      shares: 0,
    },
    {
      user: { name: 'Hung Nguyen', avatar: 'https://youngadventuress.com/wp-content/uploads/2017/09/IMG_0655.jpg' },
      content: 'Himeji Castle On A Day Trip From Osaka & Kyoto',
      image: 'https://theworldtravelguy.com/wp-content/uploads/2018/11/IMG_0702.jpg',
      likes: 0,
      comments: 0,
      shares: 0,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {posts.map((post, index) => (
        <Post 
          key={index} 
          user={post.user} 
          content={post.content} 
          image={post.image} 
          likes={post.likes} 
          comments={post.comments} 
          shares={post.shares} 
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    marginBottom:40,
    flex: 1,
    backgroundColor: '#c4c7cf',
  },
});

export default App;
