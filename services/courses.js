const db = require('./db');

async function getLinkedClassesCourses(){
    const rows = await db.query(
      `SELECT DISTINCT dco.id, dco.code, dco.name, dco.credit FROM dummy_classes dc JOIN class_line_groups clg ON dc.id = clg.class_id JOIN dummy_courses dco ON dco.id = dc.course_id`
    );
  
    return rows
}

module.exports = {
    getLinkedClassesCourses
  }