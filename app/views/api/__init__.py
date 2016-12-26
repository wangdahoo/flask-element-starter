# -*- coding: utf-8 -*-

from app import app

@app.route('/api')
def api_index():
    return 'ok'

