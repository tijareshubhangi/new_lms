import nodemailer from "nodemailer";

export const sendEmailtoUser = async (link, email, name, password) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `Email Verification Request`,
      text: `Hello ${name},

You have requested to verify your email. Please click the following link to verify your email:
${link}

Your login credentials are:
Username: ${name}
Password: ${password}

If you did not request this, please contact our support team.

Best regards,
Your Team`,
      html: `
<!doctype html>
<html lang="en-US">
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Email Verification Request</title>
    <meta name="description" content="Email Verification Message.">
</head>
<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="font-family: 'Open Sans', sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                            You have requested to verify your email
                                        </h1>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            Click the link below to verify your email.
                                        </p>
                                        <a href="${link}" style="background:#20e277;text-decoration:none;font-weight:500;margin-top:35px;color:#fff;text-transform:uppercase;font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">
                                            Verify Email
                                        </a>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:30px 0 0;">
                                            Your login credentials are:
                                        </p>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            Username: ${name}
                                        </p>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            Password: ${password}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`,
    };

    const info = await transport.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return { status: 200, message: "Email Sent" };
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
    return { status: 400, message: "Error sending email" };
  }
};
