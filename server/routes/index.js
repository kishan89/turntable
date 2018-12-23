var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var db = mongoose.connection;
var storyCollection = db.collection('story');

var Schema = mongoose.Schema;

var StorySchema = new Schema({
  _id: String,
  title: String,
  author: String,
  body: String
});
var StoryModel = mongoose.model('StoryModel', StorySchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  StoryModel.find({}, {_id: 1, title: 1, author: 1}, function(err, stories) {
    res.send(stories);
  });
});

/* GET a story. */
router.get('/story/:_id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  StoryModel.findOne({_id: req.params._id}, function(err, story) {
    res.send(story);
  });
});

router.post('/story', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  if (req.body.title && req.body.author) {
    StoryModel.findOne({title: req.body.title, author: req.body.author}, function(err, story) {
      if (!story) {
        // create new story
        StoryModel.create({
          _id: new mongoose.mongo.ObjectId(),
          title: req.body.title,
          author: req.body.author,
          body: req.body.body
        });
        res.send({ success: true});
        return;
      } else {
        res.send({ success: false});
        return;
      }
    });
  }


  // if (req.body._id) {
  //   storyCollection.findOne({_id: req.body._id}, function(err, story) {
  //     console.log(story);
  //     story.content = "new content";
  //     story.save();
  //     console.log('we did it');
  //   });
  // } else {
  //   StoryModel.create({
  //     _id: new mongoose.mongo.ObjectId(),
  //     title: req.body.title,
  //     author: req.body.author,
  //     body: req.body.body
  //   });
    // res.send({success: true});
  // }
});

/* POST save a story. */


module.exports = router;
