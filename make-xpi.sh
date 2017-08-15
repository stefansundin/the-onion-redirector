#!/bin/bash -ex
V=$(cat extension/manifest.json | jq -Mr .version)
rm -f "the-onion-redirector-$V.xpi"
cd extension
zip -r "../the-onion-redirector-$V.xpi" . -x '*.git*' -x '*.DS_Store' -x '*Thumbs.db'
