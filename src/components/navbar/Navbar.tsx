import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { SparklesIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

const Navbar: React.FC<{ theme: string }> = ({ theme }) => {
  const locationURL = useLocation();
  const { pathname } = locationURL;

  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve address from localStorage when component mounts
    const storedAddress = localStorage.getItem("walletAddress");
    if (storedAddress) {
      setAddress(storedAddress);
    }
  }, []);

  const fetchAddress = async () => {
    try {
      await window.arweaveWallet.connect([
        "ACCESS_ADDRESS",
        "SIGN_TRANSACTION",
        "DISPATCH",
        "SIGNATURE",
      ]);
      const walletAddress = await window.arweaveWallet.getActiveAddress();
      setAddress(walletAddress);

      // Save address to localStorage
      localStorage.setItem("walletAddress", walletAddress);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const disconnectWallet = async () => {
    try {
      // disconnect from the extension
      await window.arweaveWallet.disconnect();
      setAddress(null);

      // Remove address from localStorage
      localStorage.removeItem("walletAddress");
      console.log("succesfully Disconnected wallet");
    } catch (error) {
      console.error("Error Disconnecting to wallet:", error);
    }
  };

  const capitalizeFirstLetter = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  const cleanPathname = pathname.startsWith("/") ? pathname.slice(1) : pathname;

  return (
    <nav
      className={classNames(
        "flex items-center justify-between p-4 shadow-md border-b border-b-neutral-700 transition-all duration-300",
        {
          "bg-black": theme === "dark",
          "bg-gray-900": theme === "light",
        }
      )}
    >
      <div className="flex items-center space-x-2">
        <div className="activity-icon-container rounded-lg p-3 bg-emerald-600">
          <SparklesIcon className="size-5" />
        </div>
        <FaAngleDoubleRight className="size-3" />
        <div className="text-xl font-bold text-white">
          {cleanPathname !== ""
            ? capitalizeFirstLetter(cleanPathname)
            : "Overview"}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {address ? (
          <>
            <p className="text-white text-sm font-medium">
              {`${address.slice(0, 5)}...${address.slice(-4)}`}
            </p>
            <button
              onClick={disconnectWallet}
              className="text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 
                        focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Disconnect
            </button>
          </>
        ) : (
          <button
            type="button"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 
                        focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={fetchAddress}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
