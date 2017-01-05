# -*- coding: utf-8 -*-

from app.models import User
from app import app, db

class SiteUser():
    user = None

    def __init__(self, user):
        self.user = user

    @property
    def is_authenticated(self):
        return self.user is not None

    @property
    def is_active(self):
        return False if self.user is None else self.user.is_active

    @property
    def is_anonymous(self):
        return self.user is None

    def get_id(self):
        return 0 if self.user is None else self.user.id

class UserService():

    @staticmethod
    def get(id):
        user = User.query.filter_by(id=id).first()
        return SiteUser(user)

    @staticmethod
    def login(username, password):
        user = User.query.filter_by(username=username, password=password).first()
        return (user is not None, SiteUser(user))

    @staticmethod
    def create_admin():
        user = User.query.filter_by(username='admin').first()
        if user is None:
            user = User(username='admin', password='admin')
            db.session.add(user)
        else:
            user.username = 'admin'
            user.password = 'admin'

        db.session.commit()
        app.logger.debug('init admin account')
