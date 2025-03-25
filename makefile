# Nom du service dans ton docker-compose.yml
SERVICE_NAME=ludora-showcase-website

# Commande pour entrer dans le conteneur (shell interactif)
enter:
	docker-compose exec $(SERVICE_NAME) sh

logs:
	docker-compose logs -f $(SERVICE_NAME)

build:
	docker-compose up --build

up:
	docker-compose up

stop:
	docker-compose down

start:
	docker-compose up -d

