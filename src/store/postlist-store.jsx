import { createContext, useEffect, useReducer, useState } from "react";

export const Postlistdata = createContext({
  postList: [],
  addpost: () => {},
  fetching: false,
  deletepost: () => {},
});

const postlistreducer = (currpostlist, action) => {
  let newpostlist = currpostlist;
  if (action.type === "DELETE_POST") {
    newpostlist = currpostlist.filter(
      (post) => post.id != action.payload.postid
    );
  } else if (action.type === "ADD_ALL_POSTS") {
    newpostlist = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newpostlist = [action.payload, ...currpostlist];
  }

  return newpostlist;
};

const PostlistProvider = ({ children }) => {
  const [postList, dispatchpostlist] = useReducer(postlistreducer, []);

  const [fetching, setfetch] = useState(false);

  useEffect(() => {
    setfetch(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addallpost(data.posts);
        setfetch(false);
      });
  }, []);

  const addpost = (post) => {
    dispatchpostlist({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addallpost = (posts) => {
    dispatchpostlist({
      type: "ADD_ALL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletepost = (postid) => {
    dispatchpostlist({
      type: "DELETE_POST",
      payload: { postid },
    });
  };

  return (
    <Postlistdata.Provider value={{ postList, fetching, addpost, deletepost }}>
      {children}
    </Postlistdata.Provider>
  );
};

// const DEFAULT_POST=[{
//   id:'1',
//   user:'arpit29',
//   title:'Enjoying Coding',
//   body:'Learning React with JS , Amazing experience',
//   reaction:'6874',
//   hashtag:["coding","JS","Frontend"],
// }]

export default PostlistProvider;
