module.exports = function(app, db) {
  //Go to Postman and test the crud routes and 
  //you can see the appropriate response there	
  app.post('/notes', (req, res) => {
    console.log(req.body)
    res.send('Hello Post!')
  });
  app.get('/notes/:id', (req, res) => {
    console.log(req.body)
    res.send('Hello, got: ' + req.params.id)
  });
};