import joblib
def predict(age,gender):
    model = joblib.load('trained_model.joblib')

    # gender, age
    predictions = model.predict([ [gender, age] ])

    return predictions[0]
