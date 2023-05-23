import multer from "multer";

const configureMulter=()=>{
    
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads') // specify the destination folder for uploaded files
    },
    destination: function (req, file, cb) {
        return cb(null, './uploads') // specify the destination folder for uploaded files
    },
})

const upload = multer({ storage: storage })

return upload

}

export default configureMulter;