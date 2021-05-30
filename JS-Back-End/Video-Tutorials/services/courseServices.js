const Course = require('../models/Course'); 
const User = require('../models/User');

async function createCourse(data) {
     let {title, description, imageUrl, isPublic} = data;
     isPublic ? isPublic = true : isPublic = false;

     let creator = await User.findById(data.creatorId);
     let course = Course({title, description, imageUrl, isPublic, creator});
     creator.courses.push(course);
     await creator.save();
     return course.save();
}

module.exports = {
    createCourse
}