import emailjs from "@emailjs/browser";

export type Details =  {
  name: string
  from_email: string
  subject: string
  message: string
}

const endEmail = async (details: Details) => {
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    await emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,

        {
            name: details.name,
            from_email: details.from_email,
            subject: details.subject,
            message: details.message,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
}

export { sendEmail };