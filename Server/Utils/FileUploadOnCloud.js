const cloudinary=require('cloudinary').v2

exports.fileUploadOnCloud=async(file,folder)=>{
    const options={folder}
     try{
         options.resource_type="auto"
         return await cloudinary.uploader.upload(file.tempFilePath,options)
     }catch(e){
         console.log("Something went wrong in uploading on cloud file");
         console.log(e);
     }
}