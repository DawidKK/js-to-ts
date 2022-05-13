import { useEffect, useState } from 'react';
import axios from 'axios';

import List from '../../components/List';
import { TPost } from '../../types';

const Posts = () => {
  const [posts, setPosts] = useState<TPost[] | []>([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPosts(response.data));
  }, []);

  return <List posts={posts} />;
};

export default Posts;
