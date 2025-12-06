const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        'last 10 versions',
        '> 1%',
        'IE 11'
      ]
    },
  },
}

export default config