import Image from "next/image";
import Link from "next/link";

interface NavbarProps{
    
}

export default function Navbar({}:NavbarProps ){
    return(
        <>
            <nav className=' h-[110px] w-full px-[171.6px] py-2 shadow-sm sticky z-20 top-0 bg-white'>
                <div className=" flex justify-center items-center">
                    <div className=" mr-4">
                        <Image className="  h-[100px] w-full object-cover py-[5px]" alt="not found" width={100} height={100} src={'https://codeland.in/wp-content/uploads/2022/12/Logo-542-x-4681.png'} />
                    </div>
                    <div className=" text-[15px]  font-medium flex justify-between gap-[45px] py-[35px] items-center mx-48  ">
                        <Link className=" hover:text-[#FF9037]" href={'#'} type="Link">Home</Link>
                        <Link className=" text-[#FF9037] hover:text-[#FF9037]" href={'#'} type="Link">About Us</Link>
                        <Link className=" hover:text-[#FF9037]" href={'#'} type="Link">Industries</Link>
                        <Link className=" hover:text-[#FF9037]" href={'#'} type="Link">Technologies</Link>
                        <Link className=" hover:text-[#FF9037]" href={'#'} type="Link">Resources</Link>
                        <Link className=" hover:text-[#FF9037]" href={'#'} type="Link">Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}