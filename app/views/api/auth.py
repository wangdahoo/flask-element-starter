# -*- coding: utf-8 -*-

from app import app
from app.services import UserService, SiteUser
from flask import request
from flask_login import current_user, login_user, logout_user
from . import make_api_response


@app.route('/api/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    if not username or not password:
        return make_api_response(message='参数错误：缺少用户名或密码', statusCode=400)

    (result, user) = UserService.login(username, password)

    if not result:
        return make_api_response(message='用户名或密码错误', statusCode=400)

    if not user.is_active:
        return make_api_response(message='账号已被冻结 请联系管理员', statusCode=400)

    login_user(user)
    return make_api_response()


@app.route('/api/logout', methods=['GET', 'POST'])
def logout():
    logout_user()
    return make_api_response()
