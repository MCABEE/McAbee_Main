const express = require("express")
const router = express.Router();
const cors = require('cors');
const multer = require('multer')
const nodemailer = require("nodemailer");
const Mailgen = require('mailgen');

require('dotenv').config();

const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD
const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads') // specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`) // use the original filename for the uploaded file
    }
})
const upload = multer({ storage: storage })

// send mail from real gmail accnt
app.post("/sendEmail", upload.single("resume"), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    let config = {
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Mailgen",
            link: 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name: `I am ${req.body.name}`,
            intro: "",
            table: {
                data: [
                    {
                        Name: req.body.name,
                        mobile: req.body.mobile,
                        address: req.body.address,
                        email: req.body.email
                    }
                ]
            },
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from: EMAIL,
        to: "iniyini35@gmail.com", //change the email
        subject: "Job Application through MCABEE website.",
        html: mail,
        attachments: {
            filename: req.file.filename,
            path: req.file.path
        }
    }

     transporter.sendMail(message, (error, info) => {
        if (error) {
            res.json({status:false,error:error});
        } else {
            res.json({status:true,response:info.response});
        }
    }) 

})

app.listen(PORT, () => {
    console.log("server started .....")
})