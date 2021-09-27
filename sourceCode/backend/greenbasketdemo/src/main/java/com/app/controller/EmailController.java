package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.IMailService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/email")
public class EmailController {
	@Autowired
	IMailService mailService;
	
	@GetMapping("/sendmail")
	public ResponseEntity<?> sendMail(@RequestParam String to,@RequestParam String subject,@RequestParam String message) {
		
		if(mailService.sendMail(to, subject, message))
			return new ResponseEntity<>(new String("Mail Sent"),HttpStatus.OK);
		else
			return new ResponseEntity<>(new String("Mail Send Failed"),HttpStatus.NOT_FOUND);
	}

}
