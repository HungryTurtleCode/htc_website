import controller from './my-courses.controller';

const myCourses = {
  controller,
  template: `
    <title-block
      title="Education Goodness"
      subtitle="All the courses you can start watching right now">
    </title-block>
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
