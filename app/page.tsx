"use client";
import CopyToClipboardButton from "@/components/CopyToClipboardButton";
import Link from "next/link";
import React from "react";
import { FaTelegram } from "react-icons/fa6";

const Home: React.FC = () => {
  const textToCopy = "M300TK";

  return (
    <main className="w-full min-h-screen  flex items-center justify-center p-4 sm:p-6 ">
      <div className="bg-transparent w-full min-h-screen sm:w-96  p-5 my-5  rounded-lg drop-shadow-2xl border-2 border-sky-300">
        <div className="flex flex-col gap-y-9 items-center justify-around">
          <h1 className="text-2xl font-bold text-center text-white">Mamun</h1>
          <div className="w-36 h-36 rounded-full border-4 border-sky-400 flex items-center justify-center ">
            <h1 className="font-extrabold text-4xl ">
              <span className="text-sky-400">1X</span><span className="text-white" >BET</span> 
            </h1>
          </div>
          <div className="flex justify-center items-center w-full">
            <Link
              href="https://app.appsflyer.com/org.xbet.client1-Custom?pid=FromFriend&amp;c=24eaa31c0fa14_4521342273&amp;tag=24eaa31c0fa14_4521342273&amp;af_r=https%3A%2F%2Fwww.bkre22.com%2Fdownloads%2Fandroidclient%2Freleases_android%2F1xbet%2Fsite%2F1xbet.apk&amp;is_retargeting=1"
              className="font-bold p-3 border-2 rounded-xl border-sky-400 text-xl text-white transition-all hover:text-yellow-600 ease-in duration-300 "
            >
              Download app
            </Link>
          </div>
          <div className="border-2 border-white rounded-md w-full flex flex-col items-center justify-between gap-y-8 py-6">
            <h1 className="text-white font-semibold text-2xl">
              Promo Code copy
            </h1>
            <h2 className="text-amber-400 font-bold text-2xl">{textToCopy}</h2>
            <CopyToClipboardButton text={textToCopy} />
          </div>
          <div className="border-2 border-amber-500 rounded-md w-full flex flex-col items-center justify-between gap-y-8 py-8">
            <div>
              <h1 className="text-white font-semibold text-2xl text-center">
                Click Below button
              </h1>

              <p className="font-normal text-sm text-center text-white">
                নিচের বোতামে ক্লিক করুন
              </p>
            </div>

            <Link
              href="https://1xlite-579542.top/mobile?bf=24eaa31c0fa14_4521342273"
              className="font-bold p-3 border-2 rounded-xl border-sky-400 text-2xl text-white transition-all ease-in duration-300 hover:text-yellow-500 hover:border-yellow-500"
            >
              Create account
            </Link>
          </div>

          <div><Link href={'https://t.me/bangladesh_bet_promo_code_M300TK'} className="text-5xl text-sky-400 "><FaTelegram  /></Link></div>
        </div>
      </div>
    </main>
  );
};

export default Home;
