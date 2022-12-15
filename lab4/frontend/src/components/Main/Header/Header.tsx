import React from "react";
import TopMenu from "../../Menu/TopMenu/TopMenu";
import TopNavbar from "../../Navbar/TopNavbar/TopNavbar";
import CatalogNavbar from "../../Navbar/CatalogNavbar";

function Header() {
    const link = '/login';
    return (
        <>
        <header>
            <TopNavbar/>

            <CatalogNavbar/>
        </header>
        </>
    )

}

export default Header;