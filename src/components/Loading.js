import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <Loader
      type='Circles'
      color='#008000'
      height={100}
      width={100}
      visible='true'
    />
  );
};

export default Loading;
