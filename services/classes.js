const db = require('./db');

async function getClassesDetail(){
  const rows = await db.query(
    `SELECT dc.id as class_id, dc.name as classname, dc.course_id, dco.code as coursecode, dc.is_active, dc.is_global, dc.is_nar_enabled, clg.class_line_group_id, clg.last_linked_at, dco.id, dco.code, dco.name as coursename, dco.credit FROM dummy_classes dc LEFT JOIN class_line_groups clg ON dc.id = clg.class_id LEFT JOIN dummy_courses dco ON dco.id = dc.course_id`
  );

  return rows
}

async function getLinkedClasses(){
    const rows = await db.query(
      `SELECT dc.id as classid, dco.id as courseid, dc.name as classname,  is_active, is_global, is_nar_enabled FROM dummy_classes dc JOIN class_line_groups clg ON dc.id = clg.class_id JOIN dummy_courses dco ON dco.id = dc.course_id`
    );
  
    return rows
}






module.exports = {
  getClassesDetail,
  getLinkedClasses,
}