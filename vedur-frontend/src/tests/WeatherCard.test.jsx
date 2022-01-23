import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import WeatherCard from "../components/WeatherCard"

it("weatherCard renders correctly", () => {
    render(<WeatherCard />)
    const weatherCard = screen.getByTestId("weatherCard")
    expect(weatherCard).toBeInTheDocument()
})