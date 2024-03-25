"use client";

export default function personalized() {
  return (
    <div class="bg-black text-white text-[24px] font-bold overflow-hidden h-screen relative">
      <div class="absolute h-screen w-[1px] bg-[#00FFE0] left-[200px] top-0"></div>
      <div class="absolute h-screen w-[1px] bg-[#00FFE0] left-[1230px] top-0"></div>

      <div class="flex justify-between items-center h-[130px] border-b border-[#00FFE0]">
        <div class="ml-[50px] w-[100px] h-[111px] bg-[url('/nike-logo.svg')] bg-no-repeat bg-center"></div>
        <div class="flex justify-center items-center relative">
          <div class="absolute left-[4px] w-[24px] h-[24px] p-[4px] bg-[url('/search-icon.svg')] bg-no-repeat bg-center"></div>
          <input
            class="border border-[#00FFE0] bg-[#1E1E1E] w-[650px] h-[30px] rounded-[8px] pl-[32px] text-white"
            type="text"
          />
        </div>
        <div class="absolute top-[36px] right-[160px] w-[60px] h-[60px] bg-[url('/page-19/save.svg')] bg-no-repeat bg-center"></div>
        <div class="mt-[36px] mr-[46px] w-[60px] h-[60px] bg-[rgba(0,255,224,1)] rounded-full"></div>
      </div>

      <div class="absolute top-0 left-0 right-0 bottom-0">
        <div class="absolute bg-[rgba(178,230,221,1)] rounded-tr-[10px] rounded-br-[10px] w-[157px] top-[168px] bottom-0 left-[24px]">
          <div class="absolute left-[50px] top-[24px] w-[126px] h-[814px] bg-[url('/page-17/left-nav.png')] bg-no-repeat bg-size-[98%]"></div>
        </div>
        <img
          src="/page-19/tool-bar.png"
          class="absolute top-[189px] left-[320px]"
        ></img>
        <img
          src="/page-19/footer-circle.png"
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2  w-[50%]"
        ></img>
        <img
          src="/page-19/shoes-detail.png"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></img>
        <img
          src="/page-19/color-picker.png"
          class="absolute top-[170px] right-[158px]"
        ></img>
      </div>
    </div>
  );
}
