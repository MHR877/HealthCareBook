import React from "react"
import NavBar from "./NavBar";

interface Props {
    children : React.ReactElement;
}

function Layout({children} : Props) {
  return (
    <main className="">
        <NavBar />
        <div>
            {children}
        </div>

    </main>
  )
}

export default Layout