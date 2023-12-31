"""
See
https://plotly.com/python/mapbox-layers/#mapbox-access-tokens-and-when-you-need-them

The word "mapbox" in the trace names and layout.mapbox refers to the Mapbox GL JS open-source library,
which is integrated into Plotly.py. If your basemap in layout.mapbox.style uses data from the Mapbox service,
then you will need to register for a free account at https://mapbox.com/ and obtain a Mapbox Access token.
This token should be provided in layout.mapbox.access_token (or, if using Plotly Express,
via the px.set_mapbox_access_token() configuration function).

If your layout.mapbox.style does not use data from the Mapbox service, you do not need to register for a Mapbox account.

Cannot prove the code without Mapbox access token.
"""
import pandas as pd
import plotly.graph_objs as go

from utils import calc_marker_radius

df_ccg = pd.read_parquet("data/country_category_geolocation_data.parquet")
df_ccg.head(2)
# category   Chemistry  Economics  Literature  Peace  Physics  Physiology or Medicine  Total        Lat         Lon
# country
# Argentina        1.0        NaN         NaN    2.0      NaN                     1.0    4.0 -34.996496  -64.967282
# Australia        NaN        NaN         1.0    NaN      2.0                     7.0   10.0 -24.776109  134.755000

df_ccg.fillna(0, inplace=True)
df_ccg.head(2)
# category   Chemistry  Economics  Literature  Peace  Physics  Physiology or Medicine  Total        Lat         Lon
# country
# Argentina        1.0        0.0         0.0    2.0      0.0                     1.0    4.0 -34.996496  -64.967282
# Australia        0.0        0.0         1.0    0.0      2.0                     7.0   10.0 -24.776109  134.755000

mapbox_access_token = "pk.eyJ1Ij...JwFsbg"  # Mapbox access token to use Mapbox-specific layers

categories = [
    'Total',
    'Chemistry',
    'Economics',
    'Literature',
    'Peace',
    'Physics',
    'Physiology or Medicine',
]

colors = [
    '#1b9e77',
    '#d95f02',
    '#7570b3',
    '#e7298a',
    '#66a61e',
    '#e6ab02',
    '#a6761d',
]

buttons = []
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
fig = go.Figure(layout=layout)
default_category = 'Total'

for category, color, country in zip(categories, colors, df_ccg.index):
    visible = False
    if category == default_category:
        visible = True
    fig.add_trace(
        go.Scattermapbox(
            lat=df_ccg.Lat,
            lon=df_ccg.Lon,
            mode='markers',
            marker=dict(
                size=df_ccg[category].apply(calc_marker_radius, args=(7,)),
                color=color,
                opacity=0.8,
            ),
            text=[f'{country} prizes for {category}: {int(x)}' for i, x in enumerate(df_ccg[category])],
            hoverinfo='text',
            visible=visible,
        ),
    )

    mask = [False] * len(categories)
    # [False, False, False, False, False, False, False]
    mask[categories.index(category)] = True
    # Add a button to the button list using the Boolean mask
    buttons.append(
        dict(
            label=category,
            method="update",
            args=[{"visible": mask}],
        ),
    )

fig.layout.update(
    updatemenus=[
        dict(
            type="buttons",
            direction="down",
            active=0,
            x=0.0,
            xanchor='left',
            y=0.65,
            showactive=True,  # Show the last button clicked
            buttons=buttons
        )
    ]
)
fig.show()
