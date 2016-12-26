# -*- coding: utf-8 -*-

from app import app
app.ready()


def load_module_recursively(module):
    import pkgutil
    for loader, name, ispkg in pkgutil.iter_modules(module.__path__):
        module_name = '%s.%s' % (module.__name__, name)
        print('loading view: %s' % module_name)
        _module = __import__(module_name, fromlist=[''])

        if ispkg:
            load_module_recursively(_module)


from app import views
load_module_recursively(views)


if __name__ == "__main__":
    app.run('0.0.0.0', 5000, threaded=True)
