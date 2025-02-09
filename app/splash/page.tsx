import Image from "next/image";
import Link from "next/link";

const Splash = () => {
  const menu = [
    { name: "About", link: "/" },
    { name: "Features", link: "/" },
    { name: "How to use", link: "/" },
  ];

  return (
    <div
      className="xs:p-10 sm:p-20 items-start justify-start min-h-screen font-[family-name:var(--font-geist-sans)] animate-fade-in"
      style={{
        backgroundImage: "url(/assets/splash_bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="splash-header flex xs:flex-col md:flex-row gap-y-5 w-full items-center justify-between">
        <Link href="/auth/splash">
          <Image
            alt="logo-light"
            width={322}
            height={100}
            src="/assets/logos/logo_322_light.svg"
            className="xs:hidden lg:block"
          />
        </Link>
        <Link href="/auth/splash">
          <Image
            alt="mobile-logo"
            width={180}
            height={60}
            src="/assets/logos/logo_240_light.svg"
            className="xs:block lg:hidden"
          />
        </Link>

        <div className="splash-menu flex gap-5 justify-end items-center">
          {menu.map((item, idx) => (
            <Link
              className="xs:text-md lg:text-2xl text-white border-b-2 border-transparent p-4 transition-all duration-300 hover:border-blue-500"
              href={item.link}
              key={idx}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="splash-body grid xs:grid-cols-1 md:grid-cols-2 min-h-[70vh] animate-scale-up">
        <div className="flex flex-col justify-center md:items-start xs:items-center w-full">
          <h1 className="text-white xs:text-[40px] md:text-[72px] font-bold">
            TaskTide
          </h1>
          <span className="opacity-[0.7] xs:text-xl md:text-3xl text-white text-left md:max-w-[400px] xs:max-w-[300px]">
            Create your workflow with easier ways.
          </span>
          <div className="flex gap-5 justify-start items-center my-10">
            <Link
              href="/auth/signup"
              className="text-white text-lg p-4 rounded-sm bg-default-blue min-w-[150px] flex items-center justify-center transition-colors duration-300 hover:bg-blue-700"
            >
              Sign Up
            </Link>
            <Link
              href="/auth/signin"
              className="text-white text-lg p-4 rounded-md border border-white min-w-[150px] flex items-center justify-center transition-colors duration-300 hover:bg-[#0c1525]"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <div className="splash-footer bg-gray-800 text-white py-6 mt-16 animate-fade-in">
        <div className="mx-auto px-4 text-center">
          <div className="w-full flex justify-center my-2">
            <Image
              src="/assets/logos/logo_240_light.svg"
              width={240}
              height={50}
              alt="logo-light-footer"
            />
          </div>
          <div className="flex md:flex-row xs:flex-col justify-center gap-8 mb-4">
            <Link href="/about" className="hover:text-blue-500 opacity-[0.6]">
              About Us
            </Link>
            <Link href="/privacy" className="hover:text-blue-500 opacity-[0.6]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-500 opacity-[0.6]">
              Terms of Service
            </Link>
          </div>
          <p className="text-sm opacity-70">
            © 2024 TaskTide. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Splash;
