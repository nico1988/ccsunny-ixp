"use client";
export default function Page17() {
  return (
    <div class="h-full text-white text-[24px] font-bold overflow-hidden relative">
      <div class="absolute h-screen w-[1px] bg-[#00FFE0] left-[200px] top-0"></div>
      <div class="absolute h-screen w-[1px] bg-[#00FFE0] left-[1230px] top-0"></div>

      <div class="flex justify-between items-center h-[130px] border-b border-[#00FFE0] relative">
        <div class="w-[100px] h-[111px] ml-[50px] bg-[url('/page-17/nike.png')] bg-no-repeat bg-center"></div>
        <div class="flex justify-center items-center relative">
          <div class="absolute left-[4px] w-[24px] h-[24px] p-[4px] bg-[url('/search-icon.svg')] bg-no-repeat bg-center"></div>
          <input
            class="border border-[#00FFE0] bg-white w-[650px] h-[30px] rounded-[8px] pl-[32px] text-white"
            type="text"
          />
        </div>
        <div class="absolute top-[36px] right-[160px] w-[60px] h-[60px] bg-[url('/save.svg')] bg-no-repeat bg-center"></div>
        <div class="w-[60px] h-[60px] mt-[36px] mr-[46px] bg-[rgba(0,255,224,1)] rounded-full"></div>
      </div>

      <div class="absolute top-0 left-0 right-0 bottom-0">
        <div class="absolute bg-[rgba(178,230,221,1)] rounded-tr-[10px] rounded-br-[10px] w-[98px] top-[190px] bottom-0">
          <div class="absolute left-[24px] top-[20px] w-[126px] h-[814px] bg-[url('/page-17/left-nav.png')] bg-no-repeat bg-size-[98%]"></div>
        </div>
        <img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  src='/page-17/shoes-detail.png'></img>
        <img class="absolute bottom-[16px] left-1/2 transform -translate-x-1/2"  src='/page-17/dark-mode.png'></img>
      </div>
    </div>
  );
}
