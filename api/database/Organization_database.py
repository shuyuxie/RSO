from sqlalchemy import create_engine , ForeignKey , Column , String , Integer , CHAR
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
#import csv
import os
import pandas as pd

Base = declarative_base()

#creates Organization's database with columns for org ID, Name, Contact Info (email)
class Organization(Base):
    __tablename__ = "Organizations"

    #_id = Column("ID" , Integer , primary_key=True)
    org_name = Column("Organization Name" , String, primary_key=True)
    website = Column("Website" , String)


    #constructor
    #removed ID column
    #def __init__(self , org , web):
        #self._id = id
    #    self.org_name = org
     #   self.website = web

    #prints table info
   # def __repr__(self) :
    #    return f"({self.org_name}) ({self.contact})"

current_directory = os.path.dirname(__file__)
csvPath = os.path.join(current_directory, '..', 'parser', 'rso.csv')

df = pd.read_csv(csvPath, header=None, names=['Organization Name', 'Website'])



## create_engine will create a file database names Userdb.db and connects to sqlite database
engine = create_engine("sqlite:///Organization.db" , echo=True)
#creates all class tables
Base.metadata.create_all(bind=engine)

#session "class"
Session = sessionmaker(bind = engine)
#session instance
session = Session()

for index, row in df.iterrows():
    org = Organization(org_name=row['Organization Name'], website=row['Website'])
    session.add(org)


session.commit()
session.close()


######### TO ADD TO DATA BASE ########
#Create instance of class using constructor:
#org1 =  Organization(222 , "SDL" , "222@uiuc.edu")
#org2 = Organization(225 , "DS" , "225@uiuc.edu")
#example = Organization(123 , "example" , "example@uiuc.edu")
#session.add(org1)
#session.add(org2)
#session.add(example)
#cleasession.commit()  
##############

