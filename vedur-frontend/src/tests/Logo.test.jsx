import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Logo from "../components/Logo"

it("logo renders correctly", ()=> {
    render(<Logo />)
    const logo = screen.getByTestId("logo")
    expect(logo).toBeInTheDocument()
})