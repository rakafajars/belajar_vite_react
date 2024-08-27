import React from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface DashboardLayoutProps {
    // bisa dimasukan, seperti any tapi bukan any
    children: React.ReactNode,
}

export const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div>
        <Header/>
        {props.children}
        <Footer/>
    </div>
  )
}
