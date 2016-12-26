# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

setup(
    name='app',

    packages=find_packages(),

    install_requires=[
        'Flask',
        'Flask-SQLAlchemy'
    ],
    setup_requires=[],
    tests_require=[
        'pytest'
    ],

    author="Tom Ye"
)
