import numpy as np

def calc_marker_radius(size, scale=5):
    return np.sqrt(size / np.pi) * scale