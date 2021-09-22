package com.app.exc_hander;

import java.time.LocalDateTime;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.custom_exceptions.ProductHandlingException;
import com.app.custom_exceptions.UserHandlingException;
import com.app.dto.ErrorResponse;




@ControllerAdvice //maNDATORY : to tell spring container following class contains the centralized exception hndler mthds
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	//how to tell SC following method acts as exc hndling mthd
	
	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleRuntimeException(RuntimeException e){
		System.out.println("in handle runtime exception"+e);
		ErrorResponse resp=new ErrorResponse("Adding User failed !!",LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resp);
	}
	
	@ExceptionHandler(EmptyResultDataAccessException.class)
	public ResponseEntity<?> handleEmptyDataException(EmptyResultDataAccessException e){
		System.out.println("in handle EmptyResultDataAccessException"+e);
		ErrorResponse resp=new ErrorResponse(e.getMessage(),LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(resp);
	}
	
	@ExceptionHandler(UserHandlingException.class)
	public ResponseEntity<?> handleUserHandlingException(UserHandlingException e){
		System.out.println("in handle userhandle exception"+e);
		ErrorResponse resp=new ErrorResponse(e.getMessage(),LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(resp);
	}
	
	@ExceptionHandler(ProductHandlingException.class)
	public ResponseEntity<?> handleProductHandlingException(ProductHandlingException e)
	{
		System.out.println("in handle product exc "+e);
		ErrorResponse resp = new ErrorResponse(e.getMessage(),LocalDateTime .now());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(resp);
	}
	
	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<?> handleDataIntegrityViolationException(DataIntegrityViolationException e){
		System.out.println("in handle DataIntegrityViolationException"+e);
		ErrorResponse resp=new ErrorResponse(e.getMessage(),LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resp);
	}
}
