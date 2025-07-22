package com.brickbroker.service.impl;

import com.brickbroker.exception.EmailSendException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

//@Service
//@RequiredArgsConstructor
//public class EmailService {
//
//    private final JavaMailSender mailSender;
//
//    @Value("${spring.mail.properties.mail.smtp.from}")
//    private String fromEmail;
//
//    public void sendWelcomeEmail(String toEmail,String name){
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom(fromEmail);
//        message.setTo(toEmail);
//        message.setSubject("Welcome to Our Platform");
//        message.setText("Hello "+name+",\n\nThanks for registering with us!\n\nRegards, \nAuthify Team");
//        mailSender.send(message);
//    }
//
//    public void sendResetOtpEmail(String toEmail, String otp){
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom(fromEmail);
//        message.setTo(toEmail);
//        message.setSubject("Password Reset OTP");
//        message.setText("Your OTP for resetting your password is "+otp+". Use this OTP to proceed with resetting you password.");
//        mailSender.send(message);
//    }
//
//    public void sendOtpEmail(String toEmail,String otp){
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom(fromEmail);
//        message.setTo(toEmail);
//        message.setSubject("Account Verification OTP");
//        message.setText("You otp is "+ otp + ". Verify your account using this otp.");
//        mailSender.send(message);
//    }
//}



import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.properties.mail.smtp.from}")
    private String fromEmail;

    private void sendEmail(String toEmail, String subject, String body) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(toEmail);
            message.setSubject(subject);
            message.setText(body);
            mailSender.send(message);
            log.info("Email sent to {}", toEmail);
        } catch (MailException e) {
            log.error("Failed to send email to {}: {}", toEmail, e.getMessage());
            throw new EmailSendException("Unable to send email to "+toEmail,e);
        }
    }

    public void sendWelcomeEmail(String toEmail, String name) {
        String subject = "Welcome to BrickBroker!";
        String body = String.format(
                "Hello %s,\n\nWelcome to BrickBroker! We're thrilled to have you onboard.\n\n" +
                        "Explore properties, connect with agents, and find your dream home today.\n\n" +
                        "Regards,\nBrickBroker Team",
                name
        );
        sendEmail(toEmail, subject, body);
    }

    public void sendResetOtpEmail(String toEmail, String otp) {
        String subject = "BrickBroker Password Reset OTP";
        String body = String.format(
                "We received a request to reset your BrickBroker account password.\n\n" +
                        "Your OTP is: %s\n\n" +
                        "If you did not request this, please ignore this email.\n\n" +
                        "Regards,\nBrickBroker Team",
                otp
        );
        sendEmail(toEmail, subject, body);
    }

    public void sendOtpEmail(String toEmail, String otp) {
        String subject = "BrickBroker Account Verification OTP";
        String body = String.format(
                "To verify your account, use the following OTP:\n\n" +
                        "OTP: %s\n\n" +
                        "This OTP is valid for a limited time.\n\n" +
                        "Thanks,\nBrickBroker Team",
                otp
        );
        sendEmail(toEmail, subject, body);
    }
}
