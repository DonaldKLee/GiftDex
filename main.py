import random, os
from flask import Flask, render_template, url_for, request

import modeltrainer, predictions, webscrapping

#Sets up the flask app
app = Flask(
	__name__,
	template_folder='templates', #Name of folder containing html files
	static_folder='static'  #Name of folder containing static files
)

# Prevents cache from using the old css file, makes it use the updated one
@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)

def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            file_path = os.path.join(app.root_path,endpoint, filename)
            values['q'] = int(os.stat(file_path).st_mtime)
    return url_for(endpoint, **values)
# ^ ^ ^

@app.route('/')
def index(): # Home page
    modeltrainer.train()
    
    return render_template('index.html')

@app.route('/', methods=['POST'])
def form():
    age = request.form['age']
    gender = request.form['gender']
    categories = predictions.predict(age,gender)

    # Removes spaces in categories
    cleaned_categories = []
    for category in categories:
        cleaned_categories.append(category.strip(" "))
    categories = cleaned_categories
    # Removes spaces in categories ^^^

    budget = request.form['budget']
    
    return render_template('index.html', categories=str(categories))

if __name__ == "__main__":  
	app.run( 
    debug=True,
    #Starts the website
	host='0.0.0.0',  #Sets the host, required for repl to detect the site
	port=random.randint(2000, 9000)  #Randomly select the port the machine hosts on.
    )