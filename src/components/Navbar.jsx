import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import { useState } from "react";


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const handleIcon = () => {
        setOpen(!open)
    }

    return (
        <div className="w-full px-6 md:px-28  py-7 bg-blue-500 text-white">
            <div className="md:hidden text-2xl font-bold" onClick={handleIcon}>
                {
                    open ? <CgClose /> : <TiThMenu />
                }

            </div>
            <div className={`${open ? '' : 'hidden'} md:flex text-lg md:text-2xl font-bold gap-5 duration-1000`}>
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Blog</p>
                <p className="cursor-pointer">About</p>
                <p className="cursor-pointer">Service</p>
                <p className="cursor-pointer">Service</p>
            </div>
        </div>
    );
};

export default Navbar;