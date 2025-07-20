package org.example.jwtapp.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {
    private static final String USERNAME = "user";
    private static final String PASSWORD = "pwd";

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        Map<String, String> result = new HashMap<>();
        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            result.put("token", "");
            return result;
        }
        String base64Credentials = authHeader.substring("Basic ".length());
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));
        String[] values = credentials.split(":", 2);
        if (values.length == 2 && USERNAME.equals(values[0]) && PASSWORD.equals(values[1])) {
            String token = Jwts.builder()
                    .setSubject(values[0])
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + 20 * 60 * 1000))
                    .signWith(SignatureAlgorithm.HS256, "secretkey")
                    .compact();
            result.put("token", token);
        } else {
            result.put("token", "");
        }
        return result;
    }
}
