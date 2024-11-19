import { useState } from "react";
import React from "react";
import { View,Text,Image,Button,TouchableOpacity,StyleSheet} from 'react-native'
import likedIcon from '../assets/icons/like-2.png'; // Import biểu tượng Like
import likeIcon from '../assets/icons/like.png'; // Import biểu tượng Like
import commentIcon from '../assets/icons/chat.png'; // Import biểu tượng Comment
import shareIcon from '../assets/icons/share.png'; // Import biểu tượng Share
const Post = ({user,content,likes,image,comments,shares}) =>{
    const [likeCount,setLikeCount] = useState(likes);
    const [liked,setliked] = useState(false);
    const [commentCount,setCommentCount] = useState(comments);
    const [shareCount,setShareCount] = useState(shares);

    const handleLike = () =>{
        if(liked)
        setLikeCount(likeCount - 1);
        else
        setLikeCount(likeCount + 1);
    setliked(!liked)
}
const handleComment = () => {
    setCommentCount(commentCount + 1);
  };

  const handleShare = () => {
    setShareCount(shareCount + 1);
  };
return(
    <View style = {styles.postContainer}>
        <View style = {styles.userContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{user.name}</Text>
        </View>
        <Text style = {styles.content}>{content}</Text>
        {image && <Image source={{ uri: image }} style={styles.postImage} />}
        <View style = {styles.actionsCount}>
        <Text style = {styles.button}>{likeCount} Likes</Text>
        <Text style = {styles.button}>{commentCount} Comments</Text>
        <Text style = {styles.button}>{shareCount} Shares</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.actions}>
        <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
        <Text style={[ liked && styles.liked]} ><Image source={liked ? likedIcon : likeIcon} style={styles.icon} /> Like</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComment} style={styles.actionButton}>
        <Text ><Image source={commentIcon} style={styles.icon} /> Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare} style={styles.actionButton}>
        <Text ><Image source={shareIcon} style={styles.icon} /> Share</Text>
        </TouchableOpacity>
      </View>
    </View>
);
};
const styles = StyleSheet.create({
    postContainer: {
     borderRadius:15,
      margin : 5,
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      backgroundColor:'white'
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    username: {
      fontWeight: 'bold',
    },
    content: {
      marginVertical: 10,
    },
    postImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
    divider: {
      height: 1,
      backgroundColor: '#ccc',
      marginVertical: 10,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button:{
        color:'#aeb0b5'
    },
    liked:{
        color:'#779af2'
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,
      },
    actionsCount:{
      paddingTop : 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  });
  
  export default Post;
  