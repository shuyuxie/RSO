from sqlalchemy import create_engine , ForeignKey , Column , String , Integer , CHAR
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
#import csv
#import os
#import pandas as pd  

Base = declarative_base()

#creates Organization's database with columns for org ID, Name, Contact Info (email)
class User(Base):
    __tablename__ = "Users"

    id_ = Column("ID" , Integer , primary_key=True)
    name_ = Column("User Name" , String)
    password_ = Column("Password" , String)


    #constructor
    #removed ID column
    def __init__(self , id , name, password):
        self._id = id
        self.name_ = name
        self.password_ = password

    #prints table info
    def __repr__(self) :
        return f"<User(name='{self.name_}', password='{self.password}')>"


## create_engine will create a file database names Userdb.db and connects to sqlite database
engine = create_engine("sqlite:///User.db" , echo=True)
#creates all class tables
Base.metadata.create_all(bind=engine)

#session "class"
Session = sessionmaker(bind = engine)
#session instance
session = Session()


#function to add user to DB
def add_user_with_id(id_, name, password):
    new_user = User(id_=id_, name=name, password=password)
    session.add(new_user)
    session.commit()
    session.close()





