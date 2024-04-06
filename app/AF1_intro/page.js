"use client";
import { useRouter } from "next/navigation";

export default function AF1_intro() {
  const router = useRouter();
  return (
    <div class="text-white bg-black h-screen relative">
      <div class="absolute h-screen w-[1px] bg-[#00FFE0] left-[147px] z-10"></div>
      <div class="absolute h-screen w-[1px] bg-[#00FFE0] left-[1278px] z-10"></div>

      <div class="absolute w-screen h-[1px] bg-[#00FFE0] top-[198px] z-10"></div>
      <div class="absolute w-screen h-[1px] bg-[#00FFE0] top-[571px] z-10"></div>
      <div class="absolute w-screen h-[1px] bg-[#00FFE0] top-[916px] z-10"></div>

      <div onClick={
        ()=>{
          router.push('/Gallery1');
        }}  class="bg-[url('/nike-logo.png')] bg-no-repeat w-[100px] h-[100px] ml-[24px] cursor-pointer"></div>

      <div class="absolute font-bold text-[24px] top-[116px] left-[539px] z-10">
        Toebox
      </div>

      <div class="absolute top-0 left-[626px] h-[620px] w-[700px]">
        <div class="font-bold text-[24px] absolute top-[64px] left-[240px] w-[374px]">
          Nike Air Force 1 off white -yellow
        </div>
        <img src="/page-27/shoes.png" alt="Shoes" class="w-full" />
      </div>

      <img
        src="/page-27/shoes-detail.png"
        class="absolute top-[216px] left-[170px] w-[248px]"
      ></img>

      <div class="absolute bg-[rgba(178,230,221,1)] w-[80px] h-[629px] right-0 top-0 rounded-bl-[80px]"></div>

      <img
        src="/page-27/footer.png"
        class="absolute bottom-[100px] left-[144px] h-[230px] w-[1138px]"
      ></img>
      <img src="/page-27/footer-circle.svg" class="absolute bottom-[50px] left-[50%] ml-[-120px] h-[78px] w-[240px]"/>
    </div>
  );
}
