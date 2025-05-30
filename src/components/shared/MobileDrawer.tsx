/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

import { Badge, Drawer } from "antd";
import Link from "next/link";
import NavItems from "./NavItems";
import { FaBell } from "react-icons/fa";
import CustomDropdown from "../ui/CustomDropdown";

const MobileDrawer = ({
  open,
  setOpen,
  items,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  items: any[];
}) => {
  const onClose = () => {
    setOpen(!open);
  };

  // const customLabel = (option: any) => (
  //   <div className="flex items-center gap-2">
  //     <span>{option.label}</span>
  //   </div>
  // );

  return (
    <Drawer
      placement="right"
      style={{ backgroundColor: "#032237" }}
      onClose={onClose}
      open={open}
    >
      <div className="flex flex-col w-[80%] gap-8">
        <NavItems items={items} onClose={onClose} />
      </div>
      <div className="my-10">
        <CustomDropdown />
      </div>

      <div className="my-10 flex items-center gap-5">
        <Link href={"/notifications"}>
          <Badge count={3} offset={[-3, 4]}>
            <FaBell
              className="text-primaryText text-[#ba9956] cursor-pointer"
              size={25}
            />
          </Badge>
        </Link>
      </div>
    </Drawer>
  );
};

export default MobileDrawer;
