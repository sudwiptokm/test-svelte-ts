/**
 * @jest-environment jsdom
 */
// import { render, fireEvent, screen } from "@testing-library/svelte";
// import "@testing-library/jest-dom";

// import App from "../src/App.svelte";

// describe("App Check", () => {
//   it("Check Heading", async () => {
//     let component = render(App);
//     let x = component.container.getElementsByTagName("h1");
//     expect(x[0]).toHaveTextContent("Hello");
//   });
//   it("check Screen", async () => {
//     render(App);
//     const word = screen.queryByText("Hello World!");
//     expect(word).not.toBeNull();
//   });
// });

import { render, fireEvent } from "@testing-library/svelte";
import App from "../src/App.svelte";

// test("should render", () => {
//   const results = render(App, { props: { n: "world" } });

//   expect(() => results.getByText("Hello world!")).not.toThrow();
// });

describe("Counter", () => {
  it("it changes count when button is clicked", async () => {
    const { getByText } = render(App);
    const button = getByText(/Clicks:/);
    expect(button.innerHTML).toBe("Clicks: 0");
    await fireEvent.click(button);
    expect(button.innerHTML).toBe("Clicks: 1");
  });
});
