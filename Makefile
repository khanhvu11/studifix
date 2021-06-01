up:
	docker-compose up --build -d

down: 
	docker-compose down

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d

reload-dev:
	make backup
	make down
	make up

reload-prod:
	make backup
	make down
	make up-prod

backup:
	docker exec mongodb /bin/sh -c "mongodump --authenticationDatabase admin -d studifix -o export/ -u root -p password"
	docker cp mongodb:data/export/studifix/. ./mongo/restore