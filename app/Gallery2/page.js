"use client";
import { useRouter } from "next/navigation";

export default function Gallery2() {
  const router = useRouter();
  return (
    <div class="text-white bg-black font-bold text-[24px] overflow-hidden">
      <div class="absolute h-screen w-[1px] bg-[#00FFE0] left-[265px] top-0"></div>
      <div class="absolute h-screen w-[1px] bg-[#00FFE0] left-[1090px] top-0"></div>

      <div class="flex justify-between items-center h-[130px] border-b border-[#00FFE0]">
        <div class="w-[100px] h-[111px] ml-[50px] bg-[url('/nike-logo.svg')]"></div>
        <div class="w-[60px] h-[60px] mt-[36px] mr-[46px] bg-[rgba(0,255,224,1)] rounded-full"></div>

        <div class="absolute top-[40px] left-[304px] w-[756px] h-[60px] flex border-2 border-[rgba(0,255,224,1)] justify-evenly">
          <div class="w-1/3 flex justify-center items-center m-[2px] rounded-[5px] relative bg-[rgba(12,165,147,1)]">
            Low
            <div class="absolute top-[12px] right-[-8px] w-[2px] h-[60%] bg-[rgba(0,255,224,1)]"></div>
          </div>
          <div class="w-1/3 flex justify-center items-center m-[2px] rounded-[5px] relative">
            Mid
            <div class="absolute top-[12px] right-[-8px] w-[2px] h-[60%] bg-[rgba(0,255,224,1)]"></div>
          </div>
          <div class="w-1/3 flex justify-center items-center m-[2px] rounded-[5px] relative">
            Hight
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center h-[calc(100vh-130px)] w-[calc(100vw-530px)] ml-[265px]">
        <div
          onClick={() => {
            router.push("/designer");
          }}
          class="absolute top-[362px] left-[-35px] w-[272px] h-[228px] rounded-[20px] bg-[rgba(0,255,224,0.3)] flex items-center justify-center cursor-pointer"
        >
          DESINGER
        </div>
        <div
          onClick={() => {
            router.push("/designer");
          }}
          class="absolute top-[362px] right-0 w-[237px] h-[228px] rounded-tl-[20px] rounded-bl-[20px] bg-[rgba(0,255,224,0.3)] flex items-center justify-center cursor-pointer"
        >
          Personalized
        </div>
        <img
          class="w-[639px] h-[388px]"
          src="/page-6-shoe.png"
          alt="Main Content Image"
        />
      </div>
    </div>
  );
}
