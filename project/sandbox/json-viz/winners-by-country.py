import pandas as pd

winners = pd.read_json('data/nobel_winners_cleaned.json')
for country, group in winners.groupby('country'):
    group.to_json(f'data/winners_by_country_{country}.json', orient='records')
