import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Chat from "../components/Chat"

it("chat box renders", () => {
    render(<Chat />)
    const chatBox = screen.getByTestId("chatBox")
    expect(chatBox).toBeInTheDocument()
})