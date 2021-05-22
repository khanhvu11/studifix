up:
	docker-compose up --build -d

down: 
	docker-compose down

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d

reload-local:
	make down
	make up

reload-prod:
	make down
	make up-prod