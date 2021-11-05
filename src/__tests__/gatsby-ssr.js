import { onRenderBody } from "../gatsby-ssr"

describe(`gatsby-plugin-smartlook`, () => {
  describe(`onRenderBody`, () => {
    describe(`in development mode`, () => {
      it(`does not set any head components`, () => {
        const setHeadComponents = jest.fn()

        onRenderBody({ setHeadComponents }, {})

        expect(setHeadComponents).not.toHaveBeenCalled()
      })
    })

    describe(`in production mode`, () => {
      let env

      beforeAll(() => {
        env = process.env.NODE_ENV
        process.env.NODE_ENV = `production`
      })

      afterAll(() => {
        process.env.NODE_ENV = env
      })

      it(`sets the correct head components`, () => {
        const setHeadComponents = jest.fn()
        const pluginOptions = { projectKey: `12345` }

        onRenderBody({ setHeadComponents }, pluginOptions)

        expect(setHeadComponents.mock.calls).toMatchSnapshot()
      })
    })
  })
})