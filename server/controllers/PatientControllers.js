import patientInfos from "../models/Patient";

export const createPatient = async (req,res)=>{

    const newPatient = await patientInfos.create(req.body);

    res.status(201).json({
        status:"success",
        newPatient
    })
}

//to get information of a single patient
export const getPatient= async (req,res)=>{
  try{
   const patient=await patientInfos.findById(req.params.id)
   res.status(200).json({
    status:"success",
    patient
  })
}catch(err){
            res.status(500)
}
}
// updating A PATIENT INFO DATA
export const updatePatient= async (req,res)=>{
    let patient={};
    patient.patientName=req.body.patientName;
    patient.phone=req.body.phone;
    patient.home=req.body.home;
    patient.email=req.body.email;
    let querry={_id:req.params.id}
   try{
       const updatePatient=await patientInfos.updateOne(querry,patient)
       res.status(200).json({
           status:"updated succesfully",
       })
     } catch(err){
           res.status(500)
       }
}
//to delete a patient
export const deletePatient=async (req,res)=>{
   
    let querry= {_id:req.params.id}

        try{
            const patient =await patientInfos.deleteOne(querry)
        res.send('deleted successfully')
    }catch(err){
        res.status(500)
    }
}


//to get all patient information
export const getAllPatient=async (req,res)=>{
    try{
     const allPatient =await patientInfos.find({})
     res.send(allPatient)
       
    }catch(err) {
        res.status(500)
    }
}
