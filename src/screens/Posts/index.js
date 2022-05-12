import { useEffect, useState } from 'react';
import axios from 'axios';

import List from '../../components/List';

const Posts = (props) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPosts(response.data));
  }, []);

  return <List posts={posts} />;
};

export default Posts;
