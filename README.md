# Medicinal Plants in Modern Drug Discovery — research article

This repository contains an open-source Python/fpdf2 manuscript generator and a complete PLOS ONE-style research article that reviews medicinal-plant drug discovery and audits the generator's reproducibility, layout, citations, and journal compliance.

## Start here

- **Standalone manuscript:** [`paper/Medicinal_Plants_Drug_Discovery.tex`](paper/Medicinal_Plants_Drug_Discovery.tex)
- **Compiled PDF:** [`paper/Medicinal_Plants_Drug_Discovery.pdf`](paper/Medicinal_Plants_Drug_Discovery.pdf)
- **Package guide:** [`paper/README.md`](paper/README.md)
- **Original generator:** [`generate_pdf.py`](generate_pdf.py)

## Author

Israt Jahan Mithun — Independent Researcher — mithunjahan53@gmail.com

## Compile

```bash
tectonic paper/Medicinal_Plants_Drug_Discovery.tex
```

## Reproduce the audit

```bash
python paper/code/analyze_artifact.py
python paper/code/make_figures.py
```

The manuscript is formatted with 12-pt Times-compatible type, double spacing, continuous line numbers, 1-inch margins, Vancouver numbered references, editable LaTeX tables, vector figures, and PLOS ONE-style back matter. See `paper/README.md` for the complete file map and the scientific caveats about the curated docking and ADMET values.
