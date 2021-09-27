package com.app.service;

import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

@Service
@Transactional
public class MailServiceImp implements IMailService {

	@Override
	public boolean sendMail(String to, String subject, String message) {
		try{
			Properties props = new Properties();
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.starttls.enable", "true");
			props.put("mail.smtp.host", "smtp.gmail.com");
			props.put("mail.smtp.port", "587");

			Session session = Session.getInstance(props, new javax.mail.Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication("greenbasket.cdac2021@gmail.com", "Admin@123");
				}
			});
			
			Message msg = new MimeMessage(session);
			msg.setFrom(new InternetAddress("greenbasket.cdac2021@gmail.com", false));

			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
			msg.setSubject(subject);
			msg.setContent(message, "text/html");
			msg.setSentDate(new Date());

			MimeBodyPart messageBodyPart = new MimeBodyPart();
			messageBodyPart.setContent(message, "text/html");

			Multipart multipart = new MimeMultipart();
			multipart.addBodyPart(messageBodyPart);
			
			msg.setContent(multipart);
			Transport.send(msg);   
			return true;
		} catch(Exception e) {
			System.out.println("Exception: "+e);
			return false;
		}
	}

}
