

from fastapi import FastAPI 
import pandas as pd

app = FastAPI()

# Read in CSV file
df = pd.read_csv("creditcard.csv")

@app.get("/")
def get_fraud_status():
    # Check if Class column is equal to 1
    is_fraud = df['Class'] !=0 
    
    # Return true if not fraud, false otherwise
    return {"is_fraud":  not is_fraud.any()}