import nest_asyncio
nest_asyncio.apply()

import asyncio
from requests_html import AsyncHTMLSession
import csv

async def main():

    url = 'https://one.illinois.edu/club_signup?view=all&group_type=9999&search=&category_tags=&all_my_groups=all_groups&order=name_asc'
    # FOUND THIS URL, ILLINOIS WEBSITE USES FILTERS TO SHOW ALL RSOS IN ONE QUERY

    session = AsyncHTMLSession()

    try:
        response = await session.get(url, timeout=60)
        await response.html.arender(timeout=60)

        links = response.html.find('a')
        csv_file = 'rso_info.csv'

        with open(csv_file, 'w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            
            writer.writerow(['Link Text', 'URL'])
            
            for link in links:
                link_text = link.text.strip()
                link_url = link.attrs['href']
                writer.writerow([link_text, link_url])

        print("CSV file has been created successfully.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

asyncio.run(main())
