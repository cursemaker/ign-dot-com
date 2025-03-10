import Image from "next/image";
import * as React from "react";

export default function AboutUs() {
  return (
    <div className='className="max-w-sc sm:mx-[120px] flex flex-col justify-center mt-24 max-sm:overflow-hidden'>
      <div className="">
        <div className="bg-[#BA1313] w-full h-36 text-[calc((3.7_-_1)*1.2vw_+_1rem)] flex items-center justify-center">
          <span className="font-black">{`What We${"'"}ve Been Up To`}</span>
        </div>
        <div className="flex w-full bg-white max-sm:flex max-sm:flex-col">
          <div className="sm:w-[60%] max-sm:order-2 max-sm:w-full flex flex-col p-[22px_28px] my-10">
            <h1 className="text-5xl text-center text-black font-bold block">IGN & Opera Launch</h1>
            <h2 className="text-4xl text-center text-black font-bold block">Opera GX: IGN Edition.</h2>
            <div className="flex justify-between mt-9">
              <div className="w-[200px] h-[65px] flex items-center justify-center font-extralight text-xs text-black/50 border-2 border-black">
                READ MORE
              </div>
              <div className="w-[200px] h-[65px] flex items-center justify-center font-extralight text-xs text-black/50 border-2 border-black">
                DOWNLOAD IT
              </div>
            </div>
          </div>
          <div className="sm:w-[40%] max-sm:order-1 flex items-center max-sm:justify-center max-sm:relative">
            <Image
              src="https://assets-prd.ignimgs.com/2024/09/25/1920x1080-1727244017371.png?width=1920"
              alt=""
              width={398}
              height={279}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex max-sm:flex-col w-full bg-[#BA1313] p-[62px_28px]">
          <div className="sm:w-[40%] flex justify-center items-center max-sm:pb-4 relative">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/669552a04de82268a867b39c/af4761b0-fb67-4fff-9702-18b6e103762a/lacc-thumb-1-1727384561334.jpg"
              alt=""
              width={398}
                          height={279}
                          layout="responsive"
            />
          </div>
          <div className="sm:w-[60%] flex flex-col">
            <h1 className="text-5xl text-center text-white font-bold block">IGN Broadcasts</h1>
            <h2 className="text-5xl text-center text-white font-bold block">LA Comic Con.</h2>
            <div className="flex justify-center mt-9">
              <div className="w-[200px] h-[65px] flex items-center justify-center font-extralight text-xs text-white/50 border-2 border-white">
                WATCH IT
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-sm:flex-col w-full bg-white p-[62px_28px]">
          <div className="sm:w-[60%] max-sm:order-2 flex flex-col justify-center">
            <h1 className="sm:text-5xl text-4xl text-center text-black tracking-tight font-bold block">GamesIndustry.biz Holds</h1>
            <h2 className="sm:text-4xl text-3xl text-center text-black tracking-tighter font-bold block">
              Best Places to Work Awards 2024.{" "}
            </h2>
            <div className="flex justify-center mt-9">
              <div className="w-[200px] h-[65px] flex items-center justify-center font-extralight text-xs text-black/50 border-2 border-black">
                READ MORE
              </div>
            </div>
          </div>
          <div className="sm:w-[40%] max-sm:order-1 flex justify-center items-center pb-5">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/669552a04de82268a867b39c/1cbef5df-001d-469b-a336-2bc1401a8844/Gi_24_BPTW_Badges_dev1_Gi_24_Winner_Badge_UK-720x720.png"
              alt=""
              width={279}
              height={279}
            />
          </div>
        </div>
        <div className="flex max-sm:flex-col w-full bg-[#BA1313] p-[62px_28px]">
          <div className="sm:w-[40%] flex justify-center items-center sm:pr-5 pb-5">
            <Image src="https://assetsio.gnwcdn.com/eg25-gold.jpg" alt="" width={398} height={279} />
          </div>
          <div className="sm:w-[60%] flex flex-col">
            <h1 className="text-5xl text-center text-white font-bold block">Eurogamer Celebrate Its</h1>
            <h2 className="text-6xl text-center text-white font-bold block">25th Anniversary.</h2>
            <div className="flex justify-center mt-9">
              <div className="w-[200px] h-[65px] flex items-center justify-center font-extralight text-xs text-white/50 border-2 border-white">
                READ MORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
