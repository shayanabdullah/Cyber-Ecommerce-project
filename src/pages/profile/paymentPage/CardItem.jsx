import { Delete, DeleteIcon, Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { RiDeleteBack2Line, RiDeleteBinLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const CardItem = ({ defaultCard }) => {


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
 
    <div className="space-y-5">
          {/* Default Card */}
          <div className="flex justify-between items-center p-5 rounded-lg border border-black font-poppins">
            <div>
              <p className="tracking-widest text-sm">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-500 mt-1">
                Expires 12/26 • {userData.name}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs px-3 py-1 border border-black rounded-full font-poppins font-medium">
                Default
              </span>
              <button className="text-gray-600 hover:text-black cursor-pointer"><Edit/></button>
              <button className="text-gray-600 hover:text-black text-2xl cursor-pointer"><RiDeleteBinLine /></button>
            </div>
          </div>
            <div className="flex justify-between items-center p-5 rounded-lg border border-gray-300 font-poppins cursor-pointer">
            <div>
              <p className="tracking-widest text-sm">•••• •••• •••• 8888</p>
              <p className="text-sm text-gray-500 mt-1 font-poppins font-medium">
                Expires 05/27 • {userData.name}
              </p>
            </div>

            <div className="flex items-center gap-4 ">
              <button className="text-sm text-gray-500 hover:text-black">
                Set as default
              </button>
              <button className="text-gray-600 hover:text-black"><Edit/></button>
              <button className="text-gray-600 hover:text-black"><RiDeleteBinLine /></button>
            </div>
          </div>
          </div>
  );
};

export default CardItem;
