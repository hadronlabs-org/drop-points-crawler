docker exec mainnet-drop-points-crawler bun crawl prepare
docker exec mainnet-drop-points-crawler bun crawl crawl neutron
docker exec mainnet-drop-points-crawler bun crawl crawl neutron-astroport
docker exec mainnet-drop-points-crawler bun crawl crawl neutron-astroport-generator
docker exec mainnet-drop-points-crawler bun crawl finish --publish
docker exec mainnet-drop-points-crawler bun crawl publish_on_chain

docker exec mainnet-drop-points-crawler ./backup.sh backups
mkdir -p "$(pwd)/mainnet-backups"
mkdir -p "$(pwd)/tmp/mainnet-backups"
docker cp mainnet-drop-points-crawler:/usr/src/app/backups/. "$(pwd)/tmp/mainnet-backups"
cp "$(pwd)/tmp/mainnet-backups/$(ls -1 "$(pwd)/tmp/mainnet-backups/" | tail -n 1)" "$(pwd)/mainnet-backups/"
aws s3 cp "$(pwd)/mainnet-backups/$(ls -1 "$(pwd)/mainnet-backups" | tail -n 1)" s3://crawler.backup/
rm -rf "$(pwd)/tmp"
docker exec mainnet-drop-points-crawler rm -rf backups