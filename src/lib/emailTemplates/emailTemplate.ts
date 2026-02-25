// lib/emailTemplate.ts

interface StudentUniversityUpdate {
  country?: string;
  courseName?: string;
  currentStatus?: any;
  financialDocumentationConsultation?: boolean;
  fundsMaturedInTheBank?: boolean;
  statusNotes?: string;
  tbTestCompleted?: boolean;
  tuitionPaid?: boolean;
  courseUrl?: string;
  annualTutionFee?: string;
  scholarship?: string;
  initialUniversityFee?: string;
  requiredIELTSScore?: string;
}

interface EmailTemplateData extends StudentUniversityUpdate {
  name: string;
  logoUrl?: string;
  portalUrl?: string;
  websiteUrl?: string;
  websiteName?: string;
}

export const generateEmailTemplate = (data: EmailTemplateData) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding: 10px 0;
      }
      .header img {
        width: 150px;
      }
      .content {
        margin-top: 20px;
        line-height: 1.6;
      }
      .content h2 {
        color: #333333;
        text-align: center;
        margin-bottom: 20px;
      }
      .message {
        font-size: 16px;
        color: #555555;
        text-align: justify;
      }
      .button-wrapper {
        text-align: center;
        margin-top: 30px;
      }
      /* ... (previous styles remain the same) ... */
      .button {
        display: inline-block;
        padding: 14px 32px;
        background: linear-gradient(135deg, #007BFF, #0056b3);
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0;  /* Removed letter spacing */
        text-align: center;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);
        position: relative;
        overflow: hidden;
        white-space: nowrap;  /* Prevent text wrapping */
        font-family: Arial, sans-serif;  /* Explicitly set font */
        -webkit-font-smoothing: antialiased;  /* Improve text rendering */
        -moz-osx-font-smoothing: grayscale;   /* Improve text rendering */
        text-rendering: optimizeLegibility;    /* Improve text rendering */
      }
      
      /* Ensure button text stays crisp on hover */
      .button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 123, 255, 0.3);
        background: linear-gradient(135deg, #0056b3, #004494);
        text-decoration: none;  /* Prevent underline on hover */
        color: white;          /* Maintain text color on hover */
      }
      
      .button:active {
        transform: translateY(0);
        box-shadow: 0 2px 10px rgba(0, 123, 255, 0.2);
      }
      .details {
        margin-top: 30px;
      }
      .details table {
        width: 100%;
        border-collapse: collapse;
      }
      .details table th,
      .details table td {
        padding: 10px;
        border: 1px solid #dddddd;
        text-align: left;
      }
      .details table th {
        background-color: #f4f4f4;
        color: #333333;
      }
      .footer {
        margin-top: 40px;
        text-align: center;
        font-size: 14px;
        color: #888888;
      }
      .footer a {
        color: #007BFF;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="${
          data.logoUrl || "/api/placeholder/150/50"
        }" alt="UNIGURU Logo" />
      </div>
      <div class="content">
        <h2>University Application Update for ${data.name}</h2>
        <p class="message">
          ${
            data.statusNotes ||
            "Your application has been updated with the latest information. Please see the details below."
          }
        </p>
        <div class="details">
          <h3>Updated Application Details:</h3>
          <table>
            ${
              data.country
                ? `<tr><th>Country</th><td>${data.country}</td></tr>`
                : ""
            }
            ${
              data.courseName
                ? `<tr><th>Course Name</th><td>${data.courseName}</td></tr>`
                : ""
            }
            ${
              data.currentStatus
                ? `<tr><th>Status</th><td>${data.currentStatus.label}</td></tr>`
                : ""
            }
            ${
              data.annualTutionFee
                ? `<tr><th>Annual Tuition Fee</th><td>${data.annualTutionFee}</td></tr>`
                : ""
            }
            ${
              data.scholarship
                ? `<tr><th>Scholarship</th><td>${data.scholarship}</td></tr>`
                : ""
            }
            ${
              data.initialUniversityFee
                ? `<tr><th>Initial University Fee</th><td>${data.initialUniversityFee}</td></tr>`
                : ""
            }
            ${
              data.requiredIELTSScore
                ? `<tr><th>Required IELTS Score</th><td>${data.requiredIELTSScore}</td></tr>`
                : ""
            }
            ${
              data.courseUrl
                ? `<tr><th>Course URL</th><td><a href="${data.courseUrl}">${data.courseUrl}</a></td></tr>`
                : ""
            }
            ${
              data.financialDocumentationConsultation !== undefined
                ? `<tr><th>Financial Documentation</th><td>${
                    data.financialDocumentationConsultation
                      ? "Completed"
                      : "Pending"
                  }</td></tr>`
                : ""
            }
            ${
              data.fundsMaturedInTheBank !== undefined
                ? `<tr><th>Bank Funds Matured</th><td>${
                    data.fundsMaturedInTheBank ? "Yes" : "No"
                  }</td></tr>`
                : ""
            }
            ${
              data.tbTestCompleted !== undefined
                ? `<tr><th>TB Test</th><td>${
                    data.tbTestCompleted ? "Completed" : "Pending"
                  }</td></tr>`
                : ""
            }
            ${
              data.tuitionPaid !== undefined
                ? `<tr><th>Tuition Payment</th><td>${
                    data.tuitionPaid ? "Paid" : "Pending"
                  }</td></tr>`
                : ""
            }
          </table>
        </div>
        <p class="message">
          For more details and to track your application status, please log in to the UNIGURU student portal by clicking the link below.
        </p>
<div>
      <a href="${data.portalUrl || "https://uniguru.co/login"}" target="_blank">
        Login to UNIGURU Student Portal
      </a>
    </div>
      </div>
      <div class="footer">
        <p>
          Best regards,<br />
          The UNIGURU Team<br />
          <a href="${data.websiteUrl || "https://www.uniguru.co"}">${
  data.websiteName || "www.uniguru.co"
}</a>
        </p>
      </div>
    </div>
  </body>
</html>
`;
