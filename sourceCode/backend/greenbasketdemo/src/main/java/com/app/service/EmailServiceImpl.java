//package com.app.service;
//
//import javax.transaction.Transactional;
//
//import org.springframework.stereotype.Service;
//
//@Service
//@Transactional
//public class EmailServiceImpl implements EmailService {
//
//    @Autowired
//    private JavaMailSender emailSender;
//
//    public void sendSimpleMessage(
//      String to, String subject, String text) {
//        
//        SimpleMailMessage message = new SimpleMailMessage(); 
//        message.setFrom("noreply@baeldung.com");
//        message.setTo(to); 
//        message.setSubject(subject); 
//        message.setText(text);
//        emailSender.send(message);
//    }
//}
