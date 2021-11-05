# gatsby-plugin-smartlook
> Plugin to enable Smartlook session replay and web analytics software with a Gatsby site

## Installation

<details>
<summary>NPM</summary>
<p>

```bash
npm i gatsby-plugin-smartlook
```

</p>
</details>

<details>
<summary>YARN</summary>
<p>

```bash
yarn add gatsby-plugin-smartlook
```

</p>
</details>

## Setup

Add your Smartlook `projectKey` to `plugins` in your `gatsby-config.js` file:

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-smartlook`,
      options: {
        projectKey: YOUR_PROJECT_KEY,
      },
    },
  ],
}
```