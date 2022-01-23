import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import ChatMessage from "../components/ChatMessage"

it("bot chat message renders", () => {
    render(<ChatMessage type="bot" message="bot test message"/>)
    const chatMessage = screen.getByText("bot test message")
    expect(chatMessage).toBeInTheDocument()
})

it("user chat message renders", () => {
    render(<ChatMessage type="user" message="user test message"/>)
    const chatMessage = screen.getByText("user test message")
    expect(chatMessage).toBeInTheDocument()
})