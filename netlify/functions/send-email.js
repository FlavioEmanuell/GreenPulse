const sgMail = require("@sendgrid/mail");

exports.handler = async (event) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    const { name, email, message } = JSON.parse(event.body);

    const msg = {
      to: "agrogreenpulse@gmail.com", // Para onde vai o email
      from: "agrogreenpulse@gmail.com", // Precisa ser um remetente verificado no SendGrid
      replyTo: email, // Aqui entra o e-mail de quem preencheu o formulário
      subject: `Novo contato de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "E-mail enviado com sucesso!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};
