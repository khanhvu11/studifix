# docker exec mongodb /bin/sh -c "mongoexport -u root -p password --authenticationDatabase admin --db studifix -c cities --out /data/export/newdbexport.json && docker cp mongodb:/data/export/ ."
docker exec mongodb /bin/sh -c "mongodump --authenticationDatabase admin -d studifix -o data/export/ -u root -p password"
# docker cp mongodb:/data/export/ .

