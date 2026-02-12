# Learnings

# anything which we can generate on server can be put inside  .gitignore
# we are supposed not to push it


# json important points:
 "scripts": {
    "start": "parcel index.html", 
    // by writing this command we can start the server using 'npm run start' or 'npx start' in terminal 
    // instead of writing 'npx parcel index.html'
    // we didn't write npx because it is just exactly npm but but it is executing a package without really downloading it.
    // npm run = npx

    // you can also use npm start intead of npm run start as both are the same things.
    
    "build": "parcel build index.html",

  },

# Babel ek JavaScript transpiler hai jo modern code ko old browser compatible JavaScript me convert karta hai.
babel-plugin-transform-remove-console is used to remove console logs.


##### NOTE: For interviews:
Break your small logic into components.. more components is better it will help in make your code:
1. modular
2. readable
3. maintainable
4. testable