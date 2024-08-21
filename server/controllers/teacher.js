import Teacher from "./../models/Teacher.js"

const postTeacher = async(req,res)=>{
const {user,className,subject,complaint}=req.body

const teacher = new Teacher({
    user,
    subject,
    complaint,
    className
})

const savedTeacher = await teacher.save();

res.json({
    success:true,
    data:savedTeacher,
    message:"Teacher saved successfully"
});
}



// import { postTeacher ,getTeacher,getTeacherById, putTeacher,
// deleteTeacher} from "./controllers/teacher.js";

// app.post("/teacher",postTeacher);
// app.get("/teachers",getTeacher);
// app.get("/teacher/:id",getTeacherById);
// app.put("/teacher/:id", putTeacher);
// app.delete("/teacher/:id",deleteTeacher)





export {
    postTeacher ,
   
}