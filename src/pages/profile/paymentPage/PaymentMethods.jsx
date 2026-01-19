import { LockIcon, SaveOff } from "lucide-react";
import CardItem from "./CardItem";
import WalletItem from "./WalletItem";
import { RiBankLine, RiSafe2Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

const PaymentMethods = () => {
  return (
    <>
    <div className="min-h-screen bg-white flex justify-center font-poppins">
    <div className="w-full max-w-4xl  md:px-6 py-10 text-black">

        {/* Header */}
        <div className="flex justify-between flex-wrap gap-y-5 items-start mb-10">
          <div>
            <h1 className="text-3xl font-semibold">Payment Methods</h1>
            <p className="text-gray-500 mt-2 font-poppins">
              Manage your secure payment options
            </p>
          </div>

          <button className="border border-black px-5 py-2 rounded-md text-sm hover:bg-black hover:text-white transition font-poppins cursor-pointer">
            + Add New Payment Method
          </button>
        </div>

        {/* Cards Section */}
        <h2 className="text-lg font-medium mb-4">Credit & Debit Cards</h2>
<div className="pb-10">
    <CardItem/>
</div>
      {/* Wallets */}
      <section>
        <h2 className="text-xl font-semibold mb-4 font-poppins">Digital Wallets</h2>
        <WalletItem />
      </section>
      
        {/* Link Bank */}
        <div className="mt-6 border  border-gray-400 rounded-lg p-5 text-center group hover:border-black transition cursor-pointer ">
          <p className="text-sm text-gray-600 flex items-center gap-2 w-full justify-center group-hover:text-black transition">
            <RiBankLine />
            Link Bank Account or Other Wallet
          </p>
        </div>

        {/* Security Note */}
        <div className="mt-10 text-center flex items-center justify-center gap-2">
            <p className="flex items-center gap-2 text-xs text-gray-dark-700 border-r-2 pr-2"> <FaLock/> Secure 256-bit SSL Encryption </p>
            <p className="flex items-center gap-2 text-xs text-gray-dark-700 "><IoShieldCheckmark />• PCI DSS Compliant</p>
        </div>
      </div>

      

      </div>
    </>
  );
};

export default PaymentMethods;
