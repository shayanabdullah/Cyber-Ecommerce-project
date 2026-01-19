import Container from "@/components/common/Container";
import React, { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import line from "@/assets/line.svg";
import { RiMapPinFill } from "react-icons/ri";
import Steps from "@/components/common/Steps";
import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import ShopButton from "@/components/common/ShopButton";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { address, deleteAddress, updateAddress } from "../redux/addressSlice";
import { useDispatch, useSelector } from "react-redux";

const Address = () => {
 
const addresses = useSelector((state) => state.address.value);

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isEditing, setIsEditing] = useState(null);
  const [isDeleteMsg, setIsDeleteMsg] = useState(false);
  const [errors, setErrors] = useState({});

  const [deleteId, setDeleteId] = useState(null);

  if (!Array.isArray(addresses)) return null;

  const mainForm = {
    title: "",
    type: "select",
    address: "",
    phone: "",
  };

  const [form, setForm] = useState(mainForm);

  const AddOpen = () => {
    setIsEditing(null);
    setForm(mainForm);
    setModalOpen(true);
  };

  const openEdit = (item) => {
    setIsEditing(item.id);
    setForm(item);
    setModalOpen(true);
    console.log(item, item.id);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!form.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{11}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (form.type === "select") {
      newErrors.type = "Please select address type";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const saveAddress = () => {
    if (!validateForm()) return;

    if (isEditing) {
  dispatch(updateAddress({ ...form, id: isEditing }));
  setModalOpen(false);
  setIsEditing(null);
} else {
      setModalOpen(false);
      setIsEditing(null);
      dispatch(
        address({
          title: form.title,
          type: form.type,
          address: form.address,
          phone: form.phone,
        }),
      );
    }
  };

  const removeAddress = (id) => {
    dispatch(deleteAddress(id));
    if (selectedId == id) setSelectedId(null);
  };


  return (
    <>
      <section className="pb-12 px-2 relative overflow-hidden ">
        <Steps />
        <Container>
          <div className="main ">
            <div className="heading pb-8">
              <h2 className="font-poppins font-semibold text-xl leading-6 text-[#17183B]">
                Select Address
              </h2>
            </div>

            <div className="flex flex-col gap-y-6 pb-12">
              {addresses?.map((item) => (
                <div
                  className="address-box p-6 rounded-lg bg-gray-100  flex items-center justify-between"
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                >
                  <div className="">
                    <div className="flex items-center gap-4 pb-4.5">
                      <input
                        type="radio"
                        name="address"
                        id={`address-${item.id}`}
                        className="w-6 h-6 accent-black"
                        checked={selectedId === item.id}
                        onChange={() => setSelectedId(item.id)}
                      />
                      <label
                        htmlFor={`address-${item.id}`}
                        className="font-sf-pro font-normal text-lg leading-6 text-[#17183B] capitalize"
                      >
                        {item.title}
                      </label>
                      <p className="p-1.5 rounded-sm bg-black text-white font-poppins font-medium text-xs pl-2 uppercase">
                        {item.type}
                      </p>
                    </div>
                    <div className="pl-10">
                      <p className="font-sf-pro font-normal text-base leading-6 text-[#17183B] pb-2 capitalize">
                        {item.address}
                      </p>
                      <p className="phone-num font-sf-pro font-normal text-base leading-6 text-[#17183B]">
                        {item.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-2xl">
                    <i
                      onClick={(e) => {
                        e.stopPropagation();
                        openEdit(item);
                      }}
                    >
                      <BiSolidPencil />
                    </i>
                    <i
                      onClick={() => {
                        setIsDeleteMsg(true);
                        setDeleteId(item.id);
                      }}
                    >
                      <IoCloseOutline />
                    </i>
                  </div>
                </div>
              ))}
            </div>

            {addresses.length === 0 && (
              <div className="w-full h-full flex items-center flex-col justify-center  py-20">
                <h2 className="font-poppins font-semibold  text-2xl leading-6 text-black pb-5">
                  No address added yet
                </h2>
                <p className="font-poppins font-medium text-lg leading-6 text-gray-700 text-center">
                  Please add a new address to continue
                </p>
              </div>
            )}

            {/* add address */}
            <div className="w-full pb-15">
              <div className="w-full flex items-center justify-center pb-2 overflow-x-hidden">
                <img src={line} alt="" className="w-full" />
                <div
                  className="p-1 rounded-full bg-black text-white text-sm cursor-pointer"
                  onClick={AddOpen}
                >
                  <i>
                    <FaPlus />
                  </i>
                </div>
                <img src={line} alt="" className="w-full" />
              </div>
              <p className="font-poppins font-normal text-sm leading-6 text-[#000] w-full text-center">
                Add New Address
              </p>
            </div>

            {/* modal */}
            <div
              className={`w-full absolute top-[5%]  left-1/2 -translate-x-1/2 z-20 max-w-[400px]  ${
                modalOpen ? "block" : "hidden"
              }`}
            >
              <div className="modal py-8 px-6 rounded-lg border border-gray-800 bg-white ">
                <div className="heading pb-8">
                  <h2 className="font-poppins font-semibold text-xl leading-6 text-[#17183B]">
                    {isEditing ? "Edit Address" : "Add Address"}
                  </h2>
                </div>
                <div className="">
                  <div className="inputs w-full pb-4">
                    <input
                      type="text"
                      className="p-4 border border-[#8c8c8c] w-full rounded-lg font-poppins font-normal text-sm leading-4 text-[#979797] outline-0 focus-within:border-[#979797]"
                      placeholder="Title"
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                    />
                    {errors.title && (
                      <p className="font-poppins font-medium text-sm text-red-700 pt-3">
                        {errors.title}
                      </p>
                    )}
                  </div>

                  <div className="textarea w-full pb-4">
                    <textarea
                      type="text"
                      className="p-4 border border-[#8c8c8c] w-full rounded-lg font-poppins font-normal text-sm leading-4 text-[#979797] outline-0 focus-within:border-[#979797]"
                      placeholder="Address"
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                    />
                    {errors.address && (
                      <p className="font-poppins font-medium text-sm text-red-700 pt-3">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div className="select w-full pb-4">
                    <select
                      className="p-3 border border-[#8c8c8c] w-full rounded-lg font-poppins font-normal text-sm leading-4 text-[#1d1d1d] outline-0 focus-within:border-[#979797] outline-none focus:outline-none focus:ring-0  appearance-none"
                      value={form.type}
                      onChange={(e) =>
                        setForm({ ...form, type: e.target.value })
                      }
                    >
                      <option
                        value="select"
                        className="font-poppins font-medium text-base text-[#979797] hover:bg-[#cecece]"
                      >
                        Select type
                      </option>
                      <option
                        value="Home"
                        className="font-poppins font-medium text-base text-[#979797] hover:bg-[#cecece]"
                      >
                        Home
                      </option>
                      <option
                        value="office"
                        className="font-poppins font-medium text-base text-[#979797] hover:bg-[#cecece]"
                      >
                        Office
                      </option>
                    </select>
                    {errors.type && (
                      <p className="font-poppins font-medium text-sm text-red-700 pt-3 ">
                        {errors.type}
                      </p>
                    )}
                  </div>

                  <div className="phone-inputs w-full pb-4">
                    <input
                      type="tel"
                      maxLength={15}
                      className="p-4 border border-[#8c8c8c] w-full rounded-lg font-poppins font-normal text-sm leading-4 text-[#979797] outline-0 focus-within:border-[#979797]"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                    {errors.phone && (
                      <p className="font-poppins font-medium text-sm text-red-700 pt-3 ">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="">
                    <ShopButton
                      text={isEditing ? "Update Address" : "Add Address"}
                      className="bg-black! w-full"
                      onClick={saveAddress}
                      onKeyDown={"Enter"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {isDeleteMsg && (
              <div className="w-full absolute top-[25%] left-1/2 -translate-x-1/2 z-20 max-w-[400px]">
                <div className="modal py-5 px-3 rounded-lg border border-gray-800 bg-white">
                  <p className="font-poppins font-medium text-lg text-red-700 text-center pb-2">
                    Are you sure you want to delete this?
                  </p>
                  <p className="font-poppins font-medium text-sm text-red-700 text-center pb-8">
                    This action cannot be undone
                  </p>

                  <ShopButton
                    text="Delete"
                    className="bg-red-500! w-full"
                    onClick={() => {
                      removeAddress(deleteId);
                      setIsDeleteMsg(false);
                      setDeleteId(null);
                    }}
                  />
                </div>
              </div>
            )}

            {/* buttons */}
            <div className="flex items-center w-full justify-end gap-6">
              <Link to="/cart">
                <ShopButton
                  text={"Back"}
                  className="border-black! text-black!"
                />
              </Link>
              <Link to="/checkout/shipping">
                {" "}
                <ShopButton
                  text={"Next"}
                  className="bg-black!"
                  disable={addresses.length == 0 ? "disable" : ""}
                />{" "}
              </Link>
            </div>
          </div>
        </Container>
        {modalOpen && (
          <div
            className="overlay w-full h-full  absolute top-0 left-0  bg-black/10 z-10 cursor-pointer "
            onClick={() => setModalOpen(false)}
          ></div>
        )}
      </section>
    </>
  );
};

export default Address;
