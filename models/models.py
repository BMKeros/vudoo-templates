# -*- coding: utf-8 -*-
from openerp import models, fields


class HelloWorld(models.Model):
    _name = 'hello.world'

    name = fields.Char(u'Name')
