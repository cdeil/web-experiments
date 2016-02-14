import json
import click
from astropy.table import Table

def _dump_json(data, filename):
    click.secho('Writing {}'.format(filename), fg='green')
    with open(str(filename), 'w') as fh:
        json.dump(data, fh)
        fh.write('\n')

table = Table.read('https://github.com/gammapy/gammapy-extra/blob/master/datasets/catalogs/fermi/gll_psch_v08.fit.gz?raw=true')
cols = ['Source_Name', 'RAJ2000', 'DEJ2000', 'GLON', 'GLAT', 'CLASS']
df = table[cols].to_pandas()
data = df.to_json()

_dump_json(data, 'data/gll_psch_v08.json')
