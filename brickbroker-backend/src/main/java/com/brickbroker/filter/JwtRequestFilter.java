package com.brickbroker.filter;


import com.brickbroker.service.impl.AppUserDetailService;
import com.brickbroker.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtRequestFilter extends OncePerRequestFilter {

    private final AppUserDetailService appUserDetailService;

    private final JwtUtil jwtUtil;

//    private static final List<String> PUBLIC_PATHS = List.of(
//            "/login",
//            "/logout",
//            "/profile/register-user",
//            "/profile/register-agent",
//            "/send-reset-otp",
//            "/reset-password",
//            "/swagger-ui",
//            "/v3/api-docs",
//            "/swagger-resources",
//            "/webjars"
//    );
//
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        String path = request.getServletPath();
//        if (PUBLIC_PATHS.stream().anyMatch(path::startsWith)) {
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        String jwt = null;
//        String email = null;
//
//        //1. Check the authorization header
//        final String authorizationHeader = request.getHeader("Authorization");
//        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
//            jwt = authorizationHeader.substring(7);
//        }
//
//        //2. if not found in header, check cookies
//        if(jwt==null){
//            Cookie[] cookies = request.getCookies();
//            if(cookies != null){
//                for(Cookie cookie : cookies){
//                    if ("jwt".equals(cookie.getName())){
//                        jwt = cookie.getValue();
//                        break;
//                    }
//                }
//            }
//        }
//
//        //3. Validate the token and set security context
//
//        if(jwt != null){
//            email = jwtUtil.extractEmail(jwt);
//            if(email != null && SecurityContextHolder.getContext().getAuthentication() == null){
//                UserDetails userDetails = appUserDetailService.loadUserByUsername(email);
//                if(jwtUtil.validateToken(jwt,userDetails)){
//                    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
//                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//                }
//            }
//        }
//
//        filterChain.doFilter(request,response);
//    }

    private static final List<String> PUBLIC_PATHS = List.of(
            "/login",
            "/logout",
            "/profile/register-user",
            "/profile/register-agent",
            "/send-reset-otp",
            "/reset-password",
            "/swagger-ui",
            "/swagger-ui.html",
            "/v3/api-docs",
            "/swagger-resources",
            "/webjars"
    );

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String path = request.getServletPath();
        if (PUBLIC_PATHS.stream().anyMatch(path::startsWith) || path.contains("swagger-ui.html")) {
            filterChain.doFilter(request, response);
            return;
        }

        String jwt = null;
        String email = null;

        final String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
        }

        if (jwt == null) {
            Cookie[] cookies = request.getCookies();
            if (cookies != null) {
                for (Cookie cookie : cookies) {
                    if ("jwt".equals(cookie.getName())) {
                        jwt = cookie.getValue();
                        break;
                    }
                }
            }
        }

        if (jwt != null) {
            email = jwtUtil.extractEmail(jwt);
            if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = appUserDetailService.loadUserByUsername(email);
                if (jwtUtil.validateToken(jwt, userDetails)) {
                    UsernamePasswordAuthenticationToken authenticationToken =
                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }
            }
        }

        filterChain.doFilter(request, response);
    }

}
