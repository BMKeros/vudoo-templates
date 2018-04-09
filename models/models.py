# -*- coding: utf-8 -*-
from odoo import models, fields


class HelloWorld(models.Model):
    _name = 'hello.world'

    name = fields.Char(u'Name')
