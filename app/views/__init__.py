# -*- coding: utf-8 -*-

from app import app
from flask_assets import Bundle, Environment

# Assets
assets = Environment(app)

normalize_css = Bundle('normalize.css', 'normalize.css',
            filters='cssmin', output='gen/normalize.css')
assets.register('normalize.css', normalize_css)