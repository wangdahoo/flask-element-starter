default: run

run:
	./ne ./ve python -m scripts.web

dev:
	./ne webpack --watch
