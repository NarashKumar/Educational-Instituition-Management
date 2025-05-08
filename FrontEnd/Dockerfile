FROM node:23

WORKDIR /app

# ENV NODE_ENV=development

# Copy package files and install ALL dependencies
COPY package.json package-lock.json* ./
RUN npm install

# RUN npx vite --version


# Copy the rest of the app
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
