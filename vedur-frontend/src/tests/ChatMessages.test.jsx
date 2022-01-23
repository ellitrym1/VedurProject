import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import ChatMessages from "../components/ChatMessages"

it("renders messages", () => {
    render(<ChatMessages />)
})

it("disables buttons correctly", () => {
    render(<ChatMessages />)
    const weatherBtn = document.querySelector("#Weather")
    fireEvent.click(weatherBtn)
    expect(weatherBtn).toBeDisabled()
})