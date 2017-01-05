# -*- coding: utf-8 -*-
from app import db


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column('id', db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)
    is_active = db.Column(db.Integer)

    def __repr__(self):
        return "<User-{}: {}>".format(self.id, self.username, self.password, self.is_active)

    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.is_active = 1
