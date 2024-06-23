from flask import Flask
from flask_session import Session
from flask import Flask, flash, redirect, render_template, request, session
from werkzeug.security import check_password_hash, generate_password_hash
from helpers import apology, login_required

import sqlite3

app = Flask(__name__)
# https://docs.python.org/3/library/sqlite3.html
con_org = sqlite3.connect("Organization.db", check_same_thread=False)
con_mem = sqlite3.connect("Members.db", check_same_thread=False)
db_org = con_org.cursor()
db_mem = con_mem.cursor()


@app.route("/api/orgs")
def fetch_org():
    res = db_org.execute("select * from Organizations")
    org = res.fetchall()
    return org

@app.route("/api/mem")
def fetch_mem():
    res = db_mem.execute("select * from Members")
    mem = res.fetchall()
    return mem