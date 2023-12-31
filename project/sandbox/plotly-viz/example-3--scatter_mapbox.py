import pandas as pd
import plotly.express as px

from utils import calc_marker_radius

df_country_category_geolocation = pd.read_parquet("data/country_category_geolocation_data.parquet")

size = df_country_category_geolocation['Total'].apply(calc_marker_radius, args=(16,))
fig = px.scatter_mapbox(
    df_country_category_geolocation,
    lat="Lat",
    lon="Lon",
    hover_name=df_country_category_geolocation.index,  # the title of the mouse-over tooltip
    hover_data=['Total'],
    color_discrete_sequence=["olive"],
    zoom=0.7,  # the position of the camera above the Earth
    size=size
)
fig.update_layout(mapbox_style="carto-positron", width=800, height=450)
fig.update_layout(margin={"r": 0, "t": 0, "l": 0, "b": 0})
fig.show()
