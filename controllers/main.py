# -*- coding: utf-8 -*-
from odoo import http
from odoo.addons.web.controllers import main


class Web(main.Home):
    @http.route(["/hello-world"], auth="user")
    def index_{{module_name}}(self, **kwargs):
        session_uid = http.request.session.uid

        if not session_uid:
            http.request.session.logout(keep_db=True)
            return http.redirect_with_hash("/")

        return http.request.render("{{module_name}}.index", {})
