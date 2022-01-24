import React,{ Component } from 'react';
import './App.css';
import BlogCotainer from '../../components/cardContainers/BlogContainer/BlogCotainer';
import UserContainer from '../../components/cardContainers/UserContainer/UserContainer';
import Popup from '../../components/Popup/Popup';



export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts:[],
            users:[],
            actionType:"posts",
            isPopupOpen:false,
            selectedUser:{}
        }
    }

    componentDidMount = async() => {
         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
         const fetchedPosts = await response.json();
         console.log(fetchedPosts); 
         this.setState({posts : fetchedPosts});
    }

    handleButtonClick = async(type) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
        const fetchedData = await response.json();
        console.log(fetchedData); 

        await this.setState({actionType:type});

        if (type === "blogs") {
            await this.setState({posts : fetchedData});
        }else{
            await this.setState({users : fetchedData});
        }
        
    }

    userClickedHandler = async(currentUser) => {
        console.log("user is clicked")
        await this.setState({selectedUser: currentUser, isPopupOpen : true})
    }

    closePopup = async() => {
        await this.setState({selectedUser: {}, isPopupOpen : false})
    }



    render() {
        const {posts,users,actionType,isPopupOpen,selectedUser} = this.state;
        return (
            <>
                {isPopupOpen ? <Popup user={selectedUser} closePopup={this.closePopup}/> : null}
                <div>
                    <button 
                    onClick={() => this.handleButtonClick('posts')}
                    className={actionType === 'posts' ? "active" : null}
                    >
                        See Blogs
                    </button> 
                    <button 
                    onClick={() => this.handleButtonClick('users')}
                    className={actionType === 'users' ? "active" : null}
                    >
                        See Users
                    </button>

                    {actionType === 'posts' ? <BlogCotainer posts={posts}/> 
                                            : <UserContainer users={users} userClickedHandler={this.userClickedHandler}/>}
            
    
                    {/* <div className='cardContainer'>
                        {actionType === 'posts' ? (
                            posts.map(post => <BlogCard currentPost={post}/> )
                        ) : (
                            users.map(user => <UserCard currentUser={user}/> )
                        )}
                    </div> */}
                </div>
            </>
        )
    }
}


// state={
//     blogs:[],
//     users:[],
//     actionType:'blogs'
// }
