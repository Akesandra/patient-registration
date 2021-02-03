import patientInfos from "../models/Patient";

export const createPatient = async (req,res)=>{

    const newPatient = await patientInfos.create(req.body);

    res.status(201).json({
        status:"success",
        newPatient
    })
}
export const getPatient=(req,res)=>{
    patientInfos.findById(req.params.id,(err,patientInfos)=>{
        if(err){
            //console.log(err)
        }
        else{
            console.log(patientInfos)
            res.status(200).json({
                status:"success",patientInfos
            })
        }
    })

}
export const updatePatient=(req,res)=>{
    let patient={};
    patient.patientName=req.body.patientName;
    patient.phone=req.body.phone;
    patient.home=req.body.home;
    patient.email=req.body.email;
    let querry={_id:req.params.id}
    patientInfos.updateOne(querry,patient,(err)=>{
        if(err){
            console.log(err)
            return;
        }else{
            res.status(201).json({
                status:"updated succesfully",
                patientInfos
            })
        }
    })
}

export const deletePatient=(req,res)=>{
    console.log('Deleted')
    let querry= {_id:req.params.id}
    patientInfos.deleteOne(querry,(err)=>{
        if(err){
            console.log(err)
        }else console.log('success');
        res.send('deleted successfully')
    })
}
export const getAllPatient=(req,res)=>{
    patientInfos.find({}).then((patients)=>{
        res.send(patients)
    }).catch((e) =>{
        res.status(500).srnd(e)
    })
}
