import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const WalletItem = () => {
      const [userData, setuserData] = useState({
name: '',
email : '',
  })
const loggedUser = useSelector((state) => state.auth.value) || {};
const UserAdress = useSelector((state) => state.address.value) || {};


useEffect(()=> {
  if(loggedUser){
setuserData({
  name: loggedUser.name,
  email: loggedUser.email
})
  }
}, [loggedUser])
  return (
<>

        <div className="flex justify-between items-center p-5 rounded-lg border border-gray-300">
          <div>
            <p className="font-medium">PayPal</p>
            <p className="text-sm text-gray-500">{userData.email}</p>
          </div>

          <button className="text-gray-600 hover:text-black text-2xl"><RiDeleteBinLine /></button>
          </div>
</>
  );
};

export default WalletItem;
