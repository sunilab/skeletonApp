# React App Template

This repository contains the template for starting a ReactJS based application. The template has a placeholder App component (App.js) that should be the starting point for the React application.

In addition the template comes loaded with the following items based on coding guidelines and best  practices:

- Example of loading web fonts with @font-face. For example the web font 'Poppins' is installed with the template.
- Support for linting through eslint. A standard configuration file '.eslintrc.js' is included along with a package.json srcipt 'lint' that can be run with the following command: 'npm run lint' to run the code through the linting process.
- Support for git hooks is included for getting started with continuous integration/delivery scenarios. The package.json config section has an initial hook 'pre-commit' that runs the lint command on commit.
- Support for a dev server is included using the webpack dev server module. The dev server will automatically refresh the browser page when the app code is updated. Start the dev server using 'npm start'.
- Support for dev and prod versions of webpack config are included. The prod version requires the installation of the node-app-template repo from https://github.com/sunilab/node-app-template.