import Item from './Item';
import { TPost } from '../../types';

type TProps = {
  posts: TPost[];
};

const List = ({ posts }: TProps) => {
  return (
    <ul>
      {posts?.map((post: TPost) => (
        <Item post={post} />
      ))}
    </ul>
  );
};

export default List;
