const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files = [
        './dist/sales-management/main-es2015.js',
        './dist/sales-management/main-es5.js',
        './dist/sales-management/polyfills-es2015.js',
        './dist/sales-management/polyfills-es5.js',
        './dist/sales-management/runtime-es2015.js',
        './dist/sales-management/runtime-es5.js',
        './dist/sales-management/scripts.js'
      ];

      await fs.ensureDir('output');
      await concat(files, 'output/recently-viewed-sales.js');
}
concatenate();