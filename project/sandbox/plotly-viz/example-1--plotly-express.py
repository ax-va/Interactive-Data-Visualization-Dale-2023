import pandas as pd
import plotly.express as px

df_regions = pd.read_parquet("data/winners_by_region.parquet")  # precondition: fastparquet installed

# Plot data in dataframe

fig = px.line(
    df_regions,
    labels={'country': 'Regions'},  # relabeling from "country" to "Regions" in the legend label
    line_dash='country',
    line_dash_sequence=['solid', 'dash', 'dot']
)
fig.show()
