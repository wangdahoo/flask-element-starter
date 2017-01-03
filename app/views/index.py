# -*- coding: utf-8 -*-
from flask import render_template, send_file

from app import app

@app.route('/favicon.ico')
def favicon():
    return send_file('templates/favicon.ico')    

@app.route('/')
def index():
    return render_template('index.html')
