import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Description from "../components/Description"

it("renders description correctly", () => {
    render(<Description />)
    const description = screen.getByText("Personalized clothing planner for your trip.")
    expect(description).toBeInTheDocument()
})