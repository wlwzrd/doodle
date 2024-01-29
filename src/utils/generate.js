const fs = require('fs');
const path = require('path');

function generateComponent(componentName, level) {
    const componentPath = path.join(__dirname, '..', `components/${level}`, `${componentName}`);
    const srcPath = path.join(componentPath, 'src');
    const buildPath = path.join(componentPath, 'build');
    const configPath = path.join(componentPath, 'config');

    // Create the component directory
    fs.mkdirSync(componentPath);

    // Create the src directory
    fs.mkdirSync(srcPath);

    // Create the build directory
    fs.mkdirSync(buildPath);

    // Create the config directory
    fs.mkdirSync(configPath);

    // Create the component file
    const componentFileContent = `
        import React from 'react';

        const ${componentName} = (props) => {
            return (
                <div>
                    <h1>${componentName}</h1>
                </div>
            );
        }

        export default ${componentName};
    `;

    fs.writeFileSync(path.join(srcPath, `index.js`), componentFileContent);

    fs.writeFileSync(path.join(srcPath, `index.scss`), '');

    const configFileContent = `const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, '../build'),
            filename: 'index.js',
            libraryTarget: 'commonjs2',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|build)/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/,
                    exclude: /(node_modules|build)/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
        externals: {
            react: {
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'React',
                root: 'React',
            },
            'prop-types': {
                commonjs: 'prop-types',
                commonjs2: 'prop-types',
                amd: 'PropTypes',
                root: 'PropTypes',
            },
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css'],
            alias: {
                react: path.resolve(__dirname, './node_modules/react'),
                'prop-types': path.resolve(
                    __dirname,
                    './node_modules/prop-types'
                ),
                'styled-components': path.resolve(
                    __dirname,
                    './node_modules/styled-components'
                ),
            },
        },
    }`;

    fs.writeFileSync(path.join(configPath, `webpack.config.js`), configFileContent);


    fs.writeFileSync(path.join(componentPath, `index.js`), ``);

    const babelConfigFileContent = `{
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
    }`;

    fs.writeFileSync(path.join(componentPath, `.babelrc`), babelConfigFileContent);

    const packageJsonFileContent = `{
        "name": "${componentName}",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "start": "webpack --mode development --config config/webpack.config.js --watch",
          "build": "webpack --mode production --config config/webpack.config.js --progress"
        },
        "author": "",
        "license": "ISC",
        "devDependencies": {
          "babel-cli": "^6.26.0",
          "babel-core": "^6.26.3",
          "babel-eslint": "^10.1.0",
          "babel-loader": "^9.1.3",
          "babel-preset-es2015": "^6.24.1",
          "babel-preset-react": "^6.24.1",
          "css-loader": "^6.9.1",
          "node-sass": "^9.0.0",
          "proptypes": "^1.1.0",
          "react": "^18.2.0",
          "sass-loader": "^14.0.0",
          "style-loader": "^3.3.4",
          "webpack": "^5.90.0",
          "webpack-cli": "^5.1.4"
        }
      }`;

    fs.writeFileSync(path.join(componentPath, `package.json`), packageJsonFileContent);

    const gitignoreFileContent = `.DS_Store
    build
    node_modules
    *.log`;

    fs.writeFileSync(path.join(componentPath, `.gitignore`), gitignoreFileContent);

    const npmIgnoreFileContent = `.babelrc
    .eslintignore
    .eslintrc
    .gitignore
    config
    src`;

    fs.writeFileSync(path.join(componentPath, `.npmignore`), npmIgnoreFileContent);

    fs.writeFileSync(path.join(componentPath, `README.md`), `Acá el readme`);

    fs.writeFileSync(path.join(componentPath, `.eslintrc`), '');

    const eslintignoreFileContent = `*.css
    build`;

    fs.writeFileSync(path.join(componentPath, `.eslintignore`), eslintignoreFileContent);

    console.log(`Component ${componentName} generated successfully at ${componentPath}`);
}

// Get the component name and level from the command line arguments
const componentName = process.argv[3];
const level = process.argv[2];

generateComponent(componentName, level);
