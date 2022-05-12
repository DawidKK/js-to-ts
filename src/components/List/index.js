import Item from './Item';

const List = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <Item post={post} />
      ))}
    </ul>
  );
};

export default List;
