.PHONY: install dev up down logs clean

install:
	docker compose build

dev:
	docker compose up --build

up:
	docker compose up --build -d

down:
	docker compose down

logs:
	docker compose logs -f

clean:
	docker compose down --volumes --remove-orphans
