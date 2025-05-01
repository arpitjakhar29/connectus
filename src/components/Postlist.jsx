import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { Postlistdata } from "../store/postlist-store";
import Welcomemsg from "./Welcomemsg";
import LoadingSpinner from "./LoadingSpinner";

const Postlist = () => {
  const { postList, fetching } = useContext(Postlistdata);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Welcomemsg />}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default Postlist;
