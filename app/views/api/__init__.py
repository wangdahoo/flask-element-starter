# -*- coding: utf-8 -*-

from app import app
from flask import jsonify


@app.route('/api')
def api_index():
    return 'ok'


def make_api_response(payload=None, message=None, statusCode=200):
    body = {
        'status': 'ok'
    }

    # status code and message
    if statusCode != 200:
        body['status'] = 'fail'

    if message:
        body['message'] = message

    # payload
    if payload:
        body['payload'] = payload

    return jsonify(body), statusCode
