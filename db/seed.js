const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())



  // This file should contain all the record creation needed to seed the database with its default values.
  // The data can then be loaded with the node seed.js

  let Promise = require('bluebird');
  const db = require('APP/db')


  let user = require('APP/db/models/user');
  let order = require('APP/db/models/order');
  let comment = require('APP/db/models/comment');
  let shoeInventory = require('APP/db/models/ShoeInventory');
  let shoeModel = require('APP/db/models/ShoeModel');



  let data = {

    user: [{
        firstname: "Andy",
        lastname: "North",
        address: "123 N. Clark St, Chicago, IL 60622",
        email: "anorth@email.com",
        admin: true
    }, {
        firstname: "Tom",
        lastname: "Redus",
        address: "434 W. State St, Chicago, IL 60645",
        email: "tredus@email.com",
        admin: false
    }, {
        firstname: "Joe",
        lastname: "Stephens",
        address: "5632 W. Division St, Chicago, IL 60813",
        email: "jstephens@email.com",
        admin: false
    }, {
        firstname: "Mike",
        lastname: "Purgatori",
        address: "6164 W. Addison St, Chicago, IL 60669",
        email: "mpurgatori@email.com",
        admin: true
    }],

      comment: [{
          product_rating: 4,
          body: "Amazing shoe",
          upvotes:
          downvotes:
      }, {
          content: "Adverbs"
      }, {
          content: "Nouns"
      }],
      course: [{
          name: "ENG 201"
      }, {
          name: "MATH 300"
      }, {
          name: "CIS 452"
      }],

      prompt: [{
          content: "Describe a paragraph using a verb."
      }, {
          content: "Incorporate proper nouns into a sentence."
      }, {
          content: "Use an adverb."
      },{
          content: "Do something funny....now!."
      }],

      teacher: [{
          first: "Janice",
          last: "Elliot",
          email: "jelliot@email.com",
          password: "one"
      }, {
          first: "Mark",
          last: "Goodteach",
          email: "mark@email.com",
          password: "two"
      }, {
          first: "Claudia",
          last: "Whitesox",
          email: "claud@email.com",
          password: "three"
      }]
  };



  db.sync({
          force: true
      })
      .then(function() {
          console.log("Currently seeding file -> seed.js");
          return Promise.map(Object.keys(data), function(name) {
              return Promise.map(data[name], function(item) {
                  return db.model(name)
                      .create(item);
              });
          });
      })
      //fill out student course join
      .then(function() {
          return Promise.all([
              Student.findOne({
                  where: {
                      id: 1
                  }
              }),
              Course.findOne({
                  where: {
                      id: 1
                  }
              })
          ]);
      })
      .spread(function(student, course) {
          return course.addStudent(student);
      })
      .then(function() {
          return Promise.all([
              Student.findOne({
                  where: {
                      id: 1
                  }
              }),
              Course.findOne({
                  where: {
                      id: 2
                  }
              })
          ]);
      })
      .spread(function(student, course) {
          return course.addStudent(student);
      })
      .then(function() {
          return Promise.all([
              Student.findOne({
                  where: {
                      id: 2
                  }
              }),
              Course.findOne({
                  where: {
                      id: 2
                  }
              })
          ]);
      })
      .spread(function(student, course) {
          return course.addStudent(student);
      })
      .then(function() {
          return Promise.all([
              Student.findOne({
                  where: {
                      id: 2
                  }
              }),
              Course.findOne({
                  where: {
                      id: 3
                  }
              })
          ]);
      })
      .spread(function(student, course) {
          return course.addStudent(student);
      })
      .then(function() {
          return Promise.all([
              Student.findOne({
                  where: {
                      id: 3
                  }
              }),
              Course.findOne({
                  where: {
                      id: 1
                  }
              })
          ]);
      })
      .spread(function(student, course) {
          return course.addStudent(student);
      })
      .then(function() {
          return Promise.all([
              Student.findOne({
                  where: {
                      id: 3
                  }
              }),
              Course.findOne({
                  where: {
                      id: 3
                  }
              })
          ]);
      })
      .spread(function(student, course) {
          return course.addStudent(student);
      })
      //fill out reply prompts
      // .then(function() {
      //     return Reply.findAll()
      // })
      // .then(function(replyMap) {
      //     return Prompt.findAll()
      //         .then(function(promptMap) {
      //             return Promise.all([
      //                 replyMap[0].setPrompt(promptMap[0]),
      //                 replyMap[1].setPrompt(promptMap[0]),
      //                 replyMap[2].setPrompt(promptMap[1]),
      //                 replyMap[3].setPrompt(promptMap[1]),
      //                 replyMap[4].setPrompt(promptMap[2]),
      //                 replyMap[5].setPrompt(promptMap[2]),
      //                 replyMap[6].setPrompt(promptMap[2]),
      //             ])
      //         })
      // })
      //fill out student prompts
      // .then(function() {
      //     return Reply.findAll()
      // })
      // .then(function(replyMap) {
      //     return Student.findAll()
      //         .then(function(studentMap) {
      //             return Promise.all([
      //                 replyMap[0].setStudent(studentMap[0]),
      //                 replyMap[1].setStudent(studentMap[0]),
      //                 replyMap[2].setStudent(studentMap[0]),
      //                 replyMap[3].setStudent(studentMap[1]),
      //                 replyMap[4].setStudent(studentMap[2]),
      //                 replyMap[5].setStudent(studentMap[1]),
      //                 replyMap[6].setStudent(studentMap[2]),
      //             ])
      //         })
      // })
      //Fils out Prompt Categories
      .then(function() {
          return Prompt.findAll()
      })
      .then(function(promptMap) {
          return Category.findAll()
              .then(function(catMap) {
                  return Promise.all([
                      promptMap[0].setCategory(catMap[0]),
                      promptMap[1].setCategory(catMap[1]),
                      promptMap[2].setCategory(catMap[2]),
                      promptMap[3].setCategory(catMap[0])

                  ])
              })
      })
      //Fills out prompt courses
      // .then(function() {
      //     return Prompt.findAll()
      // })
      // .then(function(promptMap) {
      //     return Course.findAll()
      //         .then(function(courseMap) {
      //             return Promise.all([
      //                 promptMap[0].setCourse(courseMap[0]),
      //                 promptMap[1].setCourse(courseMap[1]),
      //                 promptMap[2].setCourse(courseMap[2]),
      //                 promptMap[3].setCourse(courseMap[2])
      //             ])
      //         })
      // })
      //
      .then(function() {
          return Promise.all([
              Course.findOne({
                  where: {
                      id: 1
                  }
              }),
              Prompt.findOne({
                  where: {
                      id: 1
                  }
              })
          ]);
      })
      .spread(function(course, prompt) {
          return course.addPrompt(prompt);
      })
      .then(function() {
          return Promise.all([
              Course.findOne({
                  where: {
                      id: 2
                  }
              }),
              Prompt.findOne({
                  where: {
                      id: 2
                  }
              })
          ]);
      })
      .spread(function(course, prompt) {
          return course.addPrompt(prompt);
      })
      .then(function() {
          return Promise.all([
              Course.findOne({
                  where: {
                      id: 3
                  }
              }),
              Prompt.findOne({
                  where: {
                      id: 3
                  }
              })
          ]);
      })
      .spread(function(course, prompt) {
          return course.addPrompt(prompt);
      })
      .then(function() {
          return Promise.all([
              Course.findOne({
                  where: {
                      id: 3
                  }
              }),
              Prompt.findOne({
                  where: {
                      id: 4
                  }
              })
          ]);
      })
      .spread(function(course, prompt) {
          return course.addPrompt(prompt);
      })
      //Teachers to course
      .then(function() {
          return Promise.all([
              Teacher.findOne({
                  where: {
                      id: 1
                  }
              }),
              Course.findOne({
                  where: {
                      id: 1
                  }
              })
          ]);
      })
      .spread(function(teacher, course) {
          return teacher.addCourse(course);
      })
      .then(function() {
          return Promise.all([
              Teacher.findOne({
                  where: {
                      id: 2
                  }
              }),
              Course.findOne({
                  where: {
                      id: 2
                  }
              })
          ]);
      })
      .spread(function(teacher, course) {
          return teacher.addCourse(course);
      })
      .then(function() {
          return Promise.all([
              Teacher.findOne({
                  where: {
                      id: 3
                  }
              }),
              Course.findOne({
                  where: {
                      id: 3
                  }
              })
          ]);
      })
      .spread(function(teacher, course) {
          return teacher.addCourse(course);
      })
      .catch(function(err) {
          console.error('There was totally a problem', err, err.stack);
      });
