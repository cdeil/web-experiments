"""
Dump FITS format data to JSON format for display on website.
"""
import json
import click
from astropy.table import Table

def _dump_json(data, filename):
    click.secho('Writing {}'.format(filename), fg='green')
    with open(str(filename), 'w') as fh:
        json.dump(data, fh)
        fh.write('\n')

table = Table.read('https://github.com/gammapy/gammapy-extra/blob/master/datasets/catalogs/fermi/gll_psch_v08.fit.gz?raw=true')
cols = ['Source_Name',
        'RAJ2000',
        'DEJ2000',
        'GLON',
        'GLAT',
        'Pos_err_68',
        'TS',
        'Spectral_Index',
        'Unc_Spectral_Index',
        'Intr_Spectral_Index_D11',
        'Unc_Intr_Spectral_Index_D11',
        'Intr_Spectral_Index_G12',
        'Unc_Intr_Spectral_Index_G12',
        'Flux50',
        'Unc_Flux50',
        'Energy_Flux50',
        'Unc_Energy_Flux50',
        'Flux50_171GeV',
        'Unc_Flux50_171GeV',
        'Sqrt_TS50_171GeV',
        'Flux171_585GeV',
        'Unc_Flux171_585GeV',
        'Sqrt_TS171_585GeV',
        'Flux585_2000GeV',
        'Unc_Flux585_2000GeV',
        'Sqrt_TS585_2000GeV',
        'Npred',
        'HEP_Energy',
        'HEP_Prob',
        'ROI',
        'ASSOC',
        'ASSOC_PROB_BAY',
        'ASSOC_PROB_LR',
        'CLASS',
        'Redshift',
        'NuPeak_obs',
        '3FGL_Name',
        '1FHL_Name',
        'TeVCat_Name']
df = table[cols].to_pandas()
data = df.to_json()

_dump_json(data, 'data/data.json')
