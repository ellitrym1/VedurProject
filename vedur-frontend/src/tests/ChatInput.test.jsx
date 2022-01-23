import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import ChatInput from "../components/ChatInput"

it("chat input renders correctly", () => {
    render(<ChatInput />)
    const input = screen.getByPlaceholderText("Type here...")
    expect(input).toBeInTheDocument()
})

describe("chat input accepts input", () => {
    render(<ChatInput />)
    const input = screen.getAllByPlaceholderText("Type here...")
    const chatForm = screen.getByTestId("chatForm")
    fireEvent.submit(input, {target: {value: "test"}})
    expect(input.value).toBe("test")
})

