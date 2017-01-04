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
        # 生产环境配置
        if 'APP_CONFIG' in os.environ:
            self.config.from_envvar('APP_CONFIG', silent=True)
        else:
            dev_cfg = os.path.abspath(os.path.join(
                os.path.basename(__file__), '../dev.cfg'))
            self.config.from_pyfile(dev_cfg, silent=True)

    def prepare_dist(self):
        """
        webpack 打包后的静态资源
        """

        def _send_asset(filename):
            _folder = os.path.abspath(
                '%s/%s' % (self.root_path, '../dist'))
            cache_timeout = self.get_send_file_max_age(filename)
            return send_from_directory(
                _folder,
                filename,
                cache_timeout=cache_timeout
            )

        app.add_url_rule(
            '/dist/<path:filename>',
            endpoint='dist',
            view_func=_send_asset
        )

    def ready(self):
        db.init_app(self)
        self.prepare_dist()

app = Application()
