"use client";
import { useRouter } from "next/navigation";

export default function Page4() {
  const router = useRouter();
  return (
    <div className="text-white bg-black h-screen relative">
      <div className="absolute h-screen w-[1px] bg-[#00FFE0] left-[354px] top-0"></div>
      <div className="absolute h-screen w-[1px] bg-[#00FFE0] left-[688px] top-0"></div>
      <div className="absolute h-screen w-[1px] bg-[#00FFE0] left-[1018px] top-0"></div>
      <div className="absolute w-screen h-[1px] bg-[#00FFE0] top-[392px]"></div>
      <div className="absolute w-screen h-[1px] bg-[#00FFE0] top-[660px]"></div>

      <div className="flex justify-between items-center h-[130px] border-b border-[#00FFE0]">
        <div className="bg-[url('/nike-logo.svg')] w-[100px] h-[111px] ml-[50px]"></div>
        <div className="flex items-center relative ml-[-36px]">
          <div className="bg-[url('/search-icon.svg')] w-[24px] h-[24px] p-[4px] absolute left-[4px] bg-no-repeat bg-center"></div>
          <input
            className="border border-[#00FFE0] bg-[#1E1E1E] w-[650px] h-[30px] rounded-[8px] pl-[32px]"
            type="text"
          />
        </div>
        <div className="bg-[rgba(0,255,224,1)] rounded-full w-[60px] h-[60px] mt-[36px] mr-[46px]"></div>
      </div>

      <div className="h-[510px]">
        <div className="flex flex-wrap">
          <div className="bg-[rgba(0,255,224,0.3)] w-[260px] h-[192px] m-[40px]"></div>
          <div className="bg-[rgba(0,255,224,0.3)] w-[260px] h-[192px] m-[40px]"></div>
          <div className="bg-[rgba(0,255,224,0.3)] w-[260px] h-[192px] m-[40px]"></div>
          <div className="bg-[rgba(0,255,224,0.3)] w-[260px] h-[192px] m-[40px]"></div>
          <div className="bg-[rgba(0,255,224,0.3)] w-[260px] h-[192px] m-[40px]"></div>
          <div className="bg-[rgba(0,255,224,0.3)] w-[260px] h-[192px] m-[40px]"></div>
          <div className="bg-[rgba(0,255,224,0.3)] w-[260px] h-[192px] m-[40px]"></div>
          <div  onClick={()=>{
                router.push('/page_6')
              }} className="bg-[url('/plus.svg')] bg-[rgba(0,172,143,1)] bg-no-repeat bg-center cursor-pointer flex items-center justify-center w-[260px] h-[192px] m-[40px]"></div>
        </div>
      </div>

      <div className="absolute bottom-[44px] left-1/2 transform -translate-x-1/2 w-[408px] h-[65px] rounded-[5px] border-2 border-[rgba(0,255,224,1)]">
        <div className="flex justify-evenly items-center h-full">
          <div className="h-[90%] w-1/2 flex justify-center items-center m-[2px] rounded-[5px] text-[24px] font-bold relative bg-[rgba(12,165,147,1)]">Gallery
          </div>
          <div className="absolute top-[12px] ml-[12px] w-[2px] h-[60%] bg-[rgba(0,255,224,1)]"></div>
          <div className="h-[94%] w-1/2 flex justify-center items-center m-[2px] rounded-[5px] text-[24px] font-bold relative">
          Collection
            
          </div>
        </div>
      </div>
    </div>
  );
}
