# React App Template

This repository contains the template for starting a ReactJS based application. The template has a placeholder App component (App.js) that should be the starting point for the React application.

## Benefits
In addition the template comes preinstalled with tools and processes based on coding guidelines and best practices:

- Support for linting through eslint. A standard configuration file '.eslintrc.js' is included along with a package.json srcipt 'lint' that can be run with the following command: 'npm run lint' to run the code through the linting process.
- Support for git hooks is included for getting started with continuous integration/delivery scenarios. The package.json config section has an initial hook 'pre-commit' that runs the lint command on commit.
- Support for a dev server is included using the webpack dev server module. The dev server will automatically refresh the browser page when the app code is updated. Start the dev server using 'npm start'.
- Support for dev and prod versions of webpack config are included.
- A corresponding node app template can be used in conjunction with this template to run the React app in node. Just update the webpack.production.js file to point the output path to the static folder in the node-app-template.

    https://github.com/sunilab/node-app-template

- The prod version of webpack supports uglifying and minimizing the code, enabling the NODE_ENV environment variable to 'production' for optimization of libraries like React and code-splitting of the common libraries into its own bundle.
- Example of loading web fonts with @font-face.

## Instructions

- Make sure node and npm are installed on your machine. This application has been built and tested on node version 8.9.4 and npm version 5.6.0
- Clone the repo.
- Navigate to the react-app-template folder from your bash prompt, command prompt or terminal window.
- Run the following command to install the necessary npm modules:
    > npm install
- To start the application in development mode run the following command:
    > npm start

    This command will run the webpack-dev-server and open your browser to http://localhost:8080 where you should see the application running with the title 'React App Template'.

    Any changes you make to the application code will now recompile the application and refresh the browser automatically.

- To compile the production version of the application run the following command:
    > npm run build

    This command will bundle the application into two files in the dist folder:
     >> main.bundle.js - Contains the code for your application.

     >> common.bundle.js - Contains common code.

    Deploy the contents of the 'dist' folder to a web server for running the application. If you clone the 'node-app-template' application, copy the contents of the 'dist' folder to the 'static' folder in the 'node-app-template' application.
- The App.js file is the entry point of the application. Build your React application starting with App.js