export default function InpFooter() {
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-[30px] items-center p-[20px] md:p-[0]">
        <h1 className="text-[#FFFFFF] font-[400] text-[47px] leading-[48px] tracking-[1.2px] text-center">
          Free for personal use.
        </h1>
        <p className="text-[#999999] fint-[400] text-[17px] leading-[28.8px] text-center">
          Create static sites, components, or full-stack web{" "}
          <br className="hidden md:block" />
          apps with a community who’ve crafted 17,581,604 17,581,604{" "}
          <br className="hidden md:block" /> sandboxes and counting.
        </p>
        <a href="">
          <button className="w-[177px] h-[40px] rounded-[4px] bg-[#EAFF96] text-[#151515] text-[16px] leading-[16px] font-[400]">
            Get started, it’s free
          </button>
        </a>
      </div>
      <div className="flex flex-col gap-[20px] mt-[20px] md:grid grid-cols-2 flex-wrap lg:hidden">
        <img src="./public/Footer-Img1.png" />
        <img src="./public/Footer-Img2.png" />
        <img src="./public/Footer-Img3.png" />
        <img src="./public/Footer-Img4.png" />
      </div>
      <div className="hidden lg:block bg-black pb-[300px] pl-[30px]">
        <div className=" relative w-[100%] pt-[50px]">
          <img
            className="w-[400px] absolute left-[0px]"
            src="./public/Footer-Img1.png"
          />
          <img
            className="w-[400px] absolute left-[300px] top-[30px]"
            src="./public/Footer-Img2.png"
          />
          <img
            className="w-[400px] absolute left-[500px] pt-[30px]"
            src="./public/Footer-Img3.png"
          />
          <img
            className="absolute w-[400px] left-[800px] pt-[50px]"
            src="./public/Footer-Img4.png"
          />
        </div>
      </div>
      <hr  className="py-[20px] text-[#343434] font-[100]"/>
      <div className="text-[white] flex flex-col gap-[20px] p-[20px] md:flex-row justify-evenly">
        <ul className="text-[#999999] font-[400] text-[15px] leading-[25.6px]">
          <li>
            <b className="text-[white] text-[19px] leading-[23px]">Product</b>
          </li>
          <a href="">
            <li>Coding</li>
          </a>
          <a href="">
            <li>Prototyping</li>
          </a>
          <a href="">
            <li>Knowledge sharing</li>
          </a>
          <a href="">
            <li>Feedback</li>
          </a>
          <a href="">
            <li>What’s new</li>
          </a>
        </ul>
        <ul className="text-[#999999] font-[400] text-[15px] leading-[25.6px]">
          <li>
            <b className="text-[white] text-[19px] leading-[23px]">Explore</b>
          </li>
          <a href="">
            <li>Featured sandboxes</li>
          </a>
          <a href="">
            <li>Search sandboxes</li>
          </a>
        </ul>
        <ul className="text-[#999999] font-[400] text-[15px] leading-[25.6px]">
          <li>
            <b className="text-[white] text-[19px] leading-[23px]">For</b>
          </li>
          <a href="">
            <li>Individuals</li>
          </a>
          <a href="">
            <li>Teams</li>
          </a>
          <a href="">
            <li>Enterprise</li>
          </a>
        </ul>
        <ul className="text-[#999999] font-[400] text-[15px] leading-[25.6px]">
          <li>
            <b className="text-[white] text-[19px] leading-[23px]">About</b>
          </li>
          <a href="">
            <li>Pricing</li>
          </a>
          <a href="">
            <li>Company</li>
          </a>
          <a href="">
            <li>Blog</li>
          </a>
          <a href="">
            <li>Podcasts</li>
          </a>
          <a href="">
            <li>Jobs</li>
          </a>
          <a href="">
            <li>Terms of use</li>
          </a>
          <a href="">
            <li>Privacy policy</li>
          </a>
        </ul>
        <ul className="text-[#999999] font-[400] text-[15px] leading-[25.6px]">
          <li>
            <b className="text-[white] text-[19px] leading-[23px]">Support</b>
          </li>
          <a href="">
            <li>Documentation</li>
          </a>
          <a href="">
            <li>Contact support</li>
          </a>
          <a href="">
            <li>Status</li>
          </a>
        </ul>
      </div>
      <br />
      <br />
      <div className="flex flex-col gap-[20px] items-center">
        <div className="text-[#9D9D9D] flex gap-[10px] text-[20px]">
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-discord"></i>
        </div>
        <p className="text-[#999999] font-[400] text-[16px] leading-[25.6px] ">Copyright © 2022 CodeSandbox BV.</p>
      </div>
    </div>
  );
}
