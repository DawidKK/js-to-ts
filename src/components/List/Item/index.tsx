import { TPost } from '../../../types';

type TProps = {
  post: TPost;
};

const Item = ({ post }: TProps) => {
  return <li>{post.title}</li>;
};

export default Item;
