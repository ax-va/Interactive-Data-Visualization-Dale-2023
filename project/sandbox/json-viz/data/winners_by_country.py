import pandas as pd

winners = pd.read_json('nobel_winners_cleaned.json')
for country, group in winners.groupby('country'):
    group.to_json(f'winners_by_country_{country}.json', orient='records')
