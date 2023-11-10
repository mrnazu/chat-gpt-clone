import Head from "next/head";
import Link from 'next/link';
import {useUser} from '@auth0/nextjs-auth0/client';

export default function Home() {
  const {isLoding, error, user} = useUser();

  if{isLoding} return <div>Loding...</div>
  if{error} return <div>{error.message}</div>
  return (
    <div>
      <Head>
        <title>HunterGPT</title>
      </Head>
      <h1>Welcome to the HunterGPT</h1>
      <div>
        {!!user && <Link href='/api/auth/logout'>Logout</Link>}
        {!user && <Link href='/api/auth/login'>Login</Link>}
        
      </div>
    </div>
  );
}
