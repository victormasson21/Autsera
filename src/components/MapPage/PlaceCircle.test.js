import React from "react";
import { render, fireEvent, getByTitle } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import data from "../../data/data";
import PlaceCircle from "./PlaceCircle";

const testPlace = data.places[0];
//sample completed interactions array
const completed = [1, 8, 13];
test("if placeCircle renders when given a place", () => {
  render(
    <Router>
      <PlaceCircle place={testPlace} completed={completed} />
    </Router>
  );
});
test("if placeCircle renders the text of the place correctly", () => {
  const { getByText } = render(
    <Router>
      <PlaceCircle place={testPlace} completed={completed} />
    </Router>
  );
  getByText(testPlace.text);
});
test("if placeCircle renders the right link", () => {
  const { getByText } = render(
    <Router>
      <PlaceCircle place={testPlace} completed={completed} />
    </Router>
  );
  const placeLink = getByText(testPlace.text);
  expect(placeLink.href).toMatch(new RegExp("/place/" + testPlace.id));
});
