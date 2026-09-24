.PHONY: install dev up down logs clean

install:
	cd backstage && yarn install --immutable

dev:
	cd backstage && yarn start

up:
	docker compose up --build -d

down:
	docker compose down

logs:
	docker compose logs -f

clean:
	docker compose down --volumes --remove-orphans
