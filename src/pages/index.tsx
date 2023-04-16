import { useRouter } from 'next/router';

export default function Main() {
  const router = useRouter();

  const handleChangeRouter = () => {
    router.push('/home');
  };

  return (
    <>
      <div>test</div>
      <button className="cypressTest" onClick={handleChangeRouter}>
        {' '}
        cypress{' '}
      </button>
    </>
  );
}
