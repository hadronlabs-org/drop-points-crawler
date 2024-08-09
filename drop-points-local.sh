docker exec mainnet-drop-points-crawler bun crawl prepare
docker exec mainnet-drop-points-crawler bun crawl crawl neutron
docker exec mainnet-drop-points-crawler bun crawl crawl neutron-astroport
docker exec mainnet-drop-points-crawler bun crawl crawl neutron-astroport-generator
docker exec mainnet-drop-points-crawler bun crawl finish

docker exec mainnet-drop-points-crawler ./backup.sh backups
mkdir -p "$(pwd)/mainnet-backups"
mkdir -p "$(pwd)/tmp/mainnet-backups"
docker cp mainnet-drop-points-crawler:/usr/src/app/backups/. "$(pwd)/tmp/mainnet-backups"
rsync -av --ignore-existing "$(pwd)/tmp/mainnet-backups/" "$(pwd)/mainnet-backups/"
rm -rf "$(pwd)/tmp"
docker exec mainnet-drop-points-crawler rm -rf backups