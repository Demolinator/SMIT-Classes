import React from 'react'

const Hero = () => {
  return (
   <section className="flex bg-black flex-col items-center text-white text-sm pb-20 px-4 font-poppins">
          {/* BACKGROUND IMAGE */}
          <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png" className="absolute inset-0 -z-10 size-full opacity" alt="" />

        <h1 className="text-center text-[20px] leading-12 md:text-6xl md:leading-17.5 mt-4 font-semibold max-w-3xl">
          Turn thoughts into slides instantly, with AI.
        </h1>

        <p className="text-center text-base max-w-md mt-2">
          Create, customize and present faster than ever with intelligent design powered by AI.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-20 mx-auto mt-16">
          <img className="max-w-28 md:max-w-32" src="https://saasly.prebuiltui.com/assets/companies-logo/framer.svg" alt="" />
          <img className="max-w-28 md:max-w-32" src="https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg" alt="" />
          <img className="max-w-28 md:max-w-32" src="https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg" alt="" />
          <img className="max-w-28 md:max-w-32" src="https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg" alt="" />
          <img className="max-w-28 md:max-w-32" src="https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg" alt="" />
        </div>
      </section>
  )
}

export default Hero
