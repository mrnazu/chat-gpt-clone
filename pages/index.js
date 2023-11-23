import Head from "next/head";
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/dist/server/api-utils";



export default function Home() {
  const { isLoding, error, user } = useUser();

  if (isLoding) return <div>Loding...</div>
  if (error) return <div>{error.message}</div>
  return (
    <>
      <Head>
        <title>HunterGPT - Login/Signup</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen w-full bg-gray-950 text-white text-cnter">
        <div>
          {!!user && <Link href='/api/auth/logout'>Logout</Link>}
          {!user && (
            <>
              <Link
                href='/api/auth/logout'
                className="rounded-md bg-green-800 px-4 py-2 text-white hover:bg-green-950"
              >
                Logout
              </Link>

              <Link
                href='/api/auth/login'
                className="rounded-md bg-green-800 px-4 py-2 text-white hover:bg-green-950"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}


export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx.req, ctx.res);
  if (!!session) {
    return {
      redirect: {
        destination: "/chat"
      }
    }
  }
  
  return {
    props: {}
  }
}