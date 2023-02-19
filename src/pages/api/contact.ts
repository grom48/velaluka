export default function (req: any, res: any) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "slanje.mailova1@gmail.com",
      pass: "zmdnmlgkjrrfwwbe",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailData = {
    from: "slanje.mailova1@gmail.com",
    to: "viktorbilokapic@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
    <table style="border-collapse: collapse; width: 100%;">
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Message:</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${req.body.message}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Date:</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${req.body.date}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Selected Vehicle:</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${req.body.selectedVehicle}</td>
      </tr>
    </table>
    <p>Sent from: ${req.body.email}</p>
    `,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
