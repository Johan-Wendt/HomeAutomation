# HomeAutomation

## Instructions for Windows

All commands are to be run from the command prompt.

### Setting up the back end
1. Clone project into desired folder (all directories specified in these instructions from now on are relative to this folder).
2. Run '$ HomeAutomation\HomeAutomationMockBackend\HomeAutomationMockBackend\bin\Release\netcoreapp2.0\publish\HomeAutomationMockBackend' to start the api that supplies the data for the app.

### Fixing dependencies
3. Make sure npm is installed with '$ npm -v'. If not get it and install it.
4. Install the angular cli with '$ npm install -g @angular/cli'.
5. Install angular devkit witk '$ npm install --save-dev @angular-devkit/build-angular'.

### Starting the app
6. Go to the HomeAutomationFrontend folder '$ cd HomeAutomation\HomeAutomationFrontend'.
7. Start the app with '$ ng serve -o'. 
8. Run the tests with '$ ng test'.
