//Created a React Resource app whch contains links to all 
//popular react blogs and resources. 
//Clicking on an item in the list takes you to the details page.
//Home links take you back to the Home page with the list of blogs
//You can run the app using `node app.js` or `nodemon app.js`


// require and instantiate express
const app = require('express')()

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'Dan Abramov',
    title: 'Create Apps with No Build Configuration — React.JS official',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Brad Westfall',
    title: 'Leveling Up with ReactJS (Part1): React Router',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Krasimir Tsonev',
    title: 'Design Patterns & Techniques used while developing with React',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'D V Raja Rao',
    title: '8 Steps to building a ReactJS (to-do) App with Redux',
    body: 'Blog post number 4'
  },
  {
    id: 5,
    author: 'Smashing Magazine',
    title: 'A Glimpse Into The Future With React Native For Web',
    body: 'Blog post number 5'
  },
  {
    id: 6,
    author: 'Luciano Mammino',
    title: 'React on the Server for Beginners: Build a Universal React and Node App"',
    body: 'Blog post number 6'
  }
]

// set the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts })
})

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

app.listen(8080)

console.log('listening on port 8080')