import LogoutBtn from "./LogoutBtn";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Dropdown } from "flowbite-react";
function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    // const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },

        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <div className="relative w-full bg-[#EBE6C8] py-3 my-4 container mx-auto rounded-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4  sm:px-6 lg:px-3">
                <div className="inline-flex items-center ">
                    <Link to="/">
                        <span className="font-bold text-3xl text-[#001f3f]">
                            OpenPost
                        </span>
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.slug}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                            ? "border-2 p-2 border-[#001f3f] rounded-lg text-sm font-semibold text-[#001f3f] hover:text-[#001f3f]"
                                            : "text-sm font-semibold text-[#001f3f] hover:text-[#001f3f]"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    {authStatus ? (
                        <div className="flex items-center gap-3">
                            <div className="flex md:order-1 font-semibold text-center">
                                <Dropdown
                                    arrowIcon={false}
                                    inline
                                    label={userData.name}
                                >
                                    <Dropdown.Header>
                                        <span className="block truncate text-sm font-medium">
                                            {userData.email}
                                        </span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>
                                        <Link to="/my-posts">
                                            <button className="text-[#001f3f] font-semibold text-center">
                                                My Posts
                                            </button>
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown>
                                <div className="ml-4">
                                    <LogoutBtn />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login">
                                <button
                                    type="button"
                                    className="rounded-md bg-[#001f3f] px-3 py-2 text-sm font-semibold text-[#EBE6C8] shadow-sm hover:bg-[#001f3f] hover:text-[#6EE98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Sign In
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button
                                    type="button"
                                    className="ml-3 rounded-md bg-[#001f3f] px-3 py-2 text-sm font-semibold text-[#EBE6C8] shadow-sm hover:bg-[#001f3f] hover:text-[#6EE98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="lg:hidden ">
                    <Menu
                        onClick={toggleMenu}
                        className="h-6 w-6 cursor-pointer text-[#001f3f] "
                    />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#EBE6C8] shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        {/* Responsive Part */}
                                        <span className="font-bold text-3xl text-[#001f3f]">
                                            OpenPost
                                        </span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 bg-[#001f3f] px-3 py-2 text-sm font-semibold text-[#F0FBFF] shadow-sm hover:bg-[#F0FBFF] hover:text-[#001f3f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <X
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4 bg-[#EBE6C8] text-white">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.slug}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold text-[#001f3f]  hover:bg-[#001f3f] hover:text-[#EBE6C8]"
                                            >
                                                <span className="ml-3 text-base font-medium ">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                <div>
                                    {authStatus ? (
                                        <div className="flex items-center gap-3 mt-4 justify-center">
                                            <div className="flex md:order-1 font-semibold text-center">
                                                <Dropdown
                                                    arrowIcon={false}
                                                    inline
                                                    label={userData.name}
                                                >
                                                    <Dropdown.Header>
                                                        <span className="block truncate text-sm font-medium">
                                                            {userData.email}
                                                        </span>
                                                    </Dropdown.Header>
                                                    <Dropdown.Item>
                                                        <Link to="/my-posts">
                                                            <button
                                                                onClick={
                                                                    toggleMenu
                                                                }
                                                                className="text-[#001f3f] font-semibold text-center"
                                                            >
                                                                My Posts
                                                            </button>
                                                        </Link>
                                                    </Dropdown.Item>
                                                </Dropdown>
                                                <div className="ml-4">
                                                    <LogoutBtn />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <Link to="/login">
                                                <button
                                                    type="button"
                                                    className="mt-4 w-full rounded-md bg-[#001f3f] px-3 py-2 text-sm font-semibold text-[#EBE6C8] shadow-sm hover:bg-[#001f3f] hover:text-[#6EE98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                    onClick={toggleMenu}
                                                >
                                                    Sign In
                                                </button>
                                            </Link>
                                            <Link to="/signup">
                                                <button
                                                    type="button"
                                                    className="mt-4 w-full rounded-md bg-[#001f3f] px-3 py-2 text-sm font-semibold text-[#EBE6C8] shadow-sm hover:bg-[#001f3f] hover:text-[#6EE98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                    onClick={toggleMenu}
                                                >
                                                    Sign Up
                                                </button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                {/* <Link to="/sign-up">
                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-md bg-[#001f3f] px-3 py-2 text-sm font-semibold text-[#EBE6C8] shadow-sm hover:bg-[#001f3f] hover:text-[#6EE98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Sign Up
                                    </button>
                                </Link>
                                <Link to="/login">
                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-md bg-[#001f3f] px-3 py-2 text-sm font-semibold text-[#EBE6C8] shadow-sm hover:bg-[#001f3f] hover:text-[#6EE98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Sign In
                                    </button>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
