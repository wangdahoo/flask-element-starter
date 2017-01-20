default: web

web:
	./ne ./ve python -m scripts.web

fe:
	./ne webpack --watch
