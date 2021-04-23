# Database-Project
Vacation Getaway website where you can book your travel with a planned itenerary so you can enjoy your trip hassle free.

# Project Report Description

# Introduction and Goal:
The main purpose of this project is to create an online service website for users to book a trip to their desired vacation location. The website will allow for travel flexibility to ensure the user will have a desirable vacation. In addition, the website will allow the user to select how they want to travel. For the selected destination, the website will provide popular tourist attractions, hotels, and restaurants. Every location will be displayed on a vacation page with a description of each place. Serving as the user interface, the website will have a form page where the user will need to fill out their personal information (name, age, phone number, and address) and their vacation location. The vacation location will be a drop menu so that the user can choose their desired location. By choosing a vacation location, each location will serve as a package where hotels, restaurants, vehicles, and attractions are planned out and included. 

# Scope:
The scope of this project is targeting all individuals who would like to travel.  

# Implementation:
For the front end of the project, we used basic HTML5, CSS3, and JavaScript. The website has a total of three pages: home page, vacation description page, and the booking page. The booking page is the main component of our website. We implemented one simple form script for the booking page. The form uses one submit button to transfer the information to the database.

For the backend of the project, we used Node.js, Express.js, and MySQL for the queries to input the data into the database when the customer entered their information and also used select statements when rendering the profile page which outputted once the user clicks submit to choose their vacation travel package. This information would be displayed on the profile page from the database and the customer input entered in the form.





# Model:


![Model](https://user-images.githubusercontent.com/64498053/115934486-18366b00-a45f-11eb-8e76-f55c2a65933c.JPG)



# Database:

Our database contains one schema named, ‘vacationdb’. In ‘vacationdb’ schema, it contains seven tables listed as the following: ‘attraction’, ‘car_rental’, ‘customer’, ‘customer_has_vacation_location’, ‘hotel’, ‘restaurant’, and ‘vacation_location’

The customer table is all the information that is stored when the customer types in their personal information in the form (Full name, Age , Phone Number, City, State). We used an interface table between the Customer and Vacation_location table (this is the master table that has all the information regarding the Attractions, Car Rentals, Hotels, and Restaurants in that location area) so that if there are multiple entries of customers to various locations it will be easier to link the two by using both their ID’s to prevent confusion. For the vacation_location table the vacation_location_id acts as a foreign key in the other 4 tables and a primary key of its own. The customer_has_vacation_location interface table also acts as two foreign keys and no primary key for tracking entries. Every other table has their own primary key listed in their own table as unique identifiers.
