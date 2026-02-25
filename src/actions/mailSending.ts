// app/contact/page.tsx
"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject: string;
  mobile: string;
}

const sendContactEmail = async (
  data: FormData
): Promise<{ status: boolean; message: string }> => {
  const formData: ContactFormData = Object.fromEntries(
    data.entries()
  ) as unknown as ContactFormData;

  const { name, email, message, subject, mobile } = formData;

  // console.log({ name, email, message, subject, mobile });

  const transporter = nodemailer.createTransport({
    host: "uniguru.co",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "noreply@uniguru.co",
      pass: "Uniguru@123",
    },
  });

  const mailOptions = {
    from: "Contact Form noreply@uniguru.co",
    to: "info@uniguru.co",
    replyTo: email,
    subject: subject,
    text: `Message from: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}\n\nMobile: ${mobile}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Message sent successfully");
    return {
      status: true,
      message: "Message sent successfully",
    };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return {
      status: false,
      message: "Error sending email",
    };
  }
};

const sendConsultationEmail = async (
  data: any
): Promise<{ status: boolean; message: string }> => {
  const { destination, email, message, mobile, name, selectedDate, timeSlot } =
    data;

  // console.log({
  //   destination,
  //   email,
  //   message,
  //   mobile,
  //   name,
  //   selectedDate,
  //   timeSlot,
  // });

  const transporter = nodemailer.createTransport({
    host: "uniguru.co",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "noreply@uniguru.co",
      pass: "Uniguru@123",
    },
  });

  const mailOptions = {
    from: "Consultation Request noreply@uniguru.co",
    to: "info@uniguru.co",
    replyTo: email,
    subject: `Consultation Request for ${timeSlot} on ${selectedDate}`,
    text: `Message from: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}\n\nMobile: ${mobile}\n\nDestination: ${destination}\n\nDate: ${selectedDate}\n\nTime: ${timeSlot}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Message sent successfully");
    return {
      status: true,
      message: "Message sent successfully",
    };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return {
      status: false,
      message: "Error sending email",
    };
  }
};

const sendFinanceSupportEmail = async (
  data: any
): Promise<{ status: boolean; message: string }> => {
  const { destination, email, message, mobile, name } = data;

  const transporter = nodemailer.createTransport({
    host: "uniguru.co",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "noreply@uniguru.co",
      pass: "Uniguru@123",
    },
  });

  const mailOptions = {
    from: "Finance Support Request noreply@uniguru.co",
    to: "info@uniguru.co",
    replyTo: email,
    subject: `Finance Support Request for ${name}`,
    text: `Message from: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}\n\nMobile: ${mobile}\n\nDestination: ${destination}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Message sent successfully");
    return {
      status: true,
      message: "Message sent successfully",
    };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return {
      status: false,
      message: "Error sending email",
    };
  }
};

const sendScholarshipEnquiryEmail = async (
  data: any
): Promise<{ status: boolean; message: string }> => {
  const { destination, email, message, mobile, name } = data;

  const transporter = nodemailer.createTransport({
    host: "uniguru.co",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "noreply@uniguru.co",
      pass: "Uniguru@123",
    },
  });

  const mailOptions = {
    from: "Scholarship Enquiry noreply@uniguru.co",
    to: "info@uniguru.co",
    replyTo: email,
    subject: `Scholarship Enquiry for ${name}`,
    text: `Message from: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}\n\nMobile: ${mobile}\n\nDestination: ${destination}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Message sent successfully");
    return {
      status: true,
      message: "Message sent successfully",
    };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return {
      status: false,
      message: "Error sending email",
    };
  }
};

const sendAccommodationEnquiryEmail = async (
  data: any
): Promise<{ status: boolean; message: string }> => {
  const { destination, email, message, mobile, name } = data;

  const transporter = nodemailer.createTransport({
    host: "uniguru.co",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "noreply@uniguru.co",
      pass: "Uniguru@123",
    },
  });

  const mailOptions = {
    from: "Accommodation Enquiry noreply@uniguru.co",
    to: "info@uniguru.co",
    replyTo: email,
    subject: `Accommodation Enquiry for ${name}`,
    text: `Message from: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}\n\nMobile: ${mobile}\n\nDestination: ${destination}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Message sent successfully");
    return {
      status: true,
      message: "Message sent successfully",
    };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return {
      status: false,
      message: "Error sending email",
    };
  }
};

const sendNewQuestionnaireSubmitted = async (
  data: any
): Promise<{ status: boolean; message: string }> => {
  const { agentCode, email, mobile, name } = data;

  const transporter = nodemailer.createTransport({
    host: "uniguru.co",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "noreply@uniguru.co",
      pass: "Uniguru@123",
    },
  });

  const mailOptions = {
    from: "Uniguru new Questionnaire <noreply@uniguru.co>",
    to: "info@uniguru.co",
    replyTo: email,
    subject: `New Questionnaire from ${name}`,
    html: `
      <h2>New Questionnaire from submitted</h2>
      <br />
      <p>From: ${name}</p>
      <p>Email: ${email}</p>
      <p>Agent Code: ${
        agentCode || "N/A"
      }</p> <!-- Handle undefined agentCode -->
      <p>Mobile: ${mobile}</p>
      <br />
      <p>Login to uniguru superadmin panel to view</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Message sent successfully");
    return {
      status: true,
      message: "Message sent successfully",
    };
  } catch (error: any) {
    console.error("Error sending email:", error.message || error);
    return {
      status: false,
      message: "Error sending email",
    };
  }
};

const sendNewMessageFromStudent = async (
  data: any
): Promise<{ status: boolean; message: string }> => {
  const { message, email, mobile, name } = data;

  const transporter = nodemailer.createTransport({
    host: "uniguru.co",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "noreply@uniguru.co",
      pass: "Uniguru@123",
    },
  });

  const mailOptions = {
    from: `${name} | Student <noreply@uniguru.co>`,
    to: "support@uniguru.co",
    replyTo: email,
    subject: `New message from ${name}`,
    html: `
      <h2>New Message from Student</h2>
      <br />
      <p>From: ${name}</p>
      <p>Email: ${email}</p>
      <p>Mobile: ${mobile}</p>
      <br />
      <p>Message: ${message}</p>
      <br />
      <p>Login to uniguru superadmin panel to view</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Message sent successfully");
    return {
      status: true,
      message: "Message sent successfully",
    };
  } catch (error: any) {
    console.error("Error sending email:", error.message || error);
    return {
      status: false,
      message: "Error sending email",
    };
  }
};

const sendMail = async (
  from: string,
  to: string,
  subject: string,
  htmlContent: string,
  replyTo: string
): Promise<{ status: boolean; message: string }> => {
  const transporter = nodemailer.createTransport({
    host: "uniguru.co",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "noreply@uniguru.co",
      pass: "Uniguru@123",
    },
  });

  const mailOptions = {
    from: `${from} <noreply@uniguru.co>`,
    to,
    replyTo,
    subject,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Message sent successfully");
    return {
      status: true,
      message: "Message sent successfully",
    };
  } catch (error: any) {
    console.error("Error sending email:", error.message || error);
    return {
      status: false,
      message: "Error sending email",
    };
  }
};

const sendEligibilityAssessmentEmail = async (
  data: any
): Promise<{ status: boolean; message: string }> => {
  const { destination, intake, whatsapp, countryCode, wantsConsultation } = data;

  const transporter = nodemailer.createTransport({
    host: "uniguru.co",
    port: 465,
    secure: true,
    auth: {
      user: "noreply@uniguru.co",
      pass: "Uniguru@123",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: "Eligibility Assessment noreply@uniguru.co",
    to: "info@uniguru.co",
    subject: `New Eligibility Assessment Request — ${destination}`,
    html: `
      <h2>New Eligibility Assessment Request</h2>
      <br />
      <p><strong>Preferred Destination:</strong> ${destination}</p>
      <p><strong>Preferred Intake:</strong> ${intake}</p>
      <p><strong>WhatsApp Number:</strong> ${countryCode}${whatsapp}</p>
      <p><strong>Wants Free Consultation:</strong> ${wantsConsultation ? "Yes" : "No"}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: true, message: "Request sent successfully" };
  } catch (error: any) {
    console.error("Error sending eligibility email:", error.message || error);
    return { status: false, message: "Error sending request" };
  }
};

export {
  sendContactEmail,
  sendConsultationEmail,
  sendFinanceSupportEmail,
  sendScholarshipEnquiryEmail,
  sendAccommodationEnquiryEmail,
  sendNewQuestionnaireSubmitted,
  sendMail,
  sendNewMessageFromStudent,
  sendEligibilityAssessmentEmail,
};
