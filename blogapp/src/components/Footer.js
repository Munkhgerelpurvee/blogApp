import Image from "next/image";

export default function Footer() {
  return (
    <main className="flex p-14">
      <div className="w-full max-w-5xl text-sm lg:flex">
        <div className="justify-between w-full lg:static lg:h-auto lg:w-auto">
          <div>

            <Image
              src="/Logo.svg"
              alt="Logo"
            //   className="dark:invert"
              width={100}
              height={24}
              priority
            />

          </div>
        
          <div className="flex gap-6">
            <span className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {" "}
              Terms of Use
            </span>
            < span className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Privacy Policy
            </span>
            <span className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
      
    </main>
  );
}
