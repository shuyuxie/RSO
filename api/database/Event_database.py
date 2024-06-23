from sqlalchemy import create_engine , ForeignKey , Column , String , Integer , CHAR
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

#creates Event's database with columns for name, date, location
class Event(Base):
    __tablename__ = "Events"

    event_name = Column("Event Name" , String,primary_key=True)
    event_date = Column("Date" , String)
    location = Column("Location" , String)

    def __init__(self , name , date , loc):
        self.event_name = name
        self.event_date = date
        self.location = loc

    def __repr__(self) :
        return f"({self.event_name}) {self.event_date} ({self.location})"

engine = create_engine("sqlite:///Events.db" , echo=True)
#creates all class tables
Base.metadata.create_all(bind=engine)

#session "class"
Session = sessionmaker(bind = engine)
#session instance
session = Session()


event1 =  Event("Fake Event" , "03/26/24" , "CIF")
session.add(event1)
session.commit()


def add_user_with_id( name, date, loc):
    new_event = Event(event_name = name, event_date = date, location = loc)
    session.add(new_event)
    session.commit()
    session.close()


def delete_event(name):
    event = session.query(Event).filter_by(event_name=name).first()
    if event:
        session.delete(event)
        session.commit()