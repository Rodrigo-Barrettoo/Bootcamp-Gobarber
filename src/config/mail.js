export default {
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: {
    user: '3c462930f44bb6',
    pass: '7bf8fee5844719',
  },
  default: {
    from: 'Equipe RTO software <noreply@gobarber.com>',
  },
};

/**
 * Serviços de email
 * => Amazon SES
 * => Mailgun
 * => Sparkpost
 * => Mandril ( Mailchimp )
 *
 * Só funciona para desenvolvimento
 * => Mailtrap (DEV)
 */
