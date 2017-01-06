# -*- coding: utf-8 -*-
from flask import render_template, send_file

from app import app

@app.route('/favicon.ico')
def favicon():
    return send_file('templates/favicon.ico')

@app.route('/')
def index():
    if app.debug:
        return render_template('index.html')
    return send_file('../dist/index.html')

