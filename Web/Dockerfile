FROM nginx

# If you are behind a proxy ...
#ENV HTTP_PROXY "http://10.0.2.2:3128"
#ENV HTTPS_PROXY "http://10.0.2.2:3128"
#ENV NO_PROXY "192.168.99.*"

COPY wwwroot /usr/share/nginx/html
COPY wwwroot/app/constants_live.js /usr/share/nginx/html/app/constants.js
