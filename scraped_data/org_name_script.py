import csv

def extract_organization_names(csv_file):
    organization_names = []
    with open(csv_file, newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        current_organization_name = None
        for row in reader:
            if len(row) >= 2: 
                if row[1].startswith("http"):
                    if current_organization_name and "Website" not in current_organization_name:
                        organization_names.append(current_organization_name.strip())
                    current_organization_name = row[0].strip()
                elif row[0] != '':
                    current_organization_name = row[0].strip()
        if current_organization_name and "Website" not in current_organization_name:
            organization_names.append(current_organization_name.strip())
    return organization_names

csv_file = 'group-project-team-66\scraped_data/rso_info.csv'
organization_names = extract_organization_names(csv_file)
#for name in organization_names:
 #   print(name)

def write_to_csv(output_file, data):
    with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        for item in data:
            writer.writerow([item])

output_file = 'organization_names.csv'
write_to_csv(output_file, organization_names)
