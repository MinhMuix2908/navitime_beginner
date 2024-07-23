# Why navitime
So i started a project for drawing a car route from A to B in Japan (with transits C, D, etc)

Also need to find options for bus, metro from A to B

I found out that they got something call navitime

At first everything is so blur and hard to understand for me

So that why after i getting a little more familiar with this navitime, i decided to create this project

If you like my work, please give me a start and a folk

So appriciate 

# Generate API token for NAVITime
You need to create API access to NAVITime including:

API_DOMAIN=xxxxxxxxx api-service url from navitime.biz

API_CID=rxxxxxxx will be the user's CID

API_SIGNATURE=xxxxxxxxxxxxxxxxxxxx which consists of the request code and key

CryptoJS.HmacSHA256('API_REQUEST_CODE', 'KEY')

API_REQUEST_CODE=xxxxxxx

# Create .env file
Take the information from step 1 and place it into the .env file (based on the template file)

# Install docker, docker-compose, or nodeJS v20
Installation steps can be found from various sources on Google

# Build and run using docker
docker-compose up --build -d

docker-compose up -d

# Build and run using nodeJS
npm install

npm start

# A little demo of my work
Image of map using NaviTime paid version
![alt navitime_image](blob/navitime_image.png)

Image of map using RapidAPI and leaflet
![alt leaflet_rabidapi](blob/leaflet_rabidapi.png)

# Peace