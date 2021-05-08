docker exec mongodb /bin/sh -c "mongodump --authenticationDatabase admin -d studifix -o export/ -u root -p password"
docker copy -r mongodb:data/export/studifix/. ./mongo/restore

