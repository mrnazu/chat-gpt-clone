import {chatSideBar} from '/components/chatSideBar'
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>New Chat</title>
      </Head>

      <div className="grid h-screen grid-cols-[260px_1fr]">
       
        <chatSideBar />
        
        <div className="flex flex-col bg-gray-950 text-white">
          <div className="flex-1">response bar</div>
          <footer className="bg-gray-800 p-18">prompt bar</footer>
        </div>
      </div>
    </>
  );
}
