This is going to take all keynotes as i am learning next js

//Dynamic Routing

- In dynamic routing, You can add brackets to filename in other to make them dynamic
- I can also set folder names in square brackets for dynamic folder routing
- the double square bracket signifies optional catchAll routes. which helps display the default param
- When doing the catchAll routing, always give the params under query a default value to avoid having error

// Static Generation

- Next JS, by default, without any configuration, statically generates every page in our app when we build it for production. This allows the page to be cached by a CDN and indexed by a search engine.

- getStaticProps function
  => only runs on the server side. why we see it on terminal not console. it never gets to client. its not bundle to code send to server.
  => it is allowed only on a page but not component file. use for prerendering not data fetching. return an object with a props key. it will run at build time also.
