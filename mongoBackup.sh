#i!/bin/bash/

OUTDIR="./mongoBackDir"
mongodump --db fmtdb --out $OUTDIR