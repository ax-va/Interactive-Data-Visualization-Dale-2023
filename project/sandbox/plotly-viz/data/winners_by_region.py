import numpy as np
import pandas as pd

# Prepare data in dataframe

df = pd.read_parquet('../../data/nobel_winners_cleaned.parquet')  # precondition: fastparquet installed
df.info()
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

new_index = pd.Index(np.arange(1901, 2024), name='year')
# Index([1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910,
#        ...
#        2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
#       dtype='int64', name='year', length=123)
by_year_nat_sz = df.groupby(['year', 'country']).size().unstack().reindex(new_index).fillna(0)
# country  Argentina  Australia  Austria  Bangladesh  Belarus  Belgium  Bosnia and Herzegovina  Canada  Chile  ...  Tibet  Tunisia  Turkey  Ukraine  United Kingdom  United States  Vietnam  Yemen  Yugoslavia
# year                                                                                                         ...
# 1901           0.0        0.0      0.0         0.0      0.0      0.0                     0.0     0.0    0.0  ...    0.0      0.0     0.0      0.0             0.0            0.0      0.0    0.0         0.0
# 1902           0.0        0.0      0.0         0.0      0.0      0.0                     0.0     0.0    0.0  ...    0.0      0.0     0.0      0.0             1.0            0.0      0.0    0.0         0.0
# 1903           0.0        0.0      0.0         0.0      0.0      0.0                     0.0     0.0    0.0  ...    0.0      0.0     0.0      0.0             1.0            0.0      0.0    0.0         0.0
# 1904           0.0        0.0      0.0         0.0      0.0      0.0                     0.0     0.0    0.0  ...    0.0      0.0     0.0      0.0             2.0            0.0      0.0    0.0         0.0
# 1905           0.0        0.0      1.0         0.0      0.0      0.0                     0.0     0.0    0.0  ...    0.0      0.0     0.0      0.0             0.0            0.0      0.0    0.0         0.0
# ...            ...        ...      ...         ...      ...      ...                     ...     ...    ...  ...    ...      ...     ...      ...             ...            ...      ...    ...         ...
# 2019           0.0        0.0      1.0         0.0      0.0      0.0                     0.0     1.0    0.0  ...    0.0      0.0     0.0      0.0             1.0            6.0      0.0    0.0         0.0
# 2020           0.0        0.0      0.0         0.0      0.0      0.0                     0.0     0.0    0.0  ...    0.0      0.0     0.0      0.0             2.0            7.0      0.0    0.0         0.0
# 2021           0.0        0.0      0.0         0.0      0.0      0.0                     0.0     0.0    0.0  ...    0.0      0.0     0.0      0.0             2.0            4.0      0.0    0.0         0.0
# 2022           0.0        0.0      1.0         0.0      1.0      0.0                     0.0     0.0    0.0  ...    0.0      0.0     0.0      0.0             0.0            6.0      0.0    0.0         0.0
# 2023           0.0        0.0      1.0         0.0      0.0      0.0                     0.0     0.0    0.0  ...    0.0      1.0     0.0      0.0             0.0            4.0      0.0    0.0         0.0

regions = [
    {
        'label': 'North America',
        'countries': ['United States', 'Canada']
    },
    {
        'label': 'Europe',
        'countries': ['United Kingdom', 'Germany', 'France', 'Sweden', 'Switzerland', 'Russia and Soviet Union', 'Netherlands']
    },
    {
        'label': 'Asia',
        'countries': ['Japan', 'India']
    }
]

for region in regions:
    by_year_nat_sz[region['label']] = by_year_nat_sz[region['countries']].sum(axis=1)

df_regions = by_year_nat_sz[[r['label'] for r in regions]].cumsum()
# country  North America  Europe  Asia
# year
# 1901               0.0     6.0   0.0
# 1902               0.0    13.0   0.0
# 1903               0.0    17.0   0.0
# 1904               0.0    21.0   0.0
# 1905               0.0    24.0   0.0
# ...                ...     ...   ...
# 2019             369.0   350.0  29.0
# 2020             376.0   354.0  29.0
# 2021             380.0   360.0  29.0
# 2022             386.0   363.0  29.0
# 2023             390.0   365.0  29.0
#
# [123 rows x 3 columns]

df_regions.to_parquet("winners_by_region.parquet")  # precondition: fastparquet installed
