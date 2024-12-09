import Image from "next/image";
import LoginRegister from "../Components/LoginRegister";
import DeliveryPage from "../Components/DeliveryPage";

const Loginpage = async () => {
  return (
    <div className="">
      {/* CAMPAIGN */}
      <div
        className="relative bg-cover bg-center h-[calc(40vh-80px)]"
        style={{
          backgroundImage: "url('/ShopBackgroud.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center  h-full text-center text-black px-4 ">
          <Image src="/ShopLogo.png" alt="Logo" width={100} height={100} />
          <p className="text-4xl md:text-5xl font-normal mb-2">my Account</p>
          {/* <Breadcrumb /> */}
        </div>
      </div>

      <LoginRegister />

      <DeliveryPage />
    </div>
  );
};

export default Loginpage;
