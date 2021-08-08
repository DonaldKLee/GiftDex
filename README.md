# RoboHacks 2021
## By Donald Lee, Ricky Zhao, Rosa Chen, and Henry Zhou

## Inspiration
Every problem of humanity deserves a solution, whether big or small. Even the smallest of fixes make us appreciate the little things in life. During the holidays, we often find ourselves struggling to match our loved ones with their preferred gift. Therefore, we used our knowledge of backend and frontend development to fix this issue. 
## What it does
It takes the results of surveys and the system identifies patterns of data within age demographics. With the data, it automatically matches one's age and budget with possible gifts. ( With links to purchase them) 

## How we built it
We sent out our survey to multiple groups of people of different age groups so that we can get a diverse data set with accurate predictions. 

Using the dataset collected from the survey, we trained a machine learning model to predict the 3 most popular categories of gifts someone would want based on their age and gender. Using those 3 categories, we utilized web scraping to search for items based off those 3 categories predicted. To make the results more accurate, we allowed the users to input any interests that the receiver has, for example, if the receiver really likes anime, we would find products that aligns with the predicted categories and their interests. 

After web scraping product information such as prices, names, and links to buy the product, we displayed all that on our Flask site, so that the user can view all the gifts recommended to them.

Used JavaScript to create the reroll function and search animation, and HTML and CSS to develop the website.

Afterwards, we got a domain from domain.com and linked it to our Flask site!

## Challenges we ran into
The goal of GiftDex is to find the perfect gift for your special someone. In order to predict what the perfect gift is, we needed to understand what most people would want based on their gender, age, and interests. However, we found it difficult finding datasets with both age, gender, and categories of interest on sites such as kaggle. After spending hours searching for data, we decided that it would be best to collect our own data by creating our own survey. Additionally,  this was also our first Machine learning project, so we found it pretty difficult training and testing our model. 

Web scraping with python was also one of our biggest hurdles. We had trouble getting an element within an element, and also with scraping from dynamic web pages (Changes every time).

As for the UI design, formatting the website was a challenge we faced. We had to make the page visually appealing while including all the features that we want to present. 

## Accomplishments that we're proud of
We learned how to train a **machine learning** model in 2 days, and this was our first machine learning project!
Many of us were also new to **web scraping**, and we are proud of our resilience as we kept moving forward. Additionally, our UI designer learned to use Figma for the first time for this Hackathon. 

## What we learned
In addition to machine learning, web scraping, and UI design, we also learned the importance of teamwork and organization. Without the team, it would have been highly difficult to finish this project alone. As we grew comfortable with everyone's strengths and weaknesses, we were able to delegate tasks based on their strengths, and assist them with tasks that they were not comfortable with. However, we also worked on our weaknesses by teaching each other so that our future hackathons would be more efficient. 

## What's next for GiftDex
We plan to keep GiftDex online for a year since that is when our free domain expires. We will also begin sharing GiftDex with friends and families, and gather feedback from them, to determine if we should turn GiftDex into a start up. To generate revenue, we can use affiliate links, and maybe run ads on the site. 