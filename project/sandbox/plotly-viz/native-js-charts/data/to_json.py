import pandas as pd

df = pd.read_parquet("../../../data/nobel_winners_cleaned.parquet")
df_gender_award_age = df[['gender', 'award_age']]
df_gender_award_age.to_json('gender-award_age.json', orient='records')

df_gender_category = df[['gender', 'category']]
df_gender_category.to_json('gender-category.json', orient='records')
