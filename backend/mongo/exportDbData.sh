docker exec mongodb /bin/sh -c "mongodump --authenticationDatabase admin -d studifix -o data/export/ -u root -p password"
docker cp mongodb:/data/export/ .

