import pandas as pd

df_nobel_winners_cleaned = pd.read_json("nobel_winners_cleaned.json")
df_nobel_winners_cleaned = df_nobel_winners_cleaned.set_index("name")
df_nodel_winners_with_images = pd.read_json("nobel_winners_with_images.json")
df_nodel_winners_with_images =  df_nodel_winners_with_images[["name", "image_urls"]]
df_nodel_winners_with_images = df_nodel_winners_with_images.set_index("name")

print(len(df_nobel_winners_cleaned))
# 974
print(df_nobel_winners_cleaned.loc["Lê Đức Thọ"])
# link              https://en.wikipedia.org/wiki/L%C3%AA_%C4%90%E...
# year                                                           1973
# category                                                      Peace
# country                                                     Vietnam
# text              Lê Đức Thọ ,  born in French Indochina , Peace...
# wikidata_code                                               Q233969
# date_of_birth                               1911-10-14T00:00:00.000
# date_of_death                               1990-10-13T00:00:00.000
# place_of_birth                                               Hà Nam
# place_of_death                                                Hanoi
# gender                                                         male
# born_in                                                        None
# award_age                                                        62
# Name: Lê Đức Thọ, dtype: object

print(len(df_nodel_winners_with_images))
# 1195
print(df_nodel_winners_with_images.loc["Lê Đức Thọ"])
# image_urls    [https://upload.wikimedia.org/wikipedia/common...
# Name: Lê Đức Thọ, dtype: object

# # The following way doesn't work

# df_nobel_winners_complete = df_nobel_winners_cleaned.merge(
#     df_nodel_winners_with_images,
#     how="left",
#     left_index=True,
#     right_index=True,
# )
#
# print(len(df_nobel_winners_complete))
# # 1197
# print(df_nobel_winners_complete.loc["Lê Đức Thọ"])
# # link              https://en.wikipedia.org/wiki/L%C3%AA_%C4%90%E...
# # year                                                           1973
# # category                                                      Peace
# # country                                                     Vietnam
# # text              Lê Đức Thọ ,  born in French Indochina , Peace...
# # wikidata_code                                               Q233969
# # date_of_birth                               1911-10-14T00:00:00.000
# # date_of_death                               1990-10-13T00:00:00.000
# # place_of_birth                                               Hà Nam
# # place_of_death                                                Hanoi
# # gender                                                         male
# # born_in                                                        None
# # award_age                                                        62
# # image_urls        [https://upload.wikimedia.org/wikipedia/common...
# # Name: Lê Đức Thọ, dtype: object
#
# # df_nobel_winners_complete = df_nobel_winners_complete.reset_index().drop_duplicates(subset=["name"]).set_index("name")
# # print(len(df_nobel_winners_complete))
# # # 969
# #
# # df_nobel_winners_complete = df_nobel_winners_complete.groupby(df_nobel_winners_complete.index).last()
# # print(len(df_nobel_winners_complete))
# # # 969

# # 5 entries are lost

df_nobel_winners_complete = df_nobel_winners_cleaned.copy()

for index, row in df_nobel_winners_complete.iterrows():
    if index in df_nodel_winners_with_images.index:
        row["image_urls"] = df_nodel_winners_with_images.loc[index]["image_urls"]

print(len(df_nobel_winners_complete))
# 974

# No entries are lost

df_nobel_winners_complete = df_nobel_winners_complete.reset_index()
df_nobel_winners_complete.to_json(
    'nobel_winners_cleaned_with_images.json',
    orient='records',
    date_format='iso'
)