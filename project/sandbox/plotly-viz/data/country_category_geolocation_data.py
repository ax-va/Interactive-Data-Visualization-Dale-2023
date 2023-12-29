import pandas as pd
from geopy.geocoders import Nominatim

df = pd.read_parquet('../../data/nobel_winners_cleaned.parquet')  # precondition: fastparquet installed
df_country_category = df.groupby(['country', 'category']).size().unstack()
# category        Chemistry  Economics  Literature  Peace  Physics  Physiology or Medicine
# country
# Argentina             1.0        NaN         NaN    2.0      NaN                     1.0
# Australia             NaN        NaN         1.0    NaN      2.0                     7.0
# Austria               2.0        NaN         2.0    2.0      5.0                     5.0
# Bangladesh            NaN        NaN         NaN    1.0      NaN                     NaN
# Belarus               NaN        NaN         1.0    1.0      NaN                     NaN
# ...                   ...        ...         ...    ...      ...                     ...
# United Kingdom       30.0       10.0        13.0    9.0     26.0                    32.0
# United States        76.0       63.0        13.0   21.0     97.0                   105.0
# Vietnam               NaN        NaN         NaN    1.0      NaN                     NaN
# Yemen                 NaN        NaN         NaN    1.0      NaN                     NaN
# Yugoslavia            1.0        NaN         1.0    NaN      NaN                     NaN
#
# [62 rows x 6 columns]

df_country_category['Total'] = df_country_category.sum(1)
# category        Chemistry  Economics  Literature  Peace  Physics  Physiology or Medicine  Total
# country
# Argentina             1.0        NaN         NaN    2.0      NaN                     1.0    4.0
# Australia             NaN        NaN         1.0    NaN      2.0                     7.0   10.0
# Austria               2.0        NaN         2.0    2.0      5.0                     5.0   16.0
# Bangladesh            NaN        NaN         NaN    1.0      NaN                     NaN    1.0
# Belarus               NaN        NaN         1.0    1.0      NaN                     NaN    2.0
# ...                   ...        ...         ...    ...      ...                     ...    ...
# United Kingdom       30.0       10.0        13.0    9.0     26.0                    32.0  120.0
# United States        76.0       63.0        13.0   21.0     97.0                   105.0  375.0
# Vietnam               NaN        NaN         NaN    1.0      NaN                     NaN    1.0
# Yemen                 NaN        NaN         NaN    1.0      NaN                     NaN    1.0
# Yugoslavia            1.0        NaN         1.0    NaN      NaN                     NaN    2.0
#
# [62 rows x 7 columns]

df_country_category = df_country_category.loc[df_country_category.Total > 2]
# category                            Chemistry  Economics  Literature  Peace  Physics  Physiology or Medicine  Total
# country
# Argentina                                 1.0        NaN         NaN    2.0      NaN                     1.0    4.0
# Australia                                 NaN        NaN         1.0    NaN      2.0                     7.0   10.0
# Austria                                   2.0        NaN         2.0    2.0      5.0                     5.0   16.0
# Belgium                                   1.0        NaN         1.0    3.0      1.0                     4.0   10.0
# Canada                                    3.0        1.0         1.0    1.0      5.0                     4.0   15.0
# China (People's Republic of China)        NaN        NaN         1.0    1.0      NaN                     1.0    3.0
# Denmark                                   2.0        NaN         3.0    1.0      3.0                     5.0   14.0
# Egypt                                     1.0        NaN         1.0    2.0      NaN                     NaN    4.0
# France                                   11.0        4.0        17.0    9.0     14.0                    12.0   67.0
# Germany                                  30.0        1.0         8.0    4.0     26.0                    16.0   85.0
# Hungary                                   2.0        NaN         1.0    NaN      2.0                     3.0    8.0
# India                                     NaN        1.0         1.0    2.0      1.0                     NaN    5.0
# Ireland                                   NaN        NaN         3.0    4.0      1.0                     1.0    9.0
# Israel                                    6.0        2.0         1.0    3.0      NaN                     NaN   12.0
# Italy                                     1.0        NaN         6.0    1.0      4.0                     2.0   14.0
# Japan                                     7.0        NaN         2.0    1.0      9.0                     5.0   24.0
# Netherlands                               3.0        3.0         NaN    1.0      9.0                     2.0   18.0
# Norway                                    2.0        3.0         4.0    2.0      1.0                     2.0   14.0
# Poland                                    NaN        NaN         4.0    1.0      1.0                     NaN    6.0
# Russia and Soviet Union                   1.0        2.0         3.0    3.0      9.0                     2.0   20.0
# South Africa                              NaN        NaN         2.0    4.0      NaN                     1.0    7.0
# Spain                                     NaN        NaN         6.0    NaN      NaN                     1.0    7.0
# Sweden                                    5.0        2.0         8.0    5.0      5.0                     8.0   33.0
# Switzerland                               5.0        NaN         2.0    3.0      5.0                     7.0   22.0
# United Kingdom                           30.0       10.0        13.0    9.0     26.0                    32.0  120.0
# United States                            76.0       63.0        13.0   21.0     97.0                   105.0  375.0

df_country_category.sort_values("Total", ascending=False)
# category                            Chemistry  Economics  Literature  Peace  Physics  Physiology or Medicine  Total
# country
# United States                            76.0       63.0        13.0   21.0     97.0                   105.0  375.0
# United Kingdom                           30.0       10.0        13.0    9.0     26.0                    32.0  120.0
# Germany                                  30.0        1.0         8.0    4.0     26.0                    16.0   85.0
# France                                   11.0        4.0        17.0    9.0     14.0                    12.0   67.0
# Sweden                                    5.0        2.0         8.0    5.0      5.0                     8.0   33.0
# Japan                                     7.0        NaN         2.0    1.0      9.0                     5.0   24.0
# Switzerland                               5.0        NaN         2.0    3.0      5.0                     7.0   22.0
# Russia and Soviet Union                   1.0        2.0         3.0    3.0      9.0                     2.0   20.0
# Netherlands                               3.0        3.0         NaN    1.0      9.0                     2.0   18.0
# Austria                                   2.0        NaN         2.0    2.0      5.0                     5.0   16.0
# Canada                                    3.0        1.0         1.0    1.0      5.0                     4.0   15.0
# Italy                                     1.0        NaN         6.0    1.0      4.0                     2.0   14.0
# Denmark                                   2.0        NaN         3.0    1.0      3.0                     5.0   14.0
# Norway                                    2.0        3.0         4.0    2.0      1.0                     2.0   14.0
# Israel                                    6.0        2.0         1.0    3.0      NaN                     NaN   12.0
# Australia                                 NaN        NaN         1.0    NaN      2.0                     7.0   10.0
# Belgium                                   1.0        NaN         1.0    3.0      1.0                     4.0   10.0
# Ireland                                   NaN        NaN         3.0    4.0      1.0                     1.0    9.0
# Hungary                                   2.0        NaN         1.0    NaN      2.0                     3.0    8.0
# South Africa                              NaN        NaN         2.0    4.0      NaN                     1.0    7.0
# Spain                                     NaN        NaN         6.0    NaN      NaN                     1.0    7.0
# Poland                                    NaN        NaN         4.0    1.0      1.0                     NaN    6.0
# India                                     NaN        1.0         1.0    2.0      1.0                     NaN    5.0
# Egypt                                     1.0        NaN         1.0    2.0      NaN                     NaN    4.0
# Argentina                                 1.0        NaN         NaN    2.0      NaN                     1.0    4.0
# China (People's Republic of China)        NaN        NaN         1.0    1.0      NaN                     1.0    3.0

df_country_category = df_country_category.rename(
    index={
        'Russia and Soviet Union': 'Russia',
        "China (People's Republic of China)": 'China',
    })

geolocator = Nominatim(user_agent="nobel_prize_app")

for country in df_country_category.index[:3]:
    location = geolocator.geocode({"country": country})
    print("Name: ", country)
    print("Coords: ", (location.latitude, location.longitude))
    print("Raw details: ", location.raw)
# Name:  Argentina
# Coords:  (-34.9964963, -64.9672817)
# Raw details:  {'place_id': 49181870, 'licence': 'Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright', 'osm_type': 'relation', 'osm_id': 286393, 'lat': '-34.9964963', 'lon': '-64.9672817', 'class': 'boundary', 'type': 'administrative', 'place_rank': 4, 'importance': 0.8101041945616906, 'addresstype': 'country', 'name': 'Argentina', 'display_name': 'Argentina', 'boundingbox': ['-55.1925709', '-21.7808568', '-73.5605371', '-53.6374515']}
# Name:  Australia
# Coords:  (-24.7761086, 134.755)
# Raw details:  {'place_id': 59847876, 'licence': 'Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright', 'osm_type': 'relation', 'osm_id': 80500, 'lat': '-24.7761086', 'lon': '134.755', 'class': 'boundary', 'type': 'administrative', 'place_rank': 4, 'importance': 0.8521350639151115, 'addresstype': 'country', 'name': 'Australia', 'display_name': 'Australia', 'boundingbox': ['-55.3228175', '-9.0880125', '72.2461932', '168.2261259']}
# Name:  Austria
# Coords:  (47.59397, 14.12456)
# Raw details:  {'place_id': 90580773, 'licence': 'Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright', 'osm_type': 'relation', 'osm_id': 16239, 'lat': '47.59397', 'lon': '14.12456', 'class': 'boundary', 'type': 'administrative', 'place_rank': 4, 'importance': 0.8230438741641259, 'addresstype': 'country', 'name': 'Österreich', 'display_name': 'Österreich', 'boundingbox': ['46.3722987', '49.0205249', '9.5307487', '17.1607728']}

lats = {}  # latitude
lons = {}  # longitude
for country in df_country_category.index:
    location = geolocator.geocode({"country": country})
    if location:
        lats[country] = location.latitude
        lons[country] = location.longitude
    else:
        print(f"No coords for '{country}'")


df_country_category.loc[:, 'Lat'] = pd.Series(lats)
df_country_category.loc[:, 'Lon'] = pd.Series(lons)
df_country_category
# category        Chemistry  Economics  Literature  Peace  Physics  Physiology or Medicine  Total        Lat         Lon
# country
# Argentina             1.0        NaN         NaN    2.0      NaN                     1.0    4.0 -34.996496  -64.967282
# Australia             NaN        NaN         1.0    NaN      2.0                     7.0   10.0 -24.776109  134.755000
# Austria               2.0        NaN         2.0    2.0      5.0                     5.0   16.0  47.593970   14.124560
# Belgium               1.0        NaN         1.0    3.0      1.0                     4.0   10.0  50.640281    4.666715
# Canada                3.0        1.0         1.0    1.0      5.0                     4.0   15.0  61.066692 -107.991707
# China                 NaN        NaN         1.0    1.0      NaN                     1.0    3.0  35.000074  104.999927
# Denmark               2.0        NaN         3.0    1.0      3.0                     5.0   14.0  55.670249   10.333328
# Egypt                 1.0        NaN         1.0    2.0      NaN                     NaN    4.0  26.254049   29.267547
# France               11.0        4.0        17.0    9.0     14.0                    12.0   67.0  46.603354    1.888334
# Germany              30.0        1.0         8.0    4.0     26.0                    16.0   85.0  51.163818   10.447831
# Hungary               2.0        NaN         1.0    NaN      2.0                     3.0    8.0  47.181759   19.506094
# India                 NaN        1.0         1.0    2.0      1.0                     NaN    5.0  22.351115   78.667743
# Ireland               NaN        NaN         3.0    4.0      1.0                     1.0    9.0  52.865196   -7.979460
# Israel                6.0        2.0         1.0    3.0      NaN                     NaN   12.0  30.812425   34.859476
# Italy                 1.0        NaN         6.0    1.0      4.0                     2.0   14.0  42.638426   12.674297
# Japan                 7.0        NaN         2.0    1.0      9.0                     5.0   24.0  36.574844  139.239418
# Netherlands           3.0        3.0         NaN    1.0      9.0                     2.0   18.0  52.247650    5.541247
# Norway                2.0        3.0         4.0    2.0      1.0                     2.0   14.0  61.152939    8.787665
# Poland                NaN        NaN         4.0    1.0      1.0                     NaN    6.0  52.215933   19.134422
# Russia                1.0        2.0         3.0    3.0      9.0                     2.0   20.0  64.686314   97.745306
# South Africa          NaN        NaN         2.0    4.0      NaN                     1.0    7.0 -28.816624   24.991639
# Spain                 NaN        NaN         6.0    NaN      NaN                     1.0    7.0  39.326068   -4.837979
# Sweden                5.0        2.0         8.0    5.0      5.0                     8.0   33.0  59.674971   14.520858
# Switzerland           5.0        NaN         2.0    3.0      5.0                     7.0   22.0  46.798562    8.231974
# United Kingdom       30.0       10.0        13.0    9.0     26.0                    32.0  120.0  54.702354   -3.276575
# United States        76.0       63.0        13.0   21.0     97.0                   105.0  375.0  39.783730 -100.445882

df_country_category.to_parquet("country_category_geolocation_data.parquet")
