package com.app.custom_exceptions;

@SuppressWarnings("serial")
public class UnauthorizedException extends RuntimeException {

    public UnauthorizedException(String message) {
        super(message);
    }

}
