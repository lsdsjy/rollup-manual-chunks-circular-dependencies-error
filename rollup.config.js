module.exports = {
  // input: ['entry1.js', 'entry2.js'],
  input: 'index.js',
  output: {
    dir: 'dist',
    // manualChunks() {
    //   return 'index'
    // }
    manualChunks(id) {
      if (id.includes('alpha')) {
        return 'al'
      }
      if (id.includes('beta')) {
        return 'be'
      }
      return 'index'
    }
  }
};