import { Menu } from "lucide-react";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import React, { useState } from "react";
import { SetVisible } from "../../types";

const Header: React.FC<SetVisible> = ({ setVisible }) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <header className="relative">
        <div className="bg-white flex justify-content-between px-4 shadow-3 py-2 align-items-center fixed top-0 left-0 right-0 z-5">
          <div className="flex align-items-center justify-content-between gap-3 lg:gap-4 w-full">
            <div className="flex flex-order-1 lg:flex-order-0 align-items-center gap-1 lg:flex-1 lg:max-w-20rem">
              <img src="/assets/logos/logo-dark.svg" alt="logo" width={50} />
              <span className="text-lg md:text-xl">SAKAI</span>
            </div>
            <Button
              className="flex-order-0 lg:flex-order-1 "
              icon={<Menu size={22} />}
              rounded
              text
              severity="secondary"
              aria-label="ToggleMenu"
              onClick={() => setVisible((prev) => !prev)}
            />
            <div className="flex-order-2 lg:flex-1 text-right">
              <InputSwitch
                checked={checked}
                onChange={(e) => setChecked(e.value)}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
