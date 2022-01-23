import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import AltView from "../components/AltView"

it("logo renders", ()=> {
    render(<AltView />)
    const logo = screen.getByTestId("logo")
    expect(logo).toBeInTheDocument()
})

it("description renders", ()=> {
    render(<AltView />)
    const description = screen.getByText("Personalized clothing planner for your trip.")
    expect(description).toBeInTheDocument()
})

it("chat box renders", ()=> {
    render(<AltView />)
    const chatBox = screen.getByTestId("chatBox")
    expect(chatBox).toBeInTheDocument()
})