import controller from './my-courses.controller';

const myCourses = {
  controller,
  template: `
    <div class="titles">
      <h1>Education Goodness</h1>
      <h3>All the courses you can start watching right now</h3>
    </div>
    <div class="course-list">
      <course-card></course-card>
      <course-card></course-card>
      <course-card></course-card>
      <course-card></course-card>
      <course-card></course-card>
    </div>
  `
};

export default myCourses;
