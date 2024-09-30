up:
	docker compose up -d
up-build:
	docker compose up -d --build
up-front:
	docker compose up -d hdr-ui

shell-ui:
	docker compose exec hdr-ui ash
install-ui:
	docker compose exec hdr-ui npm i
run-ui:
	docker compose exec hdr-ui npm start
build-ui:
	docker compose exec hdr-ui npm run build
down:
	docker compose down