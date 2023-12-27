module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          icons: './src/assets/icons',
          components: './src/components',
          modules: './src/modules',
        },
      },
    ],
  ],
};
