# Taxi Ride-Sharing App

Objective
---------

The objective of the project is to design and deploy a taxi ride-sharing app using the Django Web framework.

Technologies used : **HTML5**, **CSS3**, **Django**, **PostgreSQL**, **Django REST-API**, **JavaScript** and **Bootstrap4**
                  
Developers
----------

__Rijish Ganguly__
__Haohong Zhao__


Description
-----------

Our system allows three roles:

**Ride Owner** – When a user requests a ride, he/she becomes the owner of that ride. Requesting a ride should involve specifying a destination address, a required arrival (date & time), the number of total passengers from the owner’s party, and optionally, a vehicle type and any other special requests. A request will also indicate whether this ride can be shared or not – a shared ride can be joined by other users (ride sharers). A ride owner would be able to modify a ride request up until it is confirmed (a ride becomes confirmed once a driver accepts the ride and is in route). A ride is open from the time it is requested until that point. A ride owner can
also view ride status until the ride is complete (a ride becomes closed once a driver finishes the ride and marks it as complete).

**Ride Driver** – A user can register as a driver, and in doing so will provide their name along with their vehicle information. The vehicle information includes the type, license plate number,
maximum number of passengers, and optionally any other special vehicle info1
. To simplify, a
driver can only have 1 vehicle. A driver can search for open ride requests based on the ride
request attributes. A driver can claim and start a ride service, thus confirming it. A driver can
also complete rides that they service after reaching the destination to indicate that the ride is
finished.
Ride Sharer – A user can search for open ride requests by specifying a destination, arrival
window (the user’s earliest and latest acceptable arrival date & time) and number of
passengers in their party. The user can then become a ride sharer, by joining that ride. A ride
sharer can also view the ride status, similarly to a ride owner. Finally, a ride sharer can edit
their ride status as long as the ride is open.

