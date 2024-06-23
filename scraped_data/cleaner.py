import csv

input_file = 'scraped_data/rso_info.csv'
output_file = 'scraped_data/output.csv'

def clean_data(data):
    cleaned_data = []
    for row in data:
        cleaned_row = []
        for item in row:
            if item.startswith('http'):
                cleaned_row.append(item)
            elif item.startswith('javascript'):
                cleaned_row.append('')
            else:
                cleaned_row.append(item.strip())
        cleaned_data.append(cleaned_row)
    return cleaned_data

with open(input_file, 'r') as file:
    reader = csv.reader(file)
    data = list(reader)

cleaned_data = clean_data(data)

with open(output_file, 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(cleaned_data)

print("Data cleaned and saved to", output_file)
