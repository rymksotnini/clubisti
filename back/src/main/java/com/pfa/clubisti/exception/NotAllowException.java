package com.pfa.clubisti.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NotAllowException extends RuntimeException {
    public NotAllowException() {
        super();
    }

    public NotAllowException(String message) {
        super(message);
    }

    public NotAllowException(String message, Throwable cause) {
        super(message, cause);
    }
}
