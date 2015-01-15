import csv
from lxml import html
import glob
import os

os.chdir('C:/Users/kellb_000/Dropbox/Hacks/Racedata/Philly10k/')

for filename in glob.glob("*.html"):
    file = open(filename)

    filestring = file.read()
    tree = html.fromstring(filestring)

    table = tree.xpath('//table[@class="results_table"]/tbody/tr')
    data = list()

    for row in table:
        data.append([c.text_content() for c in row.getchildren()])

    letter = filename[:-5]
    csvfile = "C:/Users/kellb_000/Dropbox/Hacks/Racedata/Philly10k/" + letter + ".csv"

    with open(csvfile, "w") as output:
        writer = csv.writer(output, lineterminator='\n')
        writer.writerows(data)
