import pandas as pd
import plotly.graph_objs as go

df_regions = pd.read_parquet("data/winners_by_region.parquet")  # precondition: fastparquet installed
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

# Create an array of line graph-objects to use as figure's data
traces = []
line_types = ['solid', 'dash', 'dot']
for index, region in enumerate(regions):
    region_name = region['label']
    traces.append(
        go.Scatter(
            x=df_regions.index,  # years
            y=df_regions[region_name],  # cum. prizes
            name=region_name,
            mode="lines",  # lines = connected points
            # HTML template for mouse hovering
            hovertemplate=f"{region_name}<br>year=%{{x}}<br>cum.prize=%{{y}}<extra></extra>",
            line={"dash": line_types[index]},
        )
    )
layout = go.Layout(height=600, width=600, xaxis_title="year", yaxis_title="cumulative prizes")
# Create a figure using the array of graph-objects and the layout
fig = go.Figure(traces, layout)
fig.show()
