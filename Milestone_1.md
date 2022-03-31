# Milestone 1 - Data Visualization project on the Barcelona dataset

## Dataset

Being ranked very high one the list of best places to live in Europe, Barcelona represents an attractive location for pepople all around the world when it comes to residential choice, holidays, personal and business meet-ups, conferences, etc. Having beautiful architecture, wonderful food, excellent public transportation and amazing weather, it hosts around seven million visitors annually and organizes more than 1000 events. With all daily news, that is presented outside the Spain, normally going into this direction, most of people started associating Barcelona only with previously mentioned points, which has consequenly ensured its steady development and growth over the last 20 years. However, little could be read about the big immigration it has, as well as about the number of accidenets and deaths happening. Moreover, insignificantly small number of studies has been conducted so far, trying to find correlations between different events happened and the city organization itself (e.g. number of accidents in different neighbourhoods to increase safety of the population), in order to improve the its structure and make changes.  

Acknowledged by Barcelona City Council and Barcelona Digital City, Barcelona data set consists of different subsets containg the information about various aspects of the city, offering a possibility to tackle many issues. Ones that are going to be used in this study are deaths.csv, population.csv, immigrants_by_nationality.csv, immigrants_emigrants_by_age.csv, immigrants_emigrants_by_destination.csv, immigrants_emigrants_by_destination2.csv, immigrants_emigrants_by_sex.csv and accidents_2017.csv, containing the data about population in different Barcelona neighbourhoods, accidents and immigration statistics. 

## Problematic

## Exploratory data analysis

In this section we are providing some basic statistics of our dataset alongside a few insightful graphs.

For conducting the first analysis, we used the pandas library in python 3.9, and the work can be found in this notebook. Some of the main conclusions we made are:

- There is information about 74 neighborhoods in Barcelona in our dataset.
- Most popular names in Barcelona are Maria (38346 records), Antonio (33091 records), and Montserrat (32480 records).
- Andalusia is the part of Spain from where the most people migrate to Barcelona.
- More than 100000 people from Spain migrated to Barcelona from other cities.

To back up our findings, we are providing the following plots.

<p align="center">
  <img src="images/im_by_ne.png"/>
  <img src="images/top15.png"/>
  <img src="images/immigrants from spain.png"/>
</p>

## Related work
