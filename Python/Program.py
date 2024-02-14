import json
import csv
import xml.etree.ElementTree as ET
import yaml


with open('Greeting.txt', 'r') as file:
    print(file.read())

with open('Greeting.json', 'r') as file:
    data = json.load(file)
    print(data)


with open('Greeting.csv', 'r') as file:
    csv_reader = csv.reader(file)
    for row in csv_reader:
        print(row)


tree = ET.parse('Greeting.xml')
root = tree.getroot()
print(ET.tostring(root, encoding='utf8').decode('utf8'))

with open('Greeting.yaml', 'r') as file:
    data = yaml.load(file, Loader=yaml.FullLoader)
    print(data)
