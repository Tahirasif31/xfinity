import Image from "next/image";

function Nav() {
  return (
    <nav className="flex flex-col-reverse gap-16 md:flex-row justify-between items-center md:px-24 md:py-7 ">
      <Image src={"/xfinity-logo.png"} width={200} height={50} alt="logo" />
      <a
        className="font-sans font-[600] text-[26px] md:text-[17px] text-white bg-[#272525] w-full md:w-auto px-6 py-5 md:text-black md:bg-white md:border-b-[1px] md:border-red-600 md:pb-[2px] md:mt-[6px] tracking-wide"
        href="tel:18883123227"
      >
        CALL: (888) 3123227
      </a>
    </nav>
  );
}

export default Nav;
