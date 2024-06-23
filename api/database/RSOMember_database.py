from turtle import position
from sqlalchemy import create_engine , ForeignKey , Column , String , Integer , CHAR
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
import pandas as pd

Base = declarative_base()

#creates User database with columns for ID, FirstName, LastName, and user's password
class Member(Base):
    __tablename__ = "Members"

    clubName = Column("Club Name" , String , primary_key=True)
    name = Column("Name" , String , primary_key=True)
    position = Column("Position" , String)


    #constructor
   # def __init__(self , id ,first, last, password):
    #    self._id = id
     #   self.first_name = first
      #  self.last_name = last
       # self.password = password

    #prints taable info
    #def __repr__(self) :
     #   return f"({self._id}) {self.first_name} {self.last_name} ({self.password})"


current_directory = os.path.dirname(__file__)
csvPath = os.path.join(current_directory, '..', 'parser', 'membership.csv')

df = pd.read_csv(csvPath, header=None, names=['Club Name', 'Name' , 'Position'])




## create_engine will create a file database names Userdb.db and connects to sqlite database
engine = create_engine("sqlite:///Members.db" , echo=True)
#creates all class tables
Base.metadata.create_all(bind=engine)

#session "class"
Session = sessionmaker(bind = engine)
#session instance
session = Session()

for index, row in df.iterrows():
    org = Member(clubName=row['Club Name'], name=row['Name'] , position=row['Position'])
    session.add(org)

session.commit()
session.close()

######### TO ADD TO DATA BASE ########
# Create instance of class using constructor:
#user1 =  User(2222 , "Farhan" , "Ahmed" , "password")
#user2 =  User(1111 , "Example" , "Ex" , "pass123")
#user3 =  User(333 , "Ex" , "name" , "123443")
#s#ession.add(user1)
#session.add(user2)
#session.add(user3)
#session.commit()  
##############
        
        