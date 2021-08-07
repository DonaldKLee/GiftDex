import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import joblib

def train():
    data = pd.read_csv("static/survey.csv")

    cleaned_data = data.drop(columns=['Timestamp']) # Remove the timestamp from the data

    # Converts genders to numbers
    cleaned_data['Gender'].replace('Female', 0,inplace=True)
    cleaned_data['Gender'].replace('Male', 1,inplace=True)
    cleaned_data['Gender'].replace('Other', 3,inplace=True)
    cleaned_data['Gender'].replace('Prefer not to say', 4,inplace=True)
    # ^^^

    cleaned_data.loc[:,~cleaned_data.columns.duplicated()] # Removed duplicated data to remove bias

    # Splits the category list into seperate categories
    cleaned_data[['Category1', 'Category2', 'Category3']] = cleaned_data['What categories would you buy from? (Top 3)'].str.split(',', 3, expand=True)

    # Removes the category list with everything
    cleaned_data = cleaned_data.drop(columns=['What categories would you buy from? (Top 3)'])

    X = cleaned_data.drop(columns=['Category1', 'Category2', 'Category3'])
    y = cleaned_data.drop(columns=['Gender', 'Age (Leave in a number) Ex: 17'])

    model = DecisionTreeClassifier()
    model.fit(X,y)

    joblib.dump(model, 'trained_model.joblib')