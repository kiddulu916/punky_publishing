import Image from 'next/image';

const AuthorPhoto = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={'/author-photo.jpg'}
        width={300}
        height={300}
        alt='author photo'
        className='rounded-3xl shadow-lg'
      />
    </div>
  );
};

export default AuthorPhoto;