import Image from "next/image";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Lora } from "next/font/google";
import { Kaisei_Opti } from "next/font/google";

const LoraFont = Lora({
  weight: "400",
  subsets: ["latin"],
});

const KaiseiFont = Kaisei_Opti({
  weight: "400",
  subsets: ["latin"],
});

  export default function Home() {
    return (
      <div className="relative h-screen">
        {/* Hero セクション */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-pink-200 font-sans text-6xl font-bold">
        <h1 className={`${LoraFont.className} mt-16 sm:mt-[150px] text-6xl tracking-wide text-center mx-auto text-black`}>Otoka Tsutsusaki</h1>
        <h2 className={`${LoraFont.className} mt-[10px] text-4xl text-blac text-black`}>Portfolio</h2>
        

        {/* 下のライン */}
        <div className="w-64 h-1 bg-black mt-30"></div>

        {/* SNS アイコン */}
<div className="text-black flex space-x-10 mt-16 text-3xl">
  <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="text-black transition-transform duration-300 hover:scale-110" />
  </a>
  <a href="https://www.instagram.com/otto_piyopiyo" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-black transition-transform duration-300 hover:scale-110" />
  </a>
  <a href="https://github.com/otoka34" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-black transition-transform duration-300 hover:scale-110" />
  </a>
</div>


          {/* スクロール誘導アイコン */}
          <div className="text-black absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-3xl">↓</a>
          </div>
        </section>
  
        {/* About セクション */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center">
            {/* 写真 */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/images/profile.jpg" // プロフィール写真
                alt="Profile"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
  
            <div className="w-full md:w-1/2">
              <h2 className={`${LoraFont.className} text-4xl font-bold text-gray-900`}>About Me</h2>
              <div className="space-y-3 mt-6">
              <div className="flex justify-between w-auto mx-auto p-4 bg-gray-100 rounded-lg">
                <span className="font-light text-lg text-black">名前：</span>
                <span className="font-light text-lg text-black">筒崎 乙華</span>
              </div>
              <div className="flex justify-between w-auto mx-auto p-4 bg-gray-100 rounded-lg">
                <span className="font-light text-lg text-black">専攻:</span>
                <span className="font-light text-lg text-black">情報工学</span>
              </div>
              <div className="flex justify-between w-full mx-auto p-4 bg-gray-100 rounded-lg">
                <span className="font-light text-lg text-black">年齢:</span>
                <span className="font-light text-lg text-black">21</span>
              </div>
              <div className="flex justify-between w-full mx-auto p-4 bg-gray-100 rounded-lg">
                <span className="font-light text-lg text-black">趣味:</span>
                <span className="font-light text-lg text-black">ツムツム，セルフネイル💅</span>
              </div>
            </div>
          </div>

          </div>
          </section>


        {/* History */}
<div className="bg-white flex flex-col items-center justify-center space-y-8 mt-16">
  <h2 className={`${LoraFont.className} text-4xl font-bold text-gray-900 text-center`}>History</h2>
  <ol className="relative border-l border-gray-300 dark:border-gray-700 w-full max-w-2xl mx-auto sm:transform sm:border-l-2 md:transform md:translate-x-[-2%]">    
  <li className="mb-10 pl-10 relative flex items-center">
    <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/2 -translate-y-1/2 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <div className="ml-8">
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2016</time>
      <h3 className="font-light text-lg text-gray-700">四天王寺中学校入学</h3>
    </div>
  </li>
  <li className="mb-10 pl-10 relative flex items-center">
    <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/2 -translate-y-1/2 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <div className="ml-8">
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019</time>
      <h3 className="text-lg font-light text-gray-700">四天王寺高等学校入学</h3>
    </div>
  </li>
  <li className="pl-10 relative flex items-center">
    <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/2 -translate-y-1/2 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <div className="ml-8">
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
      <h3 className="text-lg font-light text-gray-700">大阪公立大学工学部情報工学科入学</h3>
      <h3 className="text-lg font-light text-gray-700">小型宇宙機システム研究センター（SSSRC）に所属</h3>
    </div>
  </li>
  <li className="pl-10 relative mt-8 flex items-center">
    <div className="ml-8">
    <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/2 -translate-y-1/2 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct. 2024 ~</time>
      <h3 className="text-lg font-light text-gray-700">MultimodalDP</h3>
    </div>
  </li>
</ol>
  </div>
  {/* 下のライン */}
  <div className="w-64 h-1 bg-white mt-30"></div>
      </div>
    );
  }