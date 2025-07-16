const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // remetente fixo permitido pela Resend no plano grátis
      to: 'agrogreenpulse@gmail.com', // você
      subject: `Novo contato de ${name}`, // assunto do e-mail
      reply_to: email, // <-- para que você veja "Responder para: email do usuário"
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`, // conteúdo do e-mail
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Mensagem enviada com sucesso!', data }),
    };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Erro interno' }),
    };
  }
};
