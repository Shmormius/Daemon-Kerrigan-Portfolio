import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(sender_email, receiver_email, email_password, smtp_server, smtp_port, name, subject, message):
    """
    Sends an email using the provided SMTP server credentials and message details.
    Parameters:
        sender_email (str): The email address to send from.
        receiver_email (str): The email address to send to.
        email_password (str): The password for the sender's email account.
        smtp_server (str): The SMTP server address.
        smtp_port (int): The port number for the SMTP server.
        name (str): The name of the person submitting the contact form.
        subject (str): The subject of the email.
        message (str): The message body of the email.
    Returns:
        None
    Raises:
        Exception: If the email fails to send.
    """
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = f"Contact Form Submission: {subject}"

    body = f"Name: {name}\n\nMessage:\n{message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(sender_email, email_password)
            server.sendmail(sender_email, receiver_email, msg.as_string())
    except Exception as e:
        raise Exception(f"Failed to send email: {e}")