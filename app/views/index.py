# -*- coding: utf-8 -*-
from flask import render_template, send_file

from app import app

@app.route('/favicon.ico')
def favicon():
    return send_file('templates/favicon.ico')

@app.route('/')
@app.route('/<path:path>')
def index(path=''):
    print(app.config.get('FE_ENV'))
    if app.config.get('FE_ENV') == 'production':
        return render_template('dist/index.html', env='PRD')
    return render_template('dist/index.dev.html', env='DEV')
