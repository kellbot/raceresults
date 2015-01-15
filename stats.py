import pandas as pd
import numpy as np
import matplotlib as mpl
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

 
os.chdir('C:/Users/kellb_000/Dropbox/Hacks/Racedata')

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

    runners.sort("Place",inplace=True)

    #There's probably a way to do this all at once but I don't know it
    runners["Clock Time"] = runners["Clock Time"].map(str_to_time_delta)
    #runners["5K Split"] = runners["5K Split"].map(str_to_time_delta)
    runners["Net Time"] = runners["Net Time"].map(str_to_time_delta)
    runners["Start Time"] = runners["Clock Time"].subtract(runners["Net Time"])
    
    #because pandas can't plot timedeltas
    runners["Net Num"] = runners["Net Time"].map(lambda x: x/np.timedelta64(1, 's'))
    runners["Clock Num"] = runners["Clock Time"].map(lambda x: x/np.timedelta64(1, 's'))
    runners["Start Num"] = runners["Start Time"].map(lambda x: x/np.timedelta64(1, 's'))

    #Try to assing a heat. Only works if heats have at least 60 seconds between them.
    starts = runners["Start Time"].copy()
    starts.sort()
    dt = starts.diff()
    heat = (dt > pd.Timedelta(seconds=60)).cumsum()
    heat = heat.sort_index()

    runners["Heat"] = heat

    return runners

#Convert seconds back to H:M:S. There has to be a better way to do this
def time_formatter(x, post):
    return str(timedelta(seconds = int(x)))

ax = plt.gca()
ax.yaxis.set_major_formatter(mpl.ticker.FuncFormatter(time_formatter))

tenk = load_runners('10k',"C:/Users/kellb_000/Dropbox/Hacks/Racedata/10k/")
philly = load_runners('10k',"C:/Users/kellb_000/Dropbox/Hacks/Racedata/Philly10k/",["Place","Bib","First Name","Last Name","Gender","Age","Clock Time","Net Time","Pace","Sex total","Sex Place","Div Total","Div Place","Division"] )

half = load_runners('half',"C:/Users/kellb_000/Dropbox/Hacks/Racedata/Half/",["Group Place","Name","Bib","Age","Place","Gender Place","5K Split","10K Split","15K Split","Clock Time","Net Time","Hometown"])
full = load_runners('full',"C:/Users/kellb_000/Dropbox/Hacks/Racedata/Full/",["Group Place","Name","Bib","Age","Place","Gender Place","5M Split","10M Split","Half Split","20M Split","Clock Time","Net Time","Hometown"])

tenk["Place Percent"] = tenk["Place"].map(lambda x: x/len(tenk) * 100)
tenk.plot(x="Place Percent", y="Net Num", ax = ax, legend = "Disney 10K")

philly["Place Percent"] = philly["Place"].map(lambda x: x/len(philly) * 100)
philly.plot(x="Place Percent", y="Net Num", ax = ax, legend = "Philly 10k")
