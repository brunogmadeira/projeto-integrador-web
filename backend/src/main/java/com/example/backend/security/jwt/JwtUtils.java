package com.example.backend.security.jwt;

import com.example.backend.service.UserDetailImpl;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.MalformedInputException;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtils {
    @Value("${backend.jwtSecret}")
    private String jwtSecret;
    @Value("${backend.jwtExpirationMs}")
    private int jwtExpirationMs;


    public String generateTokenFromUserDetailsImpl(UserDetailImpl userDetail) {
        return Jwts.builder()
                .setSubject(userDetail.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + jwtExpirationMs))
                .signWith(getSiginKey(), SignatureAlgorithm.HS256)
                .compact();
    }


    public Key getSiginKey(){
        SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
        return key;
    }

    public String getUsernameToken(String token){
        return Jwts.parser().setSigningKey(getSiginKey()).build().parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String authToken){
        try {
            Jwts.parser().setSigningKey(getSiginKey()).build().parseClaimsJws(authToken);
            return true;
        }catch (MalformedJwtException e){
            System.out.println(e);
        }catch (ExpiredJwtException e){
            System.out.println(e);
        }catch (UnsupportedJwtException e){
            System.out.println(e);
        }catch (IllegalArgumentException e){
            System.out.println(e);
        }
        return false;
    }
}
