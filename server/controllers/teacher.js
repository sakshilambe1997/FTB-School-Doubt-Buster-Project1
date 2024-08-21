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

const getTeacher =async (req,res)=>{
    const allTeacher = await Teacher.find();

    res.json({
        sucess:true,
        message :"All Teachers Fetched Successfully!!",
        data:allTeacher
    })
}

const getTeacherById = async(req,res)=>{
    const {id}=req.params;
    const teacher = await Teacher.findById(id);
    res.json({
        sucess: teacher? true:false,
        message: teacher?"Teacher Fetched Successfully!!":"Teacher Not Found",
        data: teacher || null
    })
}







export {
    postTeacher ,
    getTeacher,
    getTeacherById
   
}