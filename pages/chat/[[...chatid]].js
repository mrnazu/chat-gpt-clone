import { chatSideBar } from "components/chatSideBar";
import Head from "next/head";
import { useState } from "react";

export default function ChatPage() {
  const [messageText, setMessageText] = useState("");
  const handleSubmit = (e) => {
    console.log("Message: ", messageText)
  }

  return (
    <>
      <Head>
        <title>New Chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
        <chatSideBar />
        <div className="flex flex-col bg-gray-950 text-white">
          <div className="flex-1">response bar</div>
          <footer className="p-18 bg-gray-800">
            <form onSubmit={handleSubmit}>
              <fieldset className="flex gap-2">
                <textarea
                  value={messageText}
                  onChange={e => setMessageText(e.target.value)}
                  placeholder="Send a message.."
                  className="w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:border-emerald-500 focus:bg-gray-600 focus:outline focus:outline-emerald-500"
                />
                <button className="btn" type="submit">
                  Send
                </button>
              </fieldset>
            </form>
          </footer>
        </div>
      </div>
    </>
  );
}
