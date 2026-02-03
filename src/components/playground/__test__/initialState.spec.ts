import playgroundReducer, { initialState } from "../slices"

describe("initialState", () => {
  it("check initial state", () => {
    const state = playgroundReducer(undefined, { type: "unknown" })

    expect(state).toEqual(initialState)
  })
})
