# Usar servidor Nginx ligero
FROM nginx:alpine

# Borrar archivos por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos del portafolio al servidor
COPY . /usr/share/nginx/html

# Exponer puerto 80 (Railway lo usará para el tráfico entrante)
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]