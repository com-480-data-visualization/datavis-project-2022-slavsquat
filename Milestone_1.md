# Milestone 1 - Data Visualization project on the Barcelona dataset

## 1. Problematic

### 1.1 Overview

Being ranked very high one the list of best places to live in Europe, Barcelona represents an attractive location for pepople all around the world when it comes to residential choice, holidays, personal and business meet-ups, conferences, etc. Having beautiful architecture, wonderful food, excellent public transportation and amazing weather, it hosts around seven million visitors annually and organizes more than 1000 events. With all daily news, that is presented outside the Spain, normally going into this direction, most of people started associating Barcelona only with previously mentioned points, which has consequenly ensured its steady development and growth over the last 20 years. However, little could be read about the big immigration it has, as well as about the number of accidenets and deaths happening. Moreover, insignificantly small number of studies has been conducted so far, trying to find correlations between different events happened and the city organization itself (e.g. number of accidents in different neighbourhoods to increase safety of the population), in order to improve the its structure and make changes.  

### 1.3 Motivation and Target audience

Nowadays, living in the fast-pace world, when people are getting more and more flexible about living abroad and feel more adaptable to changing environments, information about if the city meets their needs in terms of, for example, transportation and environment, considering how 

### 1.3 Our goals

- What is the safest neighborhood in Barcelona? Describing the safety of Barcelona neighborhoods. : In this question we would like to address and analyze the problem of accidents happening in Barcelona, in order to see if the safest neighborhood could be determined. The answer to this question would help many people that are moving in Barcelona make a decision on where to search for the apartment, especially if they have kids. On the other hand, the information results could be used by the authorities to provoke further analysis on why are certain neighborhoods unsafe, and if they can do something in order to tackle this issue and create safe environment for living in all Barcelona neighborhoods.

- What is the overall popularity of living in Barcelona? :  Here we would analyze all the data provided in the Barcelona data sets and make visualizations which could be later used and assessed by people who are trying to see if Barcelona is the right place for them.  

## 2. Dataset

The dataset which is going to be used in this analysis is kaggle-one Barcelona data set. Acknowledged by Barcelona City Council and Barcelona Digital City, Barcelona data set consists of different subsets containg the information about various aspects of the city, offering a possibility to tackle many issues. Ones that are going to be used in this study are deaths.csv, population.csv, immigrants_by_nationality.csv, immigrants_emigrants_by_age.csv, immigrants_emigrants_by_destination.csv, immigrants_emigrants_by_destination2.csv, immigrants_emigrants_by_sex.csv and accidents_2017.csv, containing the data about population in different Barcelona neighbourhoods, accidents and immigration statistics.

## 3. Exploratory data analysis

In this section we are providing some basic statistics of our dataset alongside a few insightful graphs.

For conducting the first analysis, we used the pandas library in python 3.9, and the work can be found in this notebook. Some of the main conclusions we made are:

- There is information about 74 neighborhoods in Barcelona in our dataset.
- Most popular names in Barcelona are Maria (38346 records), Antonio (33091 records), and Montserrat (32480 records).
- Andalusia is the part of Spain from where the most people migrate to Barcelona.
- More than 100000 people from Spain migrated to Barcelona from other cities.

To back up our findings, we are providing the following plots.

<p align="center">
  <img src="images/im_by_ne.png"/>
  Number of immigrants by neighborhood
</p>

<p align="center">
  <img src="images/top15.png"/>
  Top 15 countries by number of immigrants to Barcelona
</p>

<p align="center">
  <img src="images/immigrants from spain.png"/>
  Number of immigrants from other parts of Spain to Barcelona
</p>

## 4. Related work
- *Data exploration made by others*

As it was said previously, the dataset we are going to use is taken from Kaggle. That is why there were a few attempts to work with this data. Most of them have not had a lot of visualization (just several base plots written on Python to analyze some exact problem). Also, there was one very good exploration of the dataset with a lot of images written on R language. But this exploration is mostly like an overview and does not provide answers to some exact questions.

- *Originality of our approach*

We are going to create dynamic visualization that can help us to answer the questions mentioned above.  

- *Sources of inspiration*
