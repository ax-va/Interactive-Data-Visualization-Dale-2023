import matplotlib.pyplot as plt
import pandas as pd

df_winners = pd.read_parquet('data/nobel_winners_cleaned.parquet')  # precondition: fastparquet installed
df_winners.info()
# <class 'pandas.core.frame.DataFrame'>
# Index: 974 entries, Richard Adolf Zsigmondy to John Carew Eccles
# Data columns (total 13 columns):
#  #   Column          Non-Null Count  Dtype
# ---  ------          --------------  -----
#  0   link            974 non-null    object
#  1   year            974 non-null    int64
#  2   category        974 non-null    object
#  3   country         974 non-null    object
#  4   text            974 non-null    object
#  5   wikidata_code   974 non-null    object
#  6   date_of_birth   974 non-null    datetime64[ns]
#  7   date_of_death   667 non-null    datetime64[ns]
#  8   place_of_birth  974 non-null    object
#  9   place_of_death  665 non-null    object
#  10  gender          974 non-null    object
#  11  born_in         136 non-null    object
#  12  award_age       974 non-null    int64
# dtypes: datetime64[ns](2), int64(2), object(9)
# memory usage: 106.5+ KB

nat_group = df_winners.groupby('country')
ngsz = nat_group.size()
# country
# Argentina           4
# Australia          10
# Austria            16
# Bangladesh          1
# Belarus             2
#                  ...
# United Kingdom    120
# United States     375
# Vietnam             1
# Yemen               1
# Yugoslavia          2
# Length: 62, dtype: int64

df_countries = pd.read_json('data/world-country-data.json')
df_countries["name"].head(3)
# 0    {'common': 'French Polynesia', 'official': 'Fr...
# 1    {'common': 'Saint Martin', 'official': 'Saint ...
# 2    {'common': 'Venezuela', 'official': 'Bolivaria...
# Name: name, dtype: object

pd.json_normalize(data=df_countries["name"]).head(3)
#              common                          official nativeName.fra.official nativeName.fra.common  ... nativeName.lit.official nativeName.lit.common nativeName.cal.official nativeName.cal.common
# 0  French Polynesia                  French Polynesia     Polynésie française   Polynésie française  ...                     NaN                   NaN                     NaN                   NaN
# 1      Saint Martin                      Saint Martin            Saint-Martin          Saint-Martin  ...                     NaN                   NaN                     NaN                   NaN
# 2         Venezuela  Bolivarian Republic of Venezuela                     NaN                   NaN  ...                     NaN                   NaN                     NaN                   NaN
#
# [3 rows x 308 columns]

df_countries["population"].head(3)
# 0      280904
# 1       38659
# 2    28435943
# Name: population, dtype: int64

df_final = pd.DataFrame(
    data={
        "country": pd.json_normalize(data=df_countries["name"])["common"],
        "population": df_countries["population"],
    }
)
df_final = df_final.set_index("country")

df_final
#                           population
# country
# French Polynesia              280904
# Saint Martin                   38659
# Venezuela                   28435943
# Réunion                       840974
# El Salvador                  6486201
# ...                              ...
# Northern Mariana Islands       57557
# Botswana                     2351625
# Panama                       4314768
# Gabon                        2225728
# Ecuador                     17643060
#
# [250 rows x 1 columns]

df_final['nobel_wins'] = ngsz
#                           population  nobel_wins
# country
# French Polynesia              280904         NaN
# Saint Martin                   38659         NaN
# Venezuela                   28435943         NaN
# Réunion                       840974         NaN
# El Salvador                  6486201         NaN
# ...                              ...         ...
# Northern Mariana Islands       57557         NaN
# Botswana           df_final.loc["Germany"]          2351625         NaN
# Panama                       4314768         NaN
# Gabon                        2225728         NaN
# Ecuador                     17643060         NaN

df_final['nobel_wins_per_capita'] = df_final.nobel_wins / df_final.population
# Note:
# the analysis is not correct because, for example, we have "Russia" for population and
# "Russia and Soviet Union" for prize winners (that is not added to df_final), and so on.

df_final
#                           population  nobel_wins  nobel_wins_per_capita
# country
# French Polynesia              280904         NaN                    NaN
# Saint Martin                   38659         NaN                    NaN
# Venezuela                   28435943         NaN                    NaN
# Réunion                       840974         NaN                    NaN
# El Salvador                  6486201         NaN                    NaN
# ...                              ...         ...                    ...
# Northern Mariana Islands       57557         NaN                    NaN
# Botswana                     2351625         NaN                    NaN
# Panama                       4314768         NaN                    NaN
# Gabon                        2225728         NaN                    NaN
# Ecuador                     17643060         NaN                    NaN
#
# [250 rows x 3 columns]

df_final[df_final.nobel_wins > 2]
#                 population  nobel_wins  nobel_wins_per_capita
# country
# United States    329484123       375.0           1.138143e-06
# Belgium           11555997        10.0           8.653516e-07
# Switzerland        8654622        22.0           2.541994e-06
# Egypt            102334403         4.0           3.908754e-08
# Ireland            4994724         9.0           1.801901e-06
# Denmark            5831404        14.0           2.400794e-06
# United Kingdom    67215293       120.0           1.785308e-06
# Germany           83240525        85.0           1.021137e-06
# France            67391582        67.0           9.941895e-07
# Argentina         45376763         4.0           8.815084e-08
# Australia         25687041        10.0           3.893014e-07
# Japan            125836021        24.0           1.907244e-07
# Norway             5379475        14.0           2.602484e-06
# Sweden            10353442        33.0           3.187346e-06
# Canada            38005238        15.0           3.946824e-07
# India           1380004385         5.0           3.623177e-09
# Netherlands       16655799        18.0           1.080705e-06
# Spain             47351567         7.0           1.478304e-07
# Poland            37950802         6.0           1.580994e-07
# Austria            8917205        16.0           1.794284e-06
# South Africa      59308690         7.0           1.180265e-07
# Italy             59554023        14.0           2.350807e-07
# Israel             9216900        12.0           1.301956e-06
# Hungary            9749763         8.0           8.205328e-07

ax = (df_final[df_final.nobel_wins > 2]
      .sort_values(by='nobel_wins_per_capita', ascending=True)
      .nobel_wins_per_capita.plot(kind='barh', figsize=(5, 10), title="Relative prize numbers"))
ax.set_xlabel("Nobel prizes per capita")
ax.set_facecolor("#eee")
plt.tight_layout()
plt.savefig("country_relative_prize_numbers.png")
plt.savefig("country_relative_prize_numbers.svg")
plt.close()
