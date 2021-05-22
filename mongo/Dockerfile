FROM mongo:latest

WORKDIR /data

COPY restore restore
# COPY importData.sh scripts/importData.sh
# RUN chmod 777 scripts/importData.sh

# CMD scripts/mongo.sh

COPY ./importData.sh /docker-entrypoint-initdb.d/importData.sh

CMD chmod 777 /docker-entrypoint-initdb.d/importData.sh