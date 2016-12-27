# -*- coding: utf-8 -*-

import os
from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Application(Flask):
    def __init__(self):
        super(Application, self).__init__(
            __name__, static_folder='../static'
        )

        from . import default_settings
        self.config.from_object(default_settings)

        import os
        if 'APP_CONFIG' in os.environ:
            self.config.from_envvar('APP_CONFIG', silent=True)
        else:
            dev_cfg = os.path.abspath(os.path.join(
                os.path.basename(__file__), '../dev.cfg'))
            self.config.from_pyfile(dev_cfg, silent=True)

    def prepare_element_assets(self):
        """
        element-ui 静态资源
        """

        def _send_asset(filename):
            _folder = os.path.abspath(
                '%s/%s' % (self.root_path, '../node_modules/element-ui/lib'))

            if filename == 'normalize.css':
                _folder = os.path.abspath(
                    '%s/%s' % (self.root_path, '../node_modules/normalize.css'))
            elif filename.startswith('vue/'):
                _folder = os.path.abspath(
                    '%s/%s' % (self.root_path, '../node_modules/vue'))
                filename =  'dist/' + filename[3:]
            elif filename.startswith('vue-router/'):
                _folder = os.path.abspath(
                    '%s/%s' % (self.root_path, '../node_modules/vue-router'))
                filename =  'dist/' + filename[10:]

            cache_timeout = self.get_send_file_max_age(filename)
            return send_from_directory(
                _folder,
                filename,
                cache_timeout=cache_timeout
            )

        app.add_url_rule(
            '/element-ui/<path:filename>',
            endpoint='element-ui',
            view_func=_send_asset
        )

    def ready(self):
        db.init_app(self)
        self.prepare_element_assets()

app = Application()
