import pandas as pd

df = pd.read_parquet("../../../data/nobel_winners_cleaned.parquet")
df_select = df[['gender', 'award_age']]
df_select.to_json('gender-award_age.json', orient='records')