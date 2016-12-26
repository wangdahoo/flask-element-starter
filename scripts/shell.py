# -*- coding: utf-8 -*-

import code
import readline
import rlcompleter

from app import app
from app import db

app.ready()

with app.app_context():
    try:
        exports = {
            'db': db
        }

        readline.set_completer(rlcompleter.Completer(exports).complete)
        readline.parse_and_bind("tab: complete")
        shell = code.InteractiveConsole(exports)
        shell.interact()
    finally:
        db.session.remove()
