import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime, timedelta
import glob
import os

    
def str_to_time_delta(x):
    if x != x:
        return
    if len(x) == 5:
        x = "00:" + x 
    t = datetime.strptime(x,"%H:%M:%S")
    delta = timedelta(hours=t.hour, minutes=t.minute, seconds=t.second)
    return delta

pd.set_option('display.mpl_style', 'default') # Make the graphs a bit prettier

 
os.chdir('C:/Users/kellb_000/Documents/10k/')

def load_runners(race, csvpath, headers=["Group Place","Name","Bib","Age","Place","Gender Place","5K Split","Clock Time","Net Time","Hometown"]):
    runners = pd.DataFrame()
    distance = 6.2
    os.chdir(csvpath)
    if race == 'half':
        distance = 13.1
    elif race == 'full':
        distance = 26.2        
    for filename in glob.glob("*.csv"):
        print('Parsing' + filename)
        thisgroup = pd.read_csv(filename, skiprows=[0,1], names=headers, index_col="Bib")
        runners = runners.append(thisgroup)

    #There's probably a way to do this all at once but I don't know it
    runners["Clock Time"] = runners["Clock Time"].map(str_to_time_delta)
    #runners["5K Split"] = runners["5K Split"].map(str_to_time_delta)
    runners["Net Time"] = runners["Net Time"].map(str_to_time_delta)
    runners["Start Time"] = runners["Clock Time"].subtract(runners["Net Time"])
    
    #because pandas can't plot timedeltas
    runners["Net Num"] = runners["Net Time"].map(lambda x: x/np.timedelta64(1, 's'))
    runners["Start Num"] = runners["Start Time"].map(lambda x: x/np.timedelta64(1, 's'))


    return runners

tenk = load_runners('10k',"C:/Users/kellb_000/Documents/10k/")
#philly = load_runners('10k',"C:/Users/kellb_000/Documents/10k/Philly10k/",["Place","Bib","First Name","Last Name","Gender","Age","Clock Time","Net Time","Pace","Sex total","Sex Place","Div Total","Div Place","Division"] )

half = load_runners('half',"C:/Users/kellb_000/Documents/10k/Half/",["Group Place","Name","Bib","Age","Place","Gender Place","5K Split","10K Split","15K Split","Clock Time","Net Time","Hometown"])
full = load_runners('full',"C:/Users/kellb_000/Documents/10k/Full/",["Group Place","Name","Bib","Age","Place","Gender Place","5M Split","10M Split","Half Split","20M Split","Clock Time","Net Time","Hometown"])
