from bs4 import BeautifulSoup
import requests
import csv

response = requests.get("https://one.illinois.edu/club_signup?view=all&group_type=9999&search=&category_tags=&all_my_groups=all_groups&order=name_asc")

html_string = response.text
soup = BeautifulSoup(html_string, 'html.parser')
tree = soup.html
clubs = tree.findAll('h2', class_ = 'media-heading header-cg--h4')

org_info = []
for club in clubs:
    org_name = club.a.text.strip()
    org_website_url = club.a['href'].strip()
    org_info.append((org_name, org_website_url))


# with open('rso.csv', 'w', newline='') as csvfile:
#     writer = csv.writer(csvfile, delimiter=',')
#     for i in org_info:
#         writer.writerow(i)

# Recursively parse linked organizations website to get the description and their membership

prefix = 'https://one.illinois.edu' 

membership_info = []
# find all membership information of clubs with one.illinois website
for org, org_website_url in org_info:
    if org_website_url[:24] != prefix:
        continue
    membership_url = org_website_url + 'web_officers' # create membership url
    tree_membership = BeautifulSoup(requests.get(membership_url).text, 'html.parser').html # get the webpage, parse it
    members = tree_membership.find_all('table', class_ = 'member_card') # get all membership info
    for member in members:
        name = member.find('td', class_='three').find('strong').text
        role = member.find('td', class_='other').text.strip()
        membership_info.append((org, name, role))

print("Done parsing")

# write to csv file
with open('membership.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',')
    for i in membership_info:
        writer.writerow(i)

print("Done Writing")