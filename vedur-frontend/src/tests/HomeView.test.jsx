import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import HomeView from "../components/HomeView"

it("logo renders", ()=> {
    render(<HomeView />)
    const logo = screen.getByTestId("logo")
    expect(logo).toBeInTheDocument()
})

it("description renders", ()=> {
    render(<HomeView />)
    const description = screen.getByText("Personalized clothing planner for your trip.")
    expect(description).toBeInTheDocument()
})

it("button renders", () => {
    render(<HomeView />)
    const button = screen.getByText("Talk to me")
    expect(button).toBeInTheDocument()
})