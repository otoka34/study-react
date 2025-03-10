import Image from "next/image";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

  export default function Home() {
    return (
      <div className="relative">
        {/* Hero セクション */}
        <section className="h-screen flex flex-col items-center justify-center bg-pink-200 font-sans text-6xl font-bold">
        <h1 className="text-6xl font-bold tracking-wide">Otoka Tsutsusaki</h1>
        <h2 className="mt-4 text-4xl font-semibold">Portfolio</h2>

        

        {/* 下のライン */}
        <div className="w-64 h-1 bg-black mt-30"></div>

        {/* SNS アイコン */}
        <div className="flex space-x-10 mt-16 text-3xl">
        <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
        </a>
        <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
        </a>
        <a href="https://github.com/otoka34" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
        </div>

          {/* スクロール誘導アイコン */}
          <div className="absolute bottom-10 animate-bounce">
            <a href="#about" className="text-3xl">↓</a>
          </div>
        </section>
  
        {/* About セクション */}
        <section id="about" className="py-24 bg-gray-100">
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
              <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
  <div className="space-y-3 mt-6">
    <div className="flex justify-between w-auto mx-auto p-4 bg-gray-200 rounded-lg">
      <span className="font-semibold text-lg">名前:</span>
      <span className="font-semibold text-lg">筒崎 乙華</span>
    </div>
    <div className="flex justify-between w-auto mx-auto p-4 bg-gray-100 rounded-lg">
      <span className="font-semibold text-lg">専攻:</span>
      <span className="font-semibold text-lg">情報工学</span>
    </div>
    <div className="flex justify-between w-full mx-auto p-4 bg-gray-200 rounded-lg">
      <span className="font-semibold text-lg">年齢:</span>
      <span className="font-semibold text-lg">21</span>
    </div>
    <div className="flex justify-between w-full mx-auto p-4 bg-gray-100 rounded-lg">
      <span className="font-semibold text-lg">趣味:</span>
      <span className="font-semibold text-lg">ツムツム，セルフネイル💅</span>
    </div>
  </div>
</div>

          </div>
        </section>
      </div>


    );
  }
