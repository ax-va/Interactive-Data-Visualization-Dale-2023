"""
See
https://plotly.com/python/mapbox-layers/#mapbox-access-tokens-and-when-you-need-them

The word "mapbox" in the trace names and layout.mapbox refers to the Mapbox GL JS open-source library,
which is integrated into Plotly.py. If your basemap in layout.mapbox.style uses data from the Mapbox service,
then you will need to register for a free account at https://mapbox.com/ and obtain a Mapbox Access token.
This token should be provided in layout.mapbox.access_token (or, if using Plotly Express,
via the px.set_mapbox_access_token() configuration function).

If your layout.mapbox.style does not use data from the Mapbox service, you do not need to register for a Mapbox account.

The code is not proved to be working.
"""
import pandas as pd
import plotly.graph_objs as go

from utils import calc_marker_radius

df_ccg = pd.read_parquet("data/country_category_geolocation_data.parquet")

mapbox_access_token = "pk.eyJ1Ij...JwFsbg"  # Mapbox access token to use Mapbox-specific layers

site_lat = df_ccg.Lat
site_lon = df_ccg.Lon
totals = df_ccg.Total
locations_name = df_ccg.index

layout = go.Layout(
    title='Nobel prize totals by country',
    hovermode='closest',
    showlegend=False,
    margin={'l': 0, 't': 0, 'b': 0, 'r': 0},
    mapbox=dict(
        accesstoken=mapbox_access_token,
        # Set map details here including center, pitch and bearing
        # bearing=0,
        # # center=dict(
        # #     lat=38,
        # #     lon=-94
        # # ),
        # pitch=0,
        zoom=0.7,
        style='light'
    ),
    width=875, height=450
)

traces = [
    go.Scattermapbox(
        lat=site_lat,
        lon=site_lon,
        mode='markers',
        marker=dict(
            size=totals.apply(calc_marker_radius, args=(7,)),
            color='olive',
            opacity=0.8
        ),
        text=[f'{locations_name[i]} won {int(x)} total prizes' for i, x in enumerate(totals)],
        hoverinfo='text'
        )
]
fig = go.Figure(traces, layout=layout)
fig.show()
