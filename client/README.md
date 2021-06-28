# App description

This is a simple online fashion store created with FERN (firebase, express, react, node).
In this web app you can

•Create accounts
•Login
•Persist data
•View categories, collections, and shop
•Add items to cart and increase those items or remove them while viewing total price.
•Pay
•Load data while fetching.  
•View on mobile (responsive)

## App process

My approach was a dry manner style for minimalism. I could have gone with full MERN project, but time was short, so I decided to go for a FERN build, leveraging the firebase authentication which does JWT and password hashing as well as disabling the accounts.

First comes the architecture of my app

Then set up firebase and firestore.

then built the front-end with react and redux and then as I still had to handle payments using stripe.

DEPLOY, finally it was a MVP and so why not deploy the project to heroku!

[deployment](https://everestminds-with-server.herokuapp.com/)
**please keep in mind this is a free server so it goes to sleep and may take 2 sec to load if it was not accessed for more than 20-30 min**

then looking at hooks and how clean code can be with them in my opinion I decided to switch some of my components from class to the to ES6 hooks.

also wanted to play around with styled components in javascript, so I made one (I do understand that there is no need for a whole library but it's just for the sake of learning).

then went to build the firebase firestore data store.

I also wanted to make the app a PWA so I worked on the serviceWorker

This app was not coded mobile first, but I still wanted to make it responsive so started adding some media queries.

I wanted to demonstrate use of middleware using express to add payments functionality using strip.

## Redux for state management

Data persistence-
In our index.js we wrap our app with PersistGate

We need to set it up on our redux/store.js as well

## `const persistor = persistStore(store);`
