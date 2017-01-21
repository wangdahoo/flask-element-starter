default: web

web:
	./ne ./ve python -m scripts.web

fe:
	./ne webpack --watch

prd:
	./ne npm run build
	APP_CONFIG=../prod.conf ./ne ./ve python -m scripts.web
