const express = require("express");
const nodeMailer = require("nodemailer");

const app = new express()




app.use(express.json())

app.post("/mail",async(req,res)=>{
    let transporter = nodeMailer.createTransport({
       service: 'gmail',
       auth: {
        user: 'ajalaajith007@gmail.com',
        pass: 'zehvqfpqkcmcjilo'
       } 
      });

      const message ={
        from: 'ajalaajith007@gmail.com', 
        to: 'n.ik0212hil@gmail.com', 
        subject: "DEMO ASSIGMENT", 
        text: "Please check, this was the DEMO ASSIGMENT NODE MAIL", 
      }
    
      let info = await transporter.sendMail(message);
    
      console.log("Message sent: %s", info.messageId);

       res.send("email sended successfully !");
})


app.listen(8000,()=>{
    console.log(`the server is listening at http://localhost:8000`);
})
