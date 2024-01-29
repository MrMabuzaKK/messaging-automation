import nodemailer from "nodemailer";
import twilio from "twilio";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

if (!email || !pass || !twilioAccountSid || !twilioAuthToken || !twilioPhoneNumber) {
  throw new Error("Environment variables are missing. Please provide all required variables.");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
  host: "smtp.example.com",
  port: 587,
  secure: false,
});

const mailOptions = {
  from: email,
  subject: "Welcome ✔",
  text: "Welcome",
  html: "<b>Welcome</b>",
};

const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

const sendSMS = async (to, body) => {
  try {
    await twilioClient.messages.create({
      body,
      from: twilioPhoneNumber,
      to,
    });
    console.log("SMS sent successfully.");
  } catch (error) {
    console.error("Error sending SMS:", error.message);
  }
};

export { transporter, mailOptions, sendSMS };
