#### INTRO ####

This is a web application to choose a database cloud service based on various parameteres such as the region the cloud is in, the cloud provider or the distance of the cloud from the user. It lists the available cloud options.

This web app is done using React.

#### HOW TO RUN ####
1) Clone the repository
2) cd to the 'src' directory in your console and type 'npm start'
   Your web browser will open and start the application

#### WHAT IT DOES ####
In the current state the app fetches the available clouds from an API. It displays all available clouds giving their description in a table. It identifies the different regions in which cloud databases are located and offers to choose from them in a dropdown selection.


#### CONTINUATION ####
1) Cloud table: the API data needs to be stored such that its easy to access all data and display them in the table. Currently I had trouble using the API data.

2) Region selection: to finish the region, the value in the selection dropdown needs to be saved and used to filter all available clouds to only show those of the chosen region

3) Provider selection: the possible provider need to be identified (probably manually), offered in a dropdown selection, from API data either the cloud_description or cloud_name can be used to identify the provider of the cloud repectively (search for string in any of these two attributes), then the clouds can be filtered by provider

4) Distance selection:
the location of the user accessing the web app has to be fetched, requiring longitude and latitude
a slider where the user can indicate the distance has to be inserted into the app
then the value of the distance the user has chosen has to be read, the resulting distance to each cloud calculated and all available clouds have to be filtered by the given distance maxiumum to show only those that are in range

#### TESTING ####
I am new to testing with React. Due to limited time, I haven't been able to look into testing. 

